import Steps from "@/components/Steps/Steps";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import { useState } from "react";
import icons1 from "../../public/iconos/ordenador.png";
import icons2 from "../../public/iconos/movil.png";
import icons3 from "../../public/iconos/basedatos.png";
import icons4 from "../../public/iconos/desingwebmovil.png";
import icons5 from "../../public/iconos/desingbasico.png";
import icons6 from "../../public/iconos/desingpersonalizado.png";

const Index = () => {
  const options = {
    Plataforma: [
      { label: "Web", price: 100, imgUrl: icons1 },
      { label: "Móvil", price: 150, imgUrl: icons2 },
    ],
    "Tipo Diseño": [
      { label: "Sistema con base de datos", price: 250, imgUrl: icons3 },
      { label: "Diseño de Pagina Web-Movil", price: 100, imgUrl: icons4 },
    ],
    Diseño: [
      { label: "Diseño Básico", price: 100, imgUrl: icons5 },
      { label: "Diseño Personalizado", price: 200, imgUrl: icons6 },
    ],
    Funcionabilidad: [
      { label: "Funcionalidades Básicas", price: 30, imgUrl: "" },
      { label: "Funcionalidades Avanzadas", price: 50, imgUrl: "" },
    ],
    Tiempo: [
      { label: "1 a 2 semanas", price: 50, imgUrl: "" },
      { label: "1 a 2 meses", price: 40, imgUrl: "" },
      { label: "3 a mas meses", price: 30, imgUrl: "" },
    ],
  };

  const [selectedOptions, setSelectedOptions] = useState({});
  const [allOptionsSelected, setAllOptionsSelected] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleOptionChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
    const totalPrice = Object.values(newSelectedOptions).reduce(
      (acc, selectedOption) => acc + selectedOption.price,
      0
    );

    if (
      Object.keys(newSelectedOptions).length === Object.keys(options).length
    ) {
      setAllOptionsSelected(true);
    } else {
      setAllOptionsSelected(false);
    }
  };

  const currentCategory = Object.keys(options)[activeStep];

  const handlePreviousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setAllOptionsSelected(false);
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  return (
    <>
      <div className="bg-[#2129ff] py-[110px]">
        <div className="rowQh flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center text-white font-bold mb-4">
            Cotizador de Proyectos
          </h1>
          {!allOptionsSelected && (
            <Steps
              allOptionsSelected={allOptionsSelected}
              handleNextStep={handleNextStep}
              options={options}
              currentCategory={currentCategory}
              onOptionChange={handleOptionChange}
              selectedOptions={selectedOptions}
              onPreviousStep={activeStep > 0 ? handlePreviousStep : null}
            />
          )}
          {allOptionsSelected && (
            <div className="mt-4">
              <h2 className="text-5xl font-bold text-[#4af3ff]">
                Total: $
                {Object.values(selectedOptions).reduce(
                  (acc, selectedOption) => acc + selectedOption.price,
                  0
                )}
              </h2>
              <p className="mt-2 text-white">
                El precio total para su proyecto es $
                {Object.values(selectedOptions).reduce(
                  (acc, selectedOption) => acc + selectedOption.price,
                  0
                )}
                . ¡Contáctenos para más detalles!
              </p>
              <div className="mt-2">
                <a
                  href="https://wa.me/+5215521293811"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:contacto@tudominio.com"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
