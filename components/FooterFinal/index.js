import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function FooterFinal() {
    return (
        <footer className=" fondo2 py-12">

            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="-my-2 flex flex-wrap justify-center" style={{ width: "100%" }}>
                    <div className="px-5 py-2">
                        <Link href="/reserva">
                            <p className="text-white hover:text-green-200">Paciente</p>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/menullorona">
                            <p className="text-white hover:text-green-200">Doctor</p>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/mezcal">
                            <p className="text-white hover:text-green-200">Blog</p>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/premios">
                            <p className="text-white hover:text-green-200">Reserva</p>
                        </Link>
                    </div>
                   
                </nav>
                <div className="mt-8 flex justify-center space-x-6">

                    <a href="https://www.facebook.com/Lalloronacantinacdmx">
                        <FaFacebook className="w-6 h-6 text-blue-600 hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/cantinalallorona/">
                        <FaInstagram className="w-6 h-6 text-pink-600 hover:text-white" />

                    </a>
                </div>
            </div>
            <div className="pt-3">
                <p className='text-white text-center text-2xl'>Laboratorios San Mateo COPYRIGHT</p>
            </div>
        </footer>
    )
}

export default FooterFinal