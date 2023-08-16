import React from "react";

const Steps = ({
  options,
  onOptionChange,
  currentCategory,
  selectedOptions,
  onPreviousStep,
}) => {
  const currentOptions = options[currentCategory];

  const handleOptionSelect = (price) => {
    const updatedSelectedOptions = {
      ...selectedOptions,
      [currentCategory]: {
        price,
        label: currentOptions.find((option) => option.price === price).label,
      },
    };

    onOptionChange(updatedSelectedOptions);
  };

  return (
    <div className="space-y-4 flex flex-col justify-center items-center">
      <h2 className="text-xl text-white font-semibold mb-2">
        Selecciona una opción
      </h2>
      <h3 className="text-3xl font-bold text-[#25c7d2]">{currentCategory}</h3>
      <div className="flex gap-4">
        {currentOptions &&
          currentOptions.map((option, index) => (
            <button
              key={index}
              className={`p-4 inline-block rounded hover:bg-blue-600 ${
                selectedOptions[currentCategory]?.price === option.price
                  ? "bg-blue-600 text-white"
                  : "bg-white text-[#2129ff]    "
              }`}
              onClick={() => handleOptionSelect(option.price)}
            >
              {option.label}
            </button>
          ))}
      </div>
      {onPreviousStep && (
        <button
          className="bg-white px-4 py-2 rounded hover:bg-gray-400 mt-2"
          onClick={onPreviousStep}
        >
          Regresar
        </button>
      )}
    </div>
  );
};

export default Steps;
