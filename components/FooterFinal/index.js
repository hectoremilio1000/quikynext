import Link from "next/link";
import React from "react";
import logo from "../../public/logoQuiky.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

function FooterFinal() {
  return (
    <footer className="footerSanmateo py-4">
      <div
        className="rowQh flex flex-wrap md:flex-nowrap"
        style={{ display: "flex", alignItems: "flex-start !important" }}
      >
        <div className="blockElement">
          <div className="flex md:justify-left">
            <Image style={{ width: "200px" }} src={logo} />
          </div>
          <p
            style={{ fontSize: "18px" }}
            className="mt-8 text-center md:text-start "
          >
            Somos una empresa enfocada en el desarrollo de aplicaciones
            funcionables para medianas y grandes empresas en el mundo
          </p>
        </div>
        <div className="blockElement pt-3 md:pt-0">
          <h2 className="text-center">
            <b style={{ textDecoration: "underline", paddingBottom: "5px" }}>
              Menú
            </b>
          </h2>
          <nav className="mt-4" style={{ width: "100%" }}>
            <div className="py-2">
              <Link href="/">
                <p className="text-black text-center">Inicio</p>
              </Link>
            </div>
            {/* <div className="py-2">
              <Link href="/paciente">
                <p className="text-white hover:text-green-200">Paciente</p>
              </Link>
            </div> */}
            {/* <div className="py-2">
              <Link href="/doctor">
                <p className="text-white hover:text-green-200">Doctor</p>
              </Link>
            </div> */}
            <div className="py-2">
              <Link href="/cotizaproyecto">
                <p className="text-black text-center">Cotiza tu proyecto</p>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/proyectos">
                <p className="text-black text-center">Proyectos</p>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/contacto">
                <p className="text-black text-center">Contacto</p>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="rowQh">
        <div className="blockElement">
          <p className="text-center text-black">
            © Todos los derechos reservados de Quiky 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterFinal;
