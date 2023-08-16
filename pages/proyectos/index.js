import Image from "next/image";
import React from "react";
import proyecto1 from "../../public/portafolio/filmoraoptica.png";
import Link from "next/link";
const Proyectos = () => {
  return (
    <div className="py-[100px]">
      <div className="rowQh">
        <h3 className="text-md text-center tracking-widest  text-ablue-600 f uppercase">
          NUESTROS PROYECTOS
        </h3>
        <h1 className="text-center text-4xl mb-6" style={{ color: "#00747c" }}>
          <b>
            {" "}
            <span className="text-[#2228ff]">-</span>{" "}
            <span className="text-[#2228ff]">Soluciones </span>Inteligentes-{" "}
          </b>
        </h1>
      </div>
      <div className="rowQh flex gap-12 items-center flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <Image src={proyecto1} alt="proyecto1" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="pt-8 text-4xl text-left text-[#2225a1] font-bold">
            Filmora Optica
          </h1>
          <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            nobis non quasi quibusdam dolorum, praesentium sequi nesciunt
            beatae, sint voluptate est voluptas minus? Et enim, placeat officiis
            recusandae libero cumque?
          </p>
          <Link
            href={"/proyectos/filmor-optica"}
            className="p-3 inline-block mt-4 bg-[#00747c] text-xl rounded-md text-white font-bold"
          >
            Ver proyecto
          </Link>
        </div>
      </div>
      <div className="rowQh flex flex-row-reverse gap-12 items-center flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <Image src={proyecto1} alt="proyeecto2" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="pt-8 text-4xl text-left text-[#2225a1] font-bold">
            SanMateo Laboratorios
          </h1>
          <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            nobis non quasi quibusdam dolorum, praesentium sequi nesciunt
            beatae, sint voluptate est voluptas minus? Et enim, placeat officiis
            recusandae libero cumque?
          </p>
          <a
            href="#"
            className="p-3 inline-block mt-4 bg-[#00747c] text-xl rounded-md text-white font-bold"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
