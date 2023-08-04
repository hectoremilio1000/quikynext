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

                        <h1 className="text-3xl md:text-5xl text-sky-600 font-bold">
                            Desarrollo de Software entendiendo tus necesidades
                        </h1>
                        
                        <p className='text-gray-500 text-xl md:text-2xl' style={{ padding: "15px 0 0" }}>En la era de la tecnología, la individualidad y la comprensión de las necesidades únicas de cada cliente son a menudo lo que separa a una empresa del resto.</p>

                        
                            <button type="button" className="buttonModel mt-6 mb-6">
                            <a href={`https://wa.me/525633485223?text=convierte tu empresa en éxito`}>Cotizar ya</a>
                            </button>
                      
                    </div>
                    <div className="blockElement posRelative ">
                        <div class="floating-effect w-[278] mt-[32px] mb-[26px] lg:w-[400px] md:mt-0 md:mb-0 m-auto">
                            <img
                                src="https://www.alluxi.com/static/media/alluxi-devices-cropped.c2dcbb14aafe3d5514c7751df4c502c0.svg"
                                alt="devices"
                                className="animate-float"
                            />
                            </div>
                        {/* <div className="heroFloatImg rotateme">
                            <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs3.png" alt="" />
                        </div>
                        <div className="heroFloatImg2 rotateme">
                            <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs4.png" alt="" />
                        </div> */}
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