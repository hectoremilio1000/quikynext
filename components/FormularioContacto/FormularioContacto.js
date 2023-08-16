import React from "react";

import { Button, Form, Input, Select, message } from "antd";

const { Option } = Select;

const FormularioContacto = (customtype) => {
  const { custom } = customtype;
  console.log(custom);
  const onFinish = async (values) => {
    const empleo = {
      nombre: values.nombre,
      email: values.email,
      whatsappNumber: values.whatsappNumber,
      vacante: values.vacante,
    };
    console.log(empleo);
    message.success("Datos Enviados correctamente");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Por favor mándanos whats sobre el problema");
  };
  return (
    <div className="rowQh flex justify-center items-center">
      <Form
        style={{ width: "100%", maxWidth: "600px" }}
        layout="vertical"
        className="pt-4 w-full"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          style={{ color: "#fff" }}
          label={
            <label
              className={custom === "dark" ? "text-white" : "text-gray-800"}
            >
              Nombre
            </label>
          }
          name="nombre"
          rules={[
            {
              required: true,
              message: "Ingresa tu nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <label
              className={custom === "dark" ? "text-white" : "text-gray-800"}
            >
              Email
            </label>
          }
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <label
              className={custom === "dark" ? "text-white" : "text-gray-800"}
            >
              Whatsapp
            </label>
          }
          name="whatsappNumber"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu número de WhatsApp!",
            },
            {
              pattern: /^\d+$/,
              message: "Por favor ingresa solo números!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <label
              className={custom === "dark" ? "text-white" : "text-gray-800"}
            >
              Plataforma
            </label>
          }
          name="vacante"
          rules={[
            {
              required: true,
              message: "Por favor ingresa la vacante",
            },
          ]}
        >
          <Select
            allowClear
            placeholder="Seleccionar la plataforma de desarrollo"
          >
            <Option value="DESARROLLO WEB">DESARROLLO WEB</Option>
            <Option value="DESARROLLO MOVIL">DESARROLLO MOVIL</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="prymary"
            htmlType="submit"
            className="bg-[#2129ff] text-white p-2 w-full rounded-md flex items-center justify-center"
          >
            Enviar datos
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormularioContacto;
