import Link from "next/link";
import React from "react";
import logo from "../../public/SAN-MATEO.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

function FooterFinal() {
  return (
    <footer className="footerSanmateo py-4">
      <div
        className="rowQh"
        style={{ display: "flex", alignItems: "flex-start !important" }}
      >
        <div className="blockElement">
          <Image style={{ width: "200px" }} src={logo} />
          <p
            style={{ fontSize: "18px", color: "#fff" }}
            className="mt-8 text-white"
          >
            Somos la primer empresa de Laboratorios Clínicos en México <br />{" "}
            Enfocada al servicio de Pruebas de Laboratorio a Domicilio
          </p>
        </div>
        <div className="blockElement">
          <h2 className="text-white">
            <b style={{ textDecoration: "underline", paddingBottom: "5px" }}>
              Menu
            </b>
          </h2>
          <nav className="mt-4" style={{ width: "100%" }}>
            <div className="py-2">
              <Link href="/">
                <p className="text-white hover:text-green-200">Inicio</p>
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
                <p className="text-white hover:text-green-200">Blog</p>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/results">
                <p className="text-white hover:text-green-200">Results</p>
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
