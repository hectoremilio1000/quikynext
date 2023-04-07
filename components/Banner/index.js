import React from 'react'
import Link from 'next/link'

function Banner() {
    return (
        <>
            <div className="bannerSanmateo" style={{ height: "80vh", backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/banner_laboratorioFaseI.4.jpg")`, backgroundPosition: "center", backgroundRepeat: "repeat", backgroundSize: "cover" }}>
                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="titlePortada rowQh dFlex" style={{ gap: "20px" }}>
                    <div className="blockElement">

                        <h1 className="title1Model">
                            ¿Laboratorio Urgente?
                        </h1>
                        <p className='contentModel'>Servicio a domicilio con un click o en sucursal</p>

                        <Link href="/reserva">
                            <button type="button" className="buttonModel mt-6 mb-6">
                                ¡Reserva ya!
                            </button>
                        </Link>
                        <p className='contentModel2'>Nos encontramos en la Ciudad de Oaxaca y en CDMX</p>
                    </div>
                    <div className="blockElement">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner