import React from "react";

import { Button, Checkbox, Form, Input, Select, message } from "antd";
import FormularioContacto from "@/components/FormularioContacto/FormularioContacto";

const { Option } = Select;
function Contacto() {
  return (
    <>
      <div className="contentInfo" style={{ backgroundColor: "#f3f5f9" }}>
        <div>
          <div className="py-[30px]">
            <h1 className="text-4xl font-bold text-[#2129ff] text-center">
              Contáctanos
            </h1>
            <p className="text-lg text-center ">
              Nuestro compromiso es con tu seguridad y reconocimiento
              profesional.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormularioContacto custom="light" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
