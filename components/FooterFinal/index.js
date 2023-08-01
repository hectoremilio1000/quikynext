import Link from "next/link";
import React from "react";
import logo from "../../public/SAN-MATEO.png";
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
        <div className="flex justify-center md:justify-left">
          <Image style={{ width: "200px" }} src={logo} />
          </div>
          <p
            style={{ fontSize: "18px", color: "#fff" }}
            className="mt-8 text-white text-center "
          >
            Somos una empresa enfocada en brindar confianza a través de la tecnología en análisis clínicos
          </p>
        </div>
        <div className="blockElement pt-3 md:pt-0">
          <h2 className="text-white text-center">
            <b style={{ textDecoration: "underline", paddingBottom: "5px" }}>
              Menú
            </b>
          </h2>
          <nav className="mt-4" style={{ width: "100%" }}>
            <div className="py-2">
              <Link href="/">
                <p className="text-white hover:text-green-200 text-center">Inicio</p>
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
              <Link href="/blog">
                <p className="text-white hover:text-green-200 text-center">Blog</p>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/bolsatrabajo">
                <p className="text-white hover:text-green-200 text-center">
                  Bolsa de Trabajo
                </p>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/results">
                <p className="text-white hover:text-green-200 text-center ">Resultados</p>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="rowQh">
        <div className="blockElement">
          <p className="text-center text-white">
            © Todos los derechos reservados de Laboratorios San Mateo 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterFinal;
