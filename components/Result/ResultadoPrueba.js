import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
} from "@react-pdf/renderer";
import { useOrdenDetailsContext } from "@/context/OrdenDetailsContext";
import { useEffect, useState } from "react";

let viewerWidth = '80%';
let viewerHeight = '80%';
if (typeof window !== "undefined") {
    // Client-side-only code
    viewerWidth = window.innerWidth;
    viewerHeight = window.innerHeight;
}
const styles = StyleSheet.create({
    page: {
        color: "#000000",
        marginRight: 20,
    },
    sectionLogo: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    logo1: {
        width: 150,
        height: 50,
    },

    section1: {
        margin: 8,
        padding: 12,
        marginHorizontal: 10,
    },
    tituloSection1: {
        fontSize: 13,
        fontWeight: "bolder",
        textAlign: "center",
    },
    viewer: {
        width: viewerWidth,
        height: viewerHeight,
    },
    divider: {
        borderTop: "5px solid #2DA3CC",

        marginHorizontal: 20,
    },

    container: {
        flexDirection: "row",
        paddingTop: 2,
    },

    textoTop: {
        fontSize: 11,
        textAlign: "center",
        fontWeight: 800,
    },
    section2: {
        margin: 20,
    },
    datosTopPaciente: {
        fontSize: 8,
        fontWeight: "normal",
    },
    subtituloSection1: {
        fontSize: 10,
        textAlign: "center",
        fontWeight: 800,
        textDecoration: "underline",
    },
    subtituloSection2: {
        fontSize: 9,
        textAlign: "center",
        fontWeight: 800,
        
    },
    section3: {
        marginHorizontal: 20,
    },
    textTitulosCuadro: {
        fontSize: 10,
    },
    textCuadro: {
        fontSize: 9,
    },
    nombrePrueba: {
        fontSize: 10,
        textDecoration: "underline",
        textAlign: "center",
    },
    section4: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    textoTabla: {
        textAlign: "center",
        fontSize: 10,
    },
    interpretacionContainer: {
        marginVertical: 10,
    },
    tituloInterpretacion: {
        fontSize: 11,
    },
    textoInterpretacion: {
        fontSize: 10,
    },
    section5: {
        marginHorizontal: 20,
    },
    datosPrueba: {
        fontSize: 9,
    },
    datosValidados: {
        textAlign: "right",
        fontSize: 9,
    },
    firmaQuimico: {
        width: 150,
        height: 100,
        alignContent: "center",
    },
    container: {
        flexDirection: "row",
        paddingTop: 2,
    },

    textoTop: {
        fontSize: 13,
        textAlign: "left",
        fontWeight: 800,
    },
    section2: {
        margin: 20,
    },
    datosTopPaciente: {
        fontSize: 12,
        fontWeight: "normal",
    },
});



const checkRed = (selectedReference, resultParam) => {
    if(selectedReference?.minReferencia && selectedReference?.maxReferencia) {
      if(Number(selectedReference?.maxReferencia)< Number(resultParam) || Number(selectedReference?.minReferencia) > Number(resultParam)){
        return true;
      }
    } else if (selectedReference?.minReferencia && String(selectedReference?.minReferencia) !== String(resultParam)) {
      return true;
    }
    return false;
  } 

function ResultadoPrueba({ prueba, item, orden, patient, doctor }) {

    const [result, setResult] = useState([]);
    const [ordenItem, setOrdenItem] = useState("")

    
    const ordenItems = useOrdenDetailsContext();
    // console.log('item Items nuevo', ordenItems);
    
    // console.log('orden11', item)

    // const { results: allResults } = useOrdenDetailsContext();
    // console.log('resultados FINALES', allResults);

    const selectResult = async () => {
        const select = (ordenItems.results || []).filter(resultado => resultado?.ordenpruebaitemID===item?.id);
        setResult(select)
    }

    useEffect(() => {
        selectResult();
    }, [
        item?.id,
        prueba?.id,
        orden?.id,
        (ordenItems.results || []).map(o=>`${o.id}-${o.ordenpruebaitemID}-${o.resultParam}-${o.selectedReference}`).join('__')
    ])

    return (
        <PDFViewer style={styles.viewer} >
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="letter" style={styles.page}>
                    <View style={styles.sectionLogo}>
                        <View>
                            <Image
                                style={styles.logo1}
                                src={
                                    "https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/logoSanMateo/Asset+1-8.png"
                                }
                            />
                        </View>
                    </View>

                    <View style={styles.section1}>
                        <View style={styles.container}>
                            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                                <Text style={styles.textoTop}>
                                    NOMBRE DEL PACIENTE:


                                    {patient?.nombres === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {patient?.nombres} {patient?.apellidoPaterno} { patient?.apellidoMaterno}</Text>}
                                </Text>



                            </View>
                            <Text style={styles.textoTop}>
                                FECHA DE ORDEN:
                                <Text style={styles.datosTopPaciente}>{ordenItems?.orden?.fechaOrden === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.fechaOrden} </Text>}</Text>
                            </Text>
                        </View>


                        <View style={styles.container}>
                            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                                <Text style={styles.textoTop}>
                                    EDAD:


                                    {patient?.edad === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {patient?.edad} años</Text>}
                                </Text>



                            </View>
                            <Text style={styles.textoTop}>
                                HORA DE ORDEN:
                                <Text style={styles.datosTopPaciente}>{ordenItems?.orden?.horaOrden === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.horaOrden} </Text>}</Text>
                            </Text>
                        </View>

                        <View style={styles.container}>
                            <View style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                                <Text style={styles.textoTop}>
                                    SEXO:


                                    {patient?.sexo === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {patient?.sexo}</Text>}
                                </Text>



                            </View>
                            <Text style={styles.textoTop}>
                                MÉDICO:
                                <Text style={styles.datosTopPaciente}>{doctor?.nombres === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {doctor?.nombres} {" "} {doctor?.appelidoPaterno} </Text>}</Text>
                            </Text>
                        </View>
                       
                        
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.section1}>
                        <Text style={styles.tituloSection1}>Información del Paciente</Text>
                        <View style={styles.container}>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection1}>
                                    DATOS ANTROPOMÉTRICOS
                                </Text>
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection1}>SIGNOS VITALES</Text>
                            </View>
                        </View>


                        <View style={styles.container}>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>
                                    PESO: {ordenItems?.orden?.peso === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.peso} kg</Text>}
                                </Text>
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>
                                    TEMPERATURA: {ordenItems?.orden?.temperatura === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.temperatura} ºC</Text>}
                                </Text>
                            </View>
                            
                        </View>

                        <View style={styles.container}>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>ALTURA:{ordenItems?.orden?.altura === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.altura}</Text>} m</Text>
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>PRESIÓN ARTERIAL:{(ordenItems?.orden?.presion === null || orden?.presion === "") ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.presion}</Text>} mmHg</Text>
                            </View>
                        </View>
                        

                        <View style={styles.container}>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>
                                    IMC: {ordenItems?.orden?.indiceMasaCorporal === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.indiceMasaCorporal} </Text>}
                                </Text>
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>FRECUENCIA CARDIACA:{ordenItems?.orden?.frecuenciaCardiaca === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.frecuenciaCardiaca}</Text>} LPM</Text>
                            </View>
                        </View>


                        <View style={styles.container}>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.subtituloSection2}>
                                    SATURACIÓN OXÍGENO: {ordenItems?.orden?.saturacion === null ? <Text style={styles.textoTop}> NO APLICA </Text> : <Text style={styles.textoTop}> {ordenItems?.orden?.saturacion} </Text>}
                                </Text>
                            </View>

                           
                           
                        </View>

                    
                       
                       
                 
                    </View>
                    
                    <View style={styles.section3}>
                        <Text style={styles.subtituloSection1}>CUADRO CLÍNICO</Text>
                        <Text style={styles.textTitulosCuadro}>
                            SÍNTOMAS:{" "}
                            {ordenItems?.orden?.padecimientos === null ? <Text style={styles.textCuadro}>NO APLICA </Text> : <Text style={styles.textCuadro}>{ordenItems?.orden?.padecimientos}</Text>} 
                        </Text>
                        <Text style={styles.textTitulosCuadro}>
                            DIAGNÓSTICO:{" "}
                            {ordenItems?.orden?.diagnostico === null ? <Text style={styles.textCuadro}>NO APLICA </Text> : <Text style={styles.textCuadro}>{ordenItems?.orden?.diagnostico}</Text>}
                        </Text>
                        <Text style={styles.textTitulosCuadro}>
                            TRATAMIENTO:{" "}
                            {ordenItems?.orden?.tratamiento === null ? <Text style={styles.textCuadro}>NO APLICA </Text> : <Text style={styles.textCuadro}>{ordenItems?.orden?.tratamiento}</Text>}
                            </Text>
                            <Text style={styles.textTitulosCuadro}>
                                MEDICAMENTOS:{" "}
                            {ordenItems?.orden?.medicamentos === null ? <Text style={styles.textCuadro}>NO APLICA </Text> : <Text style={styles.textCuadro}>{ordenItems?.orden?.medicamentos}</Text>}
                            </Text>
                    </View>

                     <View style={styles.section4}>
                       {/* <Text style={styles.tituloSection1}>{prueba?.categoria} </Text>
                        <Text style={styles.nombrePrueba}>{prueba?.nombre} </Text>   */}
                     <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#CCDE00",

                                marginTop: 10,
                            }}
                        >
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.textoTabla}>PARÁMETRO</Text>
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.textoTabla}>RESULTADO</Text>
                            </View>

                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text style={styles.textoTabla}>REFERENCIA</Text>
                            </View>
                        </View> 

                        {result.map((resultItem) => {
                            // console.log('item [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[', item)
                            const selectedReference = resultItem?.references?.find(rr=>rr?.nombre===resultItem?.selectedReference);
                            return (
                       
                            <View key={resultItem.id} style={{ flexDirection: "row" }}> 
                                <View
                                    style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                                >
                                    <Text style={styles.textoTabla}>{resultItem?.nombre}</Text>
                                </View> 
                                <View
                                    style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                                >
                                    <Text style={[styles.textoTabla, { color:checkRed(selectedReference, resultItem.resultParam)? 'red' : 'black' }]}>
                                                {resultItem?.resultParam}
                                    </Text> 
                                </View>

                                <View
                                    style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                                        >
                                            {resultItem?.references?.map((reference) => {
                                                // console.log('reference', reference)
                                                return (
                                                    <View key={reference.id}>
                                                        {reference?.nombre === 'UNIVERSAL' ? <Text style={styles.textoTabla}>[{reference?.minReferencia} {reference?.maxReferencia}]</Text> : <Text style={styles.textoTabla}>{reference?.nombre} [{reference?.minReferencia} {reference?.maxReferencia}] </Text>}
                                                    </View>
                                                )
                                            })}
                                
                                </View>  
                            </View>
                            )
                        })}

                        
                    </View>
                    
                    <View style={styles.section5}>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.tituloInterpretacion}>
                                Interpretación de la prueba:
                                <Text style={styles.textoInterpretacion}>
                                    {item?.resultInsight}
                                </Text>
                            </Text>
                        </View>
                        </View>
                                

                        {/* <View style={{ marginTop: 15 }}>
                            <Text style={styles.textTitulosCuadro}> */}
                                {/* MÉTODO: <Text style={styles.textCuadro}>{metodoPrueba}</Text> */}
                            {/* </Text>
                            <Text style={styles.textTitulosCuadro}> */}
                                {/* MUESTRA: <Text style={styles.textCuadro}>{muestraPrueba}</Text> */}
                            {/* </Text> */}
                            {/* <View style={styles.interpretacionContainer}>
                                <Text style={styles.tituloInterpretacion}>
                                    Interpretación de la prueba:
                                    <Text style={styles.textoInterpretacion}>
                                    {item?.resultInsight}
                                    </Text>
                                </Text>
                            </View> */}
                        {/* </View> */}
                
                
                    <View style={styles.section5}>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.datosPrueba}>
                                SENSIBILIDAD DE LA PRUEBA 99.68%, LOTE:202201162, REF.:
                                K511416D, MARCA: REALY TECH
                            </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.datosValidados}>
                                {/* RESULTADOS VALIDADOS POR: Q.F.B.{nombreQuimicaResponsable} */}
                            </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.datosPrueba}>
                                NOTA: Los valores de referencia son un indicador del resultado
                                que se espera de un paciente clínicamente sano.
                            </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.datosPrueba}>
                                IMPORTANTE: Los resultados incluidos en este reporte no
                                sustituyen la consulta médica. Su médico es la persona indicada
                                y con el conocimiento adecuado para la interpretación y análisis
                                de su resultado.
                            </Text>
                        </View>

                        <View>
                            <View
                                style={{
                                    flexDiection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    style={styles.firmaQuimico}
                                    src={
                                        "https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/firmaQuimico.png"
                                    }
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 13,
                                    textDecoration: "underline",
                                    textAlign: "center",
                                    marginTop: -20,
                                }}
                            >
                                Responsable sanitario: Q.F.B. Jorge Arturo Chávez Zavala
                            </Text>
                            <Text
                                style={{
                                    fontSize: 13,
                                    textDecoration: "underline",
                                    textAlign: "center",
                                }}
                            >
                                Cédula profesional 2687059
                            </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 15,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 8,
                                }}
                            >
                                LABORATORIOS SAN MATEO RFC: LBE2001242S
                            </Text>
                            <Text
                                style={{
                                    fontSize: 8,
                                }}
                            >
                                ZONA SECA CENTRAL DE ABASTOS; MÓDULO H LOCAL 12 COLONIA
                                COSIJOEZA
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 15,
                                backgroundColor: "#34B1F0",
                                height: 30,
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text
                                    style={{ textAlign: "center", fontSize: 8, color: "white" }}
                                >
                                    WWW.LABORATORIOSSANMATEO.COM
                                </Text>
                            </View>
                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text
                                    style={{ textAlign: "center", fontSize: 8, color: "white" }}
                                >
                                    9511028474
                                </Text>
                            </View>

                            <View
                                style={{ flex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 0 }}
                            >
                                <Text
                                    style={{ textAlign: "center", fontSize: 8, color: "white" }}
                                >
                                    SERVICIO A DOMICILIO SIN COSTO EXTRA
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default ResultadoPrueba;
