import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import jefe from "../public/iconos/jefe.png"
import metas from "../public/iconos/metas.png"
import dinero from "../public/iconos/dinero.png"
function bolsatrabajo() {
    return (
        <>
            <div className="bannerSanmateo posRelative ovHidden" style={{ height: "70vh", backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/enfermera.jpg")`, backgroundPosition: "top center", backgroundRepeat: "repeat", backgroundSize: "cover" }}>
                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="titlePortada rowQh dFlex" style={{ gap: "20px" }}>
                    <div className="blockElement">

                        <h1 className="contentModel4">
                            ¿Eres enfermera?
                        </h1>
                        <p className='title3Model text-white'>Te garantizamos $4,000 en 7 días</p>

                        <a href="#registrarme">
                            <button type="button" className="buttonModel mt-6 mb-6">
                                ¡Reserva ya!
                            </button>
                        </a>
                    </div>
                    <div className="blockElement posRelative ">
                        <div className="heroFloatImg rotateme">
                            <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='contentInfo' style={{ backgroundColor: "#F8F8FF" }}>
                <div className="rowQh">
                    <h1 className="title1Model text-center">
                        ¿Por qué registrarse con nosotros como Enfermera?
                    </h1>
                    <p className='contentModel text-center mt-6 mb-12'>Contamos con todas las pruebas que requieras con un CLICK o en sucursal</p>
                </div>
                <div className="rowQh dFlex" style={{ gap: "20px" }}>
                    <div className="blockElement">
                        <Image style={{ width: "150px" }} src={jefe} />
                        <p className="contentModel2">Sé tu propio jefe</p>
                    </div>
                    <div className="blockElement">
                        <Image style={{ width: "150px" }} src={dinero} />
                        <p className="contentModel2">Gana el dinero que te mereces</p>
                    </div>
                    <div className="blockElement">
                        <Image style={{ width: "150px" }} src={metas} />
                        <p className="contentModel2">Logra tus sueños con tu trabajo</p>
                    </div>
                </div>
            </div>
            <div className='contentInfo' style={{ backgroundColor: "#f3f5f9" }}>
                <div className="rowQh">
                    <h1 className="title1Model text-center">
                        ¿Cansada de las agencias de enfermería?
                    </h1>
                    <p className='contentModel text-center mt-6 mb-12'>Nuestro compromiso es con tu seguridad y reconocimiento profesional. Nos comprometemos a crear un entorno seguro para nuestros usuarios para conseguir pacientes y un pago justo.</p>
                </div>
            </div>
            <div className='contentInfo' style={{ backgroundColor: "#fff" }}>
                <div className="rowQh">
                    <h1 className="title1Model text-center">
                        Es muy rápido, sólo ingresa tus datos
                    </h1>
                    <p className="contentModel text-center">Todos los campos son requeridos para enviar tus datos</p>
                    <div className="formSan mt-12">
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="nombre" className="splaceItem">Nombre Completo</label>
                                <input name='nombre' type="text" placeholder='Ingresa tus Nombres' />
                            </div>
                            <div className="groupItem">
                                <label htmlFor="" className="splaceItem">Email</label>
                                <input name='email' type="email" placeholder='Ingresa tu email' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="whatsapp" className="splaceItem">WhatsApp</label>
                                <input name='whatsapp' type="text" placeholder='Ingresa tu numero de whatsapp' />
                            </div>
                            <div className="groupItem">
                                <label htmlFor="direction" className="splaceItem">Direccion</label>
                                <input name='direction' type="text" placeholder='Ingresa tu direccion' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="" className="splaceItem">Núm. Ext.</label>
                                <input name='numExterno' type="text" placeholder='Ingresa tu numero Ext.' />
                            </div>
                            <div className="groupItem">
                                <label className="splaceItem">Núm. Int.</label>
                                <input name='numInterno' type="text" placeholder='Ingresa tu numero Int.' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="" className="splaceItem">C.P</label>
                                <input name='cp' type="text" placeholder='Ingresa tu codigo postal' />
                            </div>
                            <div className="groupItem">
                                <label className="splaceItem">Colonia</label>
                                <input name='colonia' type="text" placeholder='Ingresa tu colonia' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="" className="splaceItem">Estado</label>
                                <input name='estado' type="text" placeholder='Ingresa tu estado' />
                            </div>
                            <div className="groupItem">
                                <label className="splaceItem">Edad</label>
                                <input name='edad' type="text" placeholder='Ingresa tu edad' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="" className="splaceItem">Cedula Profesional</label>
                                <input name='estado' type="text" placeholder='Ingresa tu numero de Cedula Profesional' />
                            </div>
                            <div className="groupItem">
                                <label className="splaceItem">Antigüedad</label>
                                <input name='edad' type="text" placeholder='Ingresa tu tiempo trabajando' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <label htmlFor="" className="splaceItem">Especialidad</label>
                                <input name='especialidad' type="text" placeholder='Ingresa tu especialidad' />
                            </div>
                            <div className="groupItem">
                                <label className="splaceItem">Curso Especializado</label>
                                <input name='curso' type="text" placeholder='Ingresa en que curso te haz especializado' />
                            </div>
                        </div>
                        <div className="duoGroupItem">
                            <div className="groupItem">
                                <input type="submit" className='submitForm' value="Enviar" />
                            </div>
                            <div className="groupItem">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default bolsatrabajo