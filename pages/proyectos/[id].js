import React from "react";
import proyecto1 from "../../public/portafolio/filmoraoptica.png";
import Image from "next/image";

const MeProyecto = () => {
  return (
    <div className="py-[100px]">
      <div className="rowQh flex gap-12 items-center flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <h3 className="text-md tracking-widest font-bold uppercase">
            CASO DE ESTUDIO
          </h3>
          <h1 className="text-4xl mb-6" stye={{ color: "#0074c" }}>
            <b>
              <span className="text-[#2228ff]">Filmor </span>Optica
            </b>
          </h1>
          <div>
            <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident nobis non quasi quibusdam dolorum, praesentium sequi
              nesciunt beatae, sint voluptate est voluptas minus? Et enim,
              placeat officiis recusandae libero cumque?
            </p>
            <div className="caracteristicas mt-6">
              <h3 className="text-md tracking-widest text-[#2228ff] f uppercase">
                PLATAFORMA
              </h3>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className="caracteristicas mt-6">
              <h3 className="text-md tracking-widest text-[#2228ff] f uppercase">
                SERVICIOS
              </h3>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={proyecto1} />
        </div>
      </div>
      <div className="py-[100px] bg-gray-100">
        <div className="rowQh flex gap-12 items-center flex-wrap md:flex-nowrap">
          <div className="w-full">
            <h1 className="text-center text-2xl" stye={{ color: "#0074c" }}>
              <b>
                <span className="text-[#2228ff]">Herramientas </span>
              </b>
            </h1>
            <h1
              className="text-center text-4xl mb-6 uppercase"
              stye={{ color: "#0074c" }}
            >
              <b>Tecnologías</b>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="rowQh flex gap-12 items-center flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            <h3 className="text-md tracking-widest font-bold uppercase">
              DESAFÍOS
            </h3>
            <h1 className="text-4xl mb-6" stye={{ color: "#0074c" }}>
              <b>
                <span className="text-[#2228ff]">Problemas a Resolver</span>
              </b>
            </h1>
            <div>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
                Nuestro equipo desarrolló una aplicación móvil integral que
                abordó todos los requisitos del cliente. Las características
                clave de la aplicación incluyen:
              </p>
              <div className="caracteristicas mt-6">
                <h3 className="text-md tracking-widest text-[#2228ff] f uppercase">
                  PLATAFORMA
                </h3>
                <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div className="caracteristicas mt-6">
                <h3 className="text-md tracking-widest text-[#2228ff] f uppercase">
                  SERVICIOS
                </h3>
                <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={proyecto1} />
          </div>
        </div>
        <div className="rowQh bg-gray-100 flex flex-row-reverse gap-12 items-center flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            <h3 className="text-md tracking-widest font-bold uppercase">
              Soluciones
            </h3>
            <h1 className="text-4xl mb-6" stye={{ color: "#0074c" }}>
              <b>
                <span className="text-[#2228ff]">Resultados Finales</span>
              </b>
            </h1>
            <div>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
                Más de 5000 descargas en los primeros tres meses del
                lanzamiento, con una calificación constante de 4,5 estrellas en
                las tiendas de aplicaciones de Android e iOS. Más de 500
                usuarios activos participan en partidos de fútbol semanalmente,
                y el 95 % de los usuarios informan estar satisfechos con las
                funciones de creación de partidos de la aplicación. Un aumento
                del 30 % en la frecuencia de los partidos de fútbol jugados
                entre los usuarios, lo que demuestra la eficacia de la
                aplicación para fomentar una comunidad de fútbol más activa y
                comprometida . Pagos seguros y oportunos para los jugadores ,
                con más del 98 % de las transacciones completadas sin problemas,
                lo que refuerza la confianza de los usuarios en la plataforma.
                El sistema de clasificación de jugadores de la aplicación.ha
                fomentado un entorno competitivo y de apoyo, en el que el 90 %
                de los usuarios proporciona activamente comentarios y
                valoraciones a sus compañeros de juego. En general, la
                aplicación Soccer Matchup Marketplace ha demostrado ser un
                recurso valioso para los entusiastas del fútbol, ​​ya que
                agiliza el proceso de búsqueda de partidos y fomenta una
                comunidad vibrante y comprometida.
              </p>{" "}
              <br />
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                voluptatibus officiis consequuntur quam expedita ducimus
                recusandae. Quibusdam exercitationem voluptas dolorem, rem ullam
                sit omnis neque porro, sunt soluta cumque ipsam.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={proyecto1} />
          </div>
        </div>
      </div>
      <div className="m-auto my-20 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl tv:max-w-none tv:mx-[336px] lg:mx-36 mx-auto bg-blue-600 py-16 xl:rounded-3xl lg:rounded-3xl md:rounded-3xl">
        <div className="m-auto px-4 md:px-16 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl grid grid-cols-12">
          <div className="col-span-12 text-white text-left md:col-span-8">
            <span className="text-md tracking-widest font-sans uppercase">
              <font>
                <font style={{ verticalAlignt: "inherit" }}>Contáctenos</font>
              </font>
            </span>
            <h2 className="col-span-12 text-5xl font-bold">
              <font>
                <font>¿Listo para tu próximo proyecto?</font>
              </font>
            </h2>
            <p className="col-span-12 font-light mt-4 text-lg xl:w-1/2 lg:w-1/2 md:w-3/4">
              <font>
                <font>
                  ¡Cuéntanos tus ideas para que juntos podamos crear un producto
                  exitoso!
                </font>
              </font>
            </p>
          </div>
          <div className="flex mt-4 col-span-12 md:place-self-end md:col-span-4">
            <a
              className="hover:bg-agray-100 w-44 py-[17px] text-center text-sm font-manrope font-bold rounded-[28px] text-ablue-600 bg-white"
              href="/contact"
            >
              <font>
                <font>Contáctenos</font>
              </font>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeProyecto;
