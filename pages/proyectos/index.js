import Image from "next/image";
import React from "react";
import proyecto1 from "../../public/portafolio/filmor-optica/filmoraoptica.png";
import proyecto2 from "../../public/portafolio/san-mateo/sanmateo.png";
import proyecto3 from "../../public/portafolio/amazon-cargo/amazoncargo.png";
import Link from "next/link";
const Proyectos = () => {
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
  console.log(proyectos);
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
      {proyectos.map((proyecto, index) => {
        return (
          <div
            key={index}
            className="rowQh flex gap-12 items-center flex-wrap md:flex-nowrap"
          >
            <div className="w-full md:w-1/2">
              <Image src={proyecto.pathImage} alt="proyecto1" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="pt-8 text-4xl text-left text-[#2225a1] font-bold">
                {proyecto.firstname + " " + proyecto.lastname}
              </h1>
              <p className="font-light mt-4 md:w-[440px] text-left text-lg text-[#7c7c7c]  m-auto">
                {proyecto.description}
              </p>
              <Link
                href={"/proyectos/" + proyecto.slug}
                className="p-3 inline-block mt-4 bg-[#00747c] text-xl rounded-md text-white font-bold"
              >
                Ver proyecto
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Proyectos;
