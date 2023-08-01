import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import info1 from "../../public/about.png"

function ContentInfo() {
    return (
        <div className='contentInfo'>
            <div className="rowQh dFlex" style={{ gap: "40px" }}>
                <div className="blockElement">
                    <Image width="100%" src={info1} />
                </div>
                <div className="blockElement">
                    <h1 className="text-xl md:text-3xl text-sky-500">
                        ¿Quiénes somos?
                    </h1>
                    <p className='text-xl md:text-2xl font-bold'>Somos calidad en análisis clínicos</p>
                    <p className='contentModel2 mb-12'>Con la tecnología de punta ofrecemos altos estándares para los pacientes</p>
                    {/* <h1 className="title1Model text-start">
                        ¿Quiénes somos?
                    </h1>
                    <p className='contentModel text-start mt-6 mb-12'>Somos la primer empresa de Laboratorios Clínicos en México <br /> enfocada al servicio de Pruebas de Laboratorio a Domicilio</p> */}
                    <p className='contentModel2' style={{ color: "#079ec6" }}>Los reconocimientos que tenemos nos avalan</p>
                    <p className="contentModel3">Nuestra misión es cuidar del paciente ofreciéndole los estándares más altos en Calidad, con reconocimiento por parte de INDRE, EMA, PACAL, CDC y RIQAS.</p>
                    <br />
                    <p className='contentModel2' style={{ color: "#079ec6" }}>Único Laboratorio en México con Banco de Datos de por Vida</p>
                    <p className="contentModel3">Doctores y pacientes: garantizamos banco de datos de por vida, confíen en nosotros.</p>
                </div>

            </div>
        </div>
    )
}

export default ContentInfo