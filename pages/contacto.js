import React from "react";
import Image from "next/image";

import jefe from "../public/iconos/jefe.png";
import metas from "../public/iconos/metas.png";
import dinero from "../public/iconos/dinero.png";

import { Button, Checkbox, Form, Input, Select, message } from "antd";

const { Option } = Select;
function Contacto() {
  const onFinish = async (values) => {
    const empleo = {
      nombre: values.nombre,
      email: values.email,
      whatsappNumber: values.whatsappNumber,
      vacante: values.vacante,
    };
    console.log(empleo);

    console.log("Success:", values);
    message.success("Datos Enviados correctamente");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Por favor mándanos whats sobre el problema");
  };
  return (
    <>
      <div className="contentInfo" style={{ backgroundColor: "#f3f5f9" }}>
        <div>
          <div style={{}}>
            <h1 className="text-4xl font-bold  text-center">Contáctanos</h1>
            <p className="text-2xl text-center ">
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
            <Form
              className="pt-4"
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{ maxWidth: 600, width: "90%" }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre"
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
                label="Email"
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
                label="Whatsapp"
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
                label="Plataforma"
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
              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="prymary"
                  htmlType="submit"
                  className="bg-[#2129ff] text-white p-2 rounded-md inline-flex items-center justify-center"
                >
                  Enviar datos
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
