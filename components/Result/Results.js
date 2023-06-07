import GROUPS from "@/constants/groups";
import { useAuthContext } from "@/context/AuthContext";
import OrdenDetailsContextProvider from "@/context/OrdenDetailsContext";
import { Typeorder } from "@/src/models";
import { Statusorder } from "@/src/models";
import { CircularProgress, Grid } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import { toast } from "react-toastify";
import * as queries from '../../src/graphql/queries';
import OrdenDetails from "./OrdenDetails";

function Results({signOut,user}) {
    const [loading, setLoading] = useState(false);
    const [ordens, setOrdens] = useState([]);
    const [observer, setObserver] = useState({});
    const [selectedOrder, setSelectedOrder] = useState({});
    const {name, groupName, loading: atuhLoading, sub} = useAuthContext();

    const [nextToken, setNextToken] = useState(undefined)
    const [nextNextToken, setNextNextToken] = useState()
    const [previousTokens, setPreviousTokens] = useState([])
    const hasNext = !!nextNextToken
    const hasPrev = previousTokens.length
    const disabledPrev = !hasPrev || loading
    const disabledNext = !hasNext || loading
    const next = () => {
      setPreviousTokens((prev) => [...prev, nextToken])
      setNextToken(nextNextToken)
      setNextNextToken(null)
    }
  
    const prev = () => {
      setNextToken(previousTokens.pop())
      setPreviousTokens([...previousTokens])
      setNextNextToken(null)
    }
  
    const reset = () => {
      setNextToken(undefined)
      setPreviousTokens([])
      setNextNextToken(null)
    }
  

    const [filters, setFilters] = useState({
        type: "ALL",
        status: 'ALL',
        totalPruebas: 0,
        costoTotal:0,
        fechaOrdenLe: '',
        fechaOrdenGe: '',
      });
    const getOrdens = async (filter) =>{
      const limit = 5;
      const listORDENS = await API.graphql(graphqlOperation(queries.listORDENS, {
        limit,
        nextToken,
        filter:{
          ...filter,
          type:{eq: Typeorder.ORDER},
          or:[{status: {eq: Statusorder.VERIFIED}}, {status: {eq: Statusorder.SENT}}]
        }
      }))
      const items = listORDENS?.data?.listORDENS?.items;
      if(items.length===limit) {
        setNextNextToken(listORDENS?.data?.listORDENS?.nextToken);
      }
      return items;
    }
    const fetchOrdenes = async () => {
        if(!loading) {
          setLoading(true);
          const filter = {
            totalPruebas: {eq:filters.totalPruebas},
            costoTotal: {eq:filters.costoTotal},
            fechaOrden:{ge:filters.fechaOrdenGe, le:filters.fechaOrdenLe}
          };
          if(!filters.totalPruebas || Number(filters.totalPruebas)===0){
            delete filter.totalPruebas
          }
          if(!filters.costoTotal || Number(filters.costoTotal)===0){
            delete filter.costoTotal
          }
          if(!filters.fechaOrdenLe || !filters.fechaOrdenGe){
            if(!filters.fechaOrdenLe && !filters.fechaOrdenGe) {
              delete filter.fechaOrden
            } else if(!filters.fechaOrdenGe) {
              delete filter.fechaOrden.ge
            } else if(!filters.fechaOrdenLe) {
              delete filter.fechaOrden.le
            }
          }
          if(groupName===GROUPS.DOCTOR){
            const listDOCTORS = await API.graphql(graphqlOperation(queries.listDOCTORS, {filter:{email: {eq: user.attributes.email}}}))
            const doctor = listDOCTORS?.data?.listDOCTORS?.items[0];
            setObserver(doctor);
            const ordens = await getOrdens({...filter, doctorID: {eq: doctor.id}}) || [];
            const listPACIENTES = await API.graphql(graphqlOperation(queries.listPACIENTES, {filter:{or:(ordens||[]).map(orden=>({id: {eq: orden.pacienteID}}))}}))
            const patients = listPACIENTES?.data?.listPACIENTES?.items.reduce((all, patient) => {all[patient.id] = patient; return all},{});
            setOrdens(ordens.map(orden=>({...orden, contestant:patients[orden.pacienteID]})));
          }

          if(groupName===GROUPS.PATIENT){
            const listPACIENTES = await API.graphql(graphqlOperation(queries.listPACIENTES, {filter:{email: {eq: user.attributes.email}}}))
            const patient = listPACIENTES?.data?.listPACIENTES?.items[0];
            setObserver(patient);
            const ordens = await getOrdens({...filter, pacienteID: {eq: patient.id}}) || [];
            const listDOCTORS = await API.graphql(graphqlOperation(queries.listDOCTORS, {filter:{or:(ordens||[]).map(orden=>({id: {eq: orden.doctorID}}))}}))
            const doctors = listDOCTORS?.data?.listDOCTORS?.items.reduce((all, doctor) => {all[doctor.id] = doctor; return all},{});
            setOrdens(ordens.map(orden=>({...orden, contestant:doctors[orden.doctorID]})));
          }
          setLoading(false);
        }
      };

    // console.log(user, ordens);
      useEffect(() => {
        if(!atuhLoading && (groupName!==GROUPS.DOCTOR || groupName!==GROUPS.PATIENT)){
          toast("No eres doctora ni paciente", {
              position: toast.POSITION.TOP_RIGHT,autoClose: 2000, type: 'error'
          });
          signOut();
        }
        if(groupName===GROUPS.DOCTOR || groupName===GROUPS.PATIENT){
          fetchOrdenes();
        }
      }, [
          nextToken,
          groupName,
          filters.type, 
          filters.status,
          filters.totalPruebas,
          filters.costoTotal,
          filters.fechaOrdenGe,
          filters.fechaOrdenLe
      ]);

      const isResultReady = (status) => {
        switch(status){
          case Statusorder.CREATED: return false;
          case Statusorder.PUBLISHED: return false;
          case Statusorder.VERIFIED: return true;
          case Statusorder.SENT: return true;
        }
      }
      const [open, setOpen] = useState(false);
      const handleOpen = (record) => {
        setSelectedOrder(record);
        setTimeout(()=>{
          setOpen(true);
        }, 50);
      };
      const handleClose = () => {
        setOpen(false);
      };

    return (
            <div className="bannerSanmateo afterBanner posRelative" style={{marginTop:'4rem'}}>
                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="titlePortada rowQh dFlex" style={{ gap: "20px", zIndex: "200" }}>
                    <div className="blockElement flex flex-row">
                        <div className="basis-1/4">
                            <div className="bg-gray-200 p-4 m-4 text-center rounded-md">
                                <div className="font-semibold text-lg">{name}</div>
                                <div className="font-light mt-8">({groupName})</div>
                                <div className="font-light">{user.username}</div>
                                <div style={{fontSize:'0.7rem'}}>{sub}</div>
                                <button className="bg-gray-300 text-red-600 rounded-md mt-8 py-2 px-4 my-2" onClick={signOut}>Sign Out</button>
                            </div>
                        </div>
                        <div className="basis-3/4">
                          {
                            loading
                            ? <ul className="flex flex-col p-4">
                                <div className="select-none cursor-pointer bg-gray-200 rounded-md justify-center flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                  <CircularProgress />
                                </div>
                            </ul>
                            :(
                              <ul className="flex flex-col p-4">
                                {
                                    (ordens||[]).map((orden)=>(<li key={orden.id} className="border-gray-400 flex flex-row mb-2">
                                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                            <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium mb-4">{orden?.contestant?.nombres}  {orden.fechaOrden} {orden.horaOrden}</div>
                                            <Grid container spacing={2}>
                                              <Grid item xs={12} md={6}>
                                                <div className="text-gray-600 text-sm">{orden.id}</div>
                                                <div className="text-gray-600 text-sm"><b>Altura: </b>{orden.altura}</div>                                            
                                                <div className="text-gray-600 text-sm"><b>Diabetico: </b>{orden.diabetico}</div>                                            
                                                <div className="text-gray-600 text-sm">
                                                  <b>Indice Masa Corporal: </b>
                                                  {orden.indiceMasaCorporal}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                  <b>Tratamiento: </b>
                                                  {orden.tratamiento}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                  <b>Hipertenso: </b>
                                                  {orden.hipertenso}
                                                </div>    
                                                <div className="text-gray-600 text-sm">
                                                  <b>Padecimientos: </b>
                                                  {orden.padecimientos}
                                                </div>    
                                                <div className="text-gray-600 text-sm">
                                                  <b>Medicamentos: </b>
                                                  {orden.medicamentos}
                                                </div>                                                  
                                                <div className="text-gray-600 text-sm">
                                                  <b>Date Publishing Result: </b>
                                                  {orden.datePublishingResult}
                                                </div>
                                              </Grid>
                                              <Grid item xs={12} md={6}>
                                                <div className="text-gray-600 text-sm"><b>Total Pruebas: </b>{orden.totalPruebas}</div>                                            
                                                <div className="text-gray-600 text-sm"><b>Sucursal Muestra: </b>{orden.sucursalMuestra}</div>                                            
                                                <div className="text-gray-600 text-sm">
                                                  <b>Peso: </b>{orden.peso}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                  <b>Temperatura: </b>{orden.temperatura}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                  <b>Saturacion: </b>{orden.saturacion}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                  <b>Frecuencia Cardiaca: </b>{orden.frecuenciaCardiaca}
                                                </div>
                                                <div className="text-gray-600 text-sm">
                                                  <b>Hora TomaMuestra: </b>
                                                  {orden.horaTomaMuestra}
                                                </div>   
                                              </Grid>
                                            </Grid>
                                            </div>
                                            {
                                              isResultReady(orden.status) && <div onClick={()=>handleOpen(orden)} className="text-center flex justify-center items-center rounded-md w-20 h-10 bg-gray-300 text-blue-600 text-xs  p-4">Resultado</div>
                                            }
                                        </div>
                                      </li>
                                    ))
                                  }
                                {!disabledNext && !disabledPrev &&(
                                    <div className="flex justify-between px-4 py-2 mb-4 text-sm bg-white rounded shadow-md lg:py-4 lg:px-8">
                                      <button
                                        className={`${
                                          disabledPrev
                                            ? 'bg-blue-500 opacity-50 cursor-not-allowed'
                                            : 'bg-blue-500 hover:bg-blue-400'
                                        } shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
                                        disabled={disabledPrev}
                                        onClick={prev}
                                      >
                                        <ChevronsLeft size="1rem" className="inline-block mr-2" />
                                        <span>Previous</span>
                                      </button>
                                      <button
                                        className={`${
                                          disabledNext
                                            ? 'bg-blue-500 opacity-50 cursor-not-allowed'
                                            : 'bg-blue-500 hover:bg-blue-400'
                                        } shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
                                        disabled={disabledNext}
                                        onClick={next}
                                      >
                                        <span>Next</span>
                                        <ChevronsRight size="1rem" className="inline-block ml-2" />
                                      </button>
                                    </div>
                                )}
                                {ordens.length<1&&(
                                  <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                    Parece que no tienes ningún resultado.
                                  </div>
                                )}
                            </ul>
                            )
                          }
                        </div>
                    </div>
                </div>
                <OrdenDetailsContextProvider id={selectedOrder?.id}> 
                  <OrdenDetails open={open} handleClose={handleClose} />
                </OrdenDetailsContextProvider>
            </div>
    )}
    
    export default Results