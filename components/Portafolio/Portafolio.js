import React from "react";
import portafolio1 from "../../public/portafolio/qhawana.png";
import portafolio2 from "../../public/portafolio/amazoncargo.png";
import portafolio3 from "../../public/portafolio/hotelemperador.png";
import Image from "next/image";
import Link from "next/link";
// import "../../styles/portafolio.css";

const Portafolio = () => {
  return (
    <div className="p-6">
      <div className="rowQh" style={{ gap: "40px" }}>
        <h1 className="text-center text-4xl mb-6" style={{ color: "#00747c" }}>
          <b>
            {" "}
            <span className="text-[#2228ff]">-</span>{" "}
            <span className="text-[#2228ff]">Nuestros </span>Proyectos-{" "}
          </b>
        </h1>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <Link
            target="_blank"
            href="/proyectos/qhawana"
            className="w-full md:w-1/3 relative overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                className="scale-100 hover:scale-125 transition duration-300 delay-150	"
                src={portafolio1}
                alt="qhawana"
              />
            </div>
            <div className="absolute bottom-0 text-white px-2 py-4">
              <h6>Proyecto Qhawana</h6>
            </div>
          </Link>
          <Link
            target="_blank"
            href="/proyectos/jt-amazon-cargo"
            className="w-full md:w-1/3 relative overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                className="scale-100 hover:scale-125 transition duration-300 delay-150	"
                src={portafolio2}
                alt="archivo"
              />
            </div>
            <div className="absolute bottom-0 text-white px-2 py-4">
              <h6>Sitio web de courier: Amazon Cargo</h6>
            </div>
          </Link>
          <Link
            target="_blank"
            href="/proyectos/hotel-emperador"
            className="w-full md:w-1/3 relative overflow-hidden"
          >
            <div className="overflow-hidden">
              <Image
                className="scale-100 hover:scale-125 transition duration-300 delay-150	"
                src={portafolio3}
                alt="archivo 2"
              />
            </div>
            <div className="absolute bottom-0 text-white px-2 py-4">
              <h6>Sitio web hotel: Hotel emperador Tacna</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
