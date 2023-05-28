/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect, useContext } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
import { Statusorder } from '../src/models';
import { useAuthContext } from './AuthContext';
import GROUPS from '../constants/groups';


const OrdenDetailsContext = createContext({});

const OrdenDetailsContextProvider = ({ id, children }) => {
  const authContext = useAuthContext();
  const initialResultStat = {added:0, total:0};
  const [loading, setLoading] = useState(false);
    const [orden, setOrden] = useState({});
    const [patient, setPatient] = useState();
    const [doctor, setDoctor] = useState();
    const [pruebas, setPruebas] = useState([]);
    const [ordenItems, setOrdenItems] = useState([]);
    const [parametros, setParametros] = useState([]);
    const [references, setReferences] = useState([]);
    const [resultStat, setResultStat] = useState(initialResultStat)
    const [results, setResults] = useState([])
    const fetchPatient = async (pacienteID) => {
      const result = await API.graphql(graphqlOperation(queries.getPACIENTE,{id: pacienteID}))
      setPatient(result?.data?.getPACIENTE);
    }
    const fetchDoctor = async (doctorID) => {
      const result = await API.graphql(graphqlOperation(queries.getDOCTOR,{id: doctorID}))
      setDoctor(result?.data?.getDOCTOR);
    }
    const fetchPruebas = async (ordenItemsRes) => {
      const result = await API.graphql(
        graphqlOperation(
          queries.listPRUEBAS,{
            filter: {or:(ordenItemsRes||[]).map(item=>({id: {eq: item.pruebaID}}))}
          }
        )
      )
      const pruebasRes = result?.data?.listPRUEBAS?.items
      setPruebas(pruebasRes);
      const listPARAMETROSTESTS = await API.graphql(
        graphqlOperation(queries.listPARAMETROSTESTS, {
          filter:{or:(pruebasRes||[]).map(item=>({pruebaID: {eq: item.id}}))}
        })
      );
      const parametersRes =listPARAMETROSTESTS?.data?.listPARAMETROSTESTS?.items;
      setParametros(parametersRes)
      const listREFERENCES = await API.graphql(
        graphqlOperation(queries.listREFERENCES, {
          filter:{or:(parametersRes||[]).map(item=>({parametrostestID: {eq: item.id}}))}
        })
      );
      setReferences(listREFERENCES?.data?.listREFERENCES?.items)
    }
  
    const fetchOrden = async () => {
      if(!loading) {
        setLoading(true);
        const getORDEN = await API.graphql(graphqlOperation(queries.getORDEN, {id}));
        const ordenRes = getORDEN?.data?.getORDEN;
        setOrden(ordenRes);
        if(ordenRes?.id){
          fetchPatient(ordenRes?.pacienteID);
          fetchDoctor(ordenRes?.doctorID);
          const listORDENPRUEBAITEMS = await API.graphql(
            graphqlOperation(queries.listORDENPRUEBAITEMS, {
              filter:{ordenID:{eq:ordenRes?.id}}
            })
          );
          const ordenItemsRes = listORDENPRUEBAITEMS?.data?.listORDENPRUEBAITEMS?.items
          setOrdenItems(ordenItemsRes);

          if(ordenItemsRes?.length > 0){
            await fetchPruebas(ordenItemsRes);
          }
        }
        setLoading(false);
      }
    }

    const fetchResult = async () => {
      const listRESULTPARAMITEMS = await API.graphql(graphqlOperation(queries.listRESULTPARAMITEMS, {
        filter: {or:(ordenItems||[]).map(item=>({ordenpruebaitemID:{eq:item.id}}))}
      }));
      if(parametros.length > 0){
        setResults((listRESULTPARAMITEMS?.data?.listRESULTPARAMITEMS?.items ?? []).map(result => {
          const PARAMETROSTEST = parametros.find(p=>p.id===result.parametrostestID);
          const _references = references.filter(r=>r.parametrostestID===result.parametrostestID);
          return {
            id: result.id,
            parametrostestID: result.parametrostestID,
            nombre: PARAMETROSTEST.nombre,
            unidad: PARAMETROSTEST.unidad,
            references: _references,
            resultParam: result.resultParam,
            selectedReference: result.selectedReference,
            ordenpruebaitemID: result.ordenpruebaitemID,
            _version: result._version
          }
        }));
      }
    }
    useEffect(() => {
      if(references?.length > 0){
        fetchResult()
      }
    },[references.map(r=>r.id).join(), ordenItems.map(r=>r.id).join()])
    useEffect(() => {
      if(results?.length > 0){
        setResultStat(results.reduce((resultStat, result)=>{
          if(result.resultParam && result.selectedReference){
            resultStat['added'] = (resultStat['added'] ?? 0) + 1;
          }
          resultStat['total'] = (resultStat['total'] ?? 0) + 1;
          return resultStat;
        },initialResultStat));
      }
    }, [results.map(o=>`${o.id}-${o.resultParam}-${o.selectedReference}`).join()])

    useEffect(() => {
      if(id){
        fetchOrden();
      }
    }, [id])

    const insightRemains = () => {
      return ordenItems.some(o=> !o.resultInsight);
    };
  
    return (
      <OrdenDetailsContext.Provider
        value={{
          orden,
          pruebas,
          doctor,
          patient,
          ordenItems,
          results,
          resultStat,
          parametros,
          references,
          insightRemains,
          loading,
        }}
      >
        {children}
      </OrdenDetailsContext.Provider>
    );
}

export default OrdenDetailsContextProvider;

export const useOrdenDetailsContext = () => useContext(OrdenDetailsContext);