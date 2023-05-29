import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import portadaimg from "../../public/hero-imgs2.png"

function Banner() {
    return (
        <>
            <div className="bannerSanmateo posRelative ovHidden" style={{ height: "100vh", backgroundImage: `url("https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/hero-bg.jpg")`, backgroundPosition: "center", backgroundRepeat: "repeat", backgroundSize: "cover" }}>
                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="titlePortada rowQh dFlex" style={{ gap: "20px" }}>
                    <div className="blockElement">

                        <h1 className="contentModel4">
                            ¿Laboratorio Urgente?
                        </h1>
                        <p className='title3Model'>Nos encontramos en la Ciudad de Oaxaca y en CDMX</p>
                        <p className='contentModel' style={{ padding: "15px 0 0" }}>Servicio a domicilio con un click o en sucursal</p>

                        <Link href="/reserva">
                            <button type="button" className="buttonModel mt-6 mb-6">
                                ¡Reserva ya!
                            </button>
                        </Link>
                    </div>
                    <div className="blockElement posRelative ">
                        <Image className='thumbImg' style={{ marginLeft: "73px", marginTop: "77px" }} src={portadaimg} alt="" />
                        <div className="heroFloatImg rotateme">
                            <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs3.png" alt="" />
                        </div>
                        <div className="heroFloatImg2 rotateme">
                            <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs4.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-single-shape1 dance">
                    <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-shape1.png" alt="shape" />
                </div>
                <div className="hero-single-shape2 rotateme">
                    <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-shape2.png" alt="shape" />
                </div>
                <div className="hero-single-shape3 dance">
                    <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-shape3.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default Banner