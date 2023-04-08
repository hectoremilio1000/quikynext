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
                    <h1 className="contentModel4">
                        ¿Quiénes somos?
                    </h1>
                    <p className='title3Model'>Somos la primer empresa de Laboratorios Clínicos en México</p>
                    <p className='contentModel2 mb-12'>Enfocada al servicio de Pruebas de Laboratorio a Domicilio</p>
                    {/* <h1 className="title1Model text-start">
                        ¿Quiénes somos?
                    </h1>
                    <p className='contentModel text-start mt-6 mb-12'>Somos la primer empresa de Laboratorios Clínicos en México <br /> enfocada al servicio de Pruebas de Laboratorio a Domicilio</p> */}
                    <p className='contentModel2' style={{ color: "#079ec6" }}>Cumplimos con los estándares más altos en Calidad</p>
                    <p className="contentModel3">Nuestra misión es cuidar del paciente ofreciéndole los estándares más altos en Calidad, con reconocimiento por parte de INDRE, EMA, PACAL, CDC y RIQAS.</p>
                    <br />
                    <p className='contentModel2' style={{ color: "#079ec6" }}>Único Laboratorio en México con Banco de Datos de por Vida</p>
                    <p className="contentModel3">Nunca más vuelvas a perder un estudio, te ofrecemos un banco de datos de tus estudios para que puedas consultarlos de por vida..</p>
                </div>

            </div>
        </div>
    )
}

export default ContentInfo