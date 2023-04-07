import React from 'react'
import Link from 'next/link'

function ContentInfo() {
    return (
        <div className='contentInfo'>
            <div className="rowQh">
                <h1 className="title1Model text-center">
                    ¿Quiénes somos?
                </h1>
                <p className='contentModel text-center mt-6 mb-12'>Somos la primer empresa de Laboratorios Clínicos en México <br /> enfocada al servicio de Pruebas de Laboratorio a Domicilio</p>
            </div>
            <div className="rowQh dFlex" style={{ gap: "40px" }}>
                <div className="blockElement">


                    <p className='contentModel2'>Cumplimos con los estándares más altos en Calidad</p>
                    <p className="contentModel3">Nuestra misión es cuidar del paciente ofreciéndole los estándares más altos en Calidad, con reconocimiento por parte de INDRE, EMA, PACAL, CDC y RIQAS.</p>
                    <br />
                    <p className='contentModel2'>Único Laboratorio en México con Banco de Datos de por Vida</p>
                    <p className="contentModel3">Nunca más vuelvas a perder un estudio, te ofrecemos un banco de datos de tus estudios para que puedas consultarlos de por vida..</p>
                </div>
                <div className="blockElement">
                    <img src="https://www.laboratoriossanmateo.com/static/media/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.8459c1bc1719068112d9.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContentInfo