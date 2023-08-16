import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import proyecto1 from "../../public/portafolio/filmor-optica/filmoraoptica.png";
import proyecto2 from "../../public/portafolio/san-mateo/sanmateo.png";
import proyecto3 from "../../public/portafolio/amazon-cargo/amazoncargo.png";
import { useState } from "react";
import FormularioContacto from "@/components/FormularioContacto/FormularioContacto";

function Proyecto1() {
  const [proyectoNow, setProyectoNow] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    if (slug) {
      buscarProyecto(slug);
    }
  }, [slug]);
  const proyectos = [
    {
      id: 1,
      firstname: "Filmor Optica",
      lastname: "Optica",
      plataforma: "WEB",
      servicios: "Diseño UX-UI, mesnajeria, correos corporativos, etc.",
      desafioGeneral: {
        problemaGeneral: "Problema general",
        lsitDesafios: [
          {
            description: "desafio 1",
          },
          {
            description: "desafio 2",
          },
          {
            description: "desafio 3",
          },
        ],
      },
      resultados:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate optio animi quisquam adipisci ratione ad nostrum aliquid deserunt odio facere ex alias, commodi veniam sit explicabo? Odio, molestiae quae.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis non quasi quibusdam dolorum, praesentium sequi nesciunt beatae, sint voluptate est voluptas minus? Et enim, placeat officiis recusandae libero cumque?",
      slug: "filmor-optica",
      pathImage: proyecto1,
    },
    {
      id: 2,
      firstname: "Laboratorios",
      lastname: "San mateo",
      plataforma: "WEB",
      servicios: "Diseño UX-UI, mesnajeria, correos corporativos, etc.",
      desafioGeneral: {
        problemaGeneral: "Problema general",
        lsitDesafios: [
          {
            description: "desafio 1",
          },
          {
            description: "desafio 2",
          },
          {
            description: "desafio 3",
          },
        ],
      },
      resultados:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate optio animi quisquam adipisci ratione ad nostrum aliquid deserunt odio facere ex alias, commodi veniam sit explicabo? Odio, molestiae quae.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis non quasi quibusdam dolorum, praesentium sequi nesciunt beatae, sint voluptate est voluptas minus? Et enim, placeat officiis recusandae libero cumque?",
      slug: "san-mateo",
      pathImage: proyecto2,
    },
    {
      id: 3,
      firstname: "Amazon",
      lastname: "Cargo",
      plataforma: "WEB",
      servicios: "Diseño UX-UI, mesnajeria, correos corporativos, etc.",
      desafioGeneral: {
        problemaGeneral: "Problema general",
        lsitDesafios: [
          {
            description: "desafio 1",
          },
          {
            description: "desafio 2",
          },
          {
            description: "desafio 3",
          },
        ],
      },
      resultados:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate optio animi quisquam adipisci ratione ad nostrum aliquid deserunt odio facere ex alias, commodi veniam sit explicabo? Odio, molestiae quae.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis non quasi quibusdam dolorum, praesentium sequi nesciunt beatae, sint voluptate est voluptas minus? Et enim, placeat officiis recusandae libero cumque?",
      slug: "amazon-cargo",
      pathImage: proyecto3,
    },
  ];
  const buscarProyecto = (proSlug) => {
    const result = proyectos.filter((e) => e.slug === proSlug);
    console.log(result);
    setProyectoNow(result[0]);
  };
  console.log(proyectoNow);

  if (proyectoNow.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="py-[100px]">
      <div className="rowQh flex gap-12 items-center flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <h3 className="text-md tracking-widest font-bold uppercase">
            CASO DE ESTUDIO
          </h3>
          <h1 className="text-4xl mb-6" stye={{ color: "#0074c" }}>
            <b>
              <span className="text-[#2228ff]">{proyectoNow.firstname} </span>
              {proyectoNow.lastname}
            </b>
          </h1>
          <div>
            <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
              {proyectoNow.description}
            </p>
            <div className="caracteristicas mt-6">
              <h3 className="text-md tracking-widest text-[#2228ff] f uppercase">
                PLATAFORMA
              </h3>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                {proyectoNow.plataforma}
              </p>
            </div>
            <div className="caracteristicas mt-6">
              <h3 className="text-md tracking-widest text-[#2228ff] f uppercase">
                SERVICIOS
              </h3>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                {proyectoNow.servicios}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={proyectoNow.pathImage} alt="meproyecto" />
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
                {proyectoNow.desafioGeneral.problemaGeneral}
              </p>
              {proyectoNow.desafioGeneral.lsitDesafios.map((desafio, index) => {
                return (
                  <div key={index} className="caracteristicas mt-6">
                    <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]">
                      {desafio.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={proyectoNow.pathImage} alt="meproyecto" />
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
                {proyectoNow.resultados}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={proyectoNow.pathImage} alt="meproyecto" />
          </div>
        </div>
      </div>
      <div className="mx-auto my-20 rowQh bg-blue-600 xl:rounded-3xl lg:rounded-3xl md:rounded-3xl">
        <div className="m-auto py-14 px-4 md:px-16 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl grid grid-cols-12">
          <div className="col-span-12 text-white text-left md:col-span-6">
            <span className="text-md tracking-widest font-sans uppercase">
              <font>
                <font style={{ verticalAlignt: "inherit" }}>Contáctenos</font>
              </font>
            </span>
            <h2 className="col-span-12 text-4xl font-bold">
              <font>
                <font>¿Listo para tu próximo proyecto?</font>
              </font>
            </h2>
            <p className="col-span-12 font-light mt-4 text-sm xl:w-1/2 lg:w-1/2 md:w-3/4">
              <font>
                <font>
                  ¡Cuéntanos tus ideas para que juntos podamos crear un producto
                  exitoso!
                </font>
              </font>
            </p>
          </div>
          <div className="flex mt-4 col-span-12 md:col-span-6">
            <FormularioContacto custom="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyecto1;
