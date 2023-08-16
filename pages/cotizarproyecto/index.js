import Steps from "@/components/Steps/Steps";
import React from "react";
import { useState } from "react";

const index = () => {
  const options = {
    Plataforma: [
      { label: "Web", price: 100 },
      { label: "Móvil", price: 150 },
    ],
    "Tipo Diseño": [
      { label: "Sistema con base de datos", price: 250 },
      { label: "Diseño de Pagina Web-Movil", price: 100 },
    ],
    Diseño: [
      { label: "Diseño Básico", price: 100 },
      { label: "Diseño Personalizado", price: 200 },
    ],
    Funcionabilidad: [
      { label: "Funcionalidades Básicas", price: 30 },
      { label: "Funcionalidades Avanzadas", price: 50 },
    ],
    Tiempo: [
      { label: "1 a 2 semanas", price: 50 },
      { label: "1 a 2 meses", price: 40 },
      { label: "3 a mas meses", price: 30 },
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
    <div className="bg-[#2129ff] py-[110px]">
      <div className="rowQh flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center text-white font-bold mb-4">
          Cotizador de Proyectos
        </h1>
        {!allOptionsSelected && (
          <Steps
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
        {!allOptionsSelected && (
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleNextStep}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
