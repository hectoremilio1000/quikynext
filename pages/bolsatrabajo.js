import Link from "next/link";
import React from "react";
import Image from "next/image";

import jefe from "../public/iconos/jefe.png";
import metas from "../public/iconos/metas.png";
import dinero from "../public/iconos/dinero.png";
import { DataStore } from '@aws-amplify/datastore';
import { EMPLEO } from '../src/models'

import { Button, Checkbox, Form, Input, Select, message } from 'antd';
import { API, graphqlOperation } from "aws-amplify";

import {createEMPLEO} from '../src/graphql/mutations'

const { Option } = Select;
function Bolsatrabajo() {

  const onFinish = async (values) => {

    const empleo = {
'nombre':values.nombre,
        'email':values.email,
        'whatsappNumber':values.whatsappNumber,
        'vacante':values.vacante
    }

    await API.graphql(graphqlOperation(createEMPLEO, {input:empleo }))
      
 

    console.log('Success:', values);
    message.success('Datos Enviados correctamente')
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Por favor mándanos whats sobre el problema')
  };
  return (
    <>
      <div className="bannerSanmateo posRelative ovHidden" style={{ height: "60vh", backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/sanmateo/enfermera.jpg")`, backgroundPosition: "top center", backgroundSize: "cover" }}>
        {/* <video autoPlay muted loop src={videoPort} /> */}

        <div className="titlePortada rowQh dFlex" style={{ gap: "20px" }}>
          <div className="blockElement" style={{width:'75%'}}>

            <h1 className="text-xl md:text-4xl text-sky-500 pb-2">¿Empleo?</h1>
            <p className="text-white md:text-3xl">
              Te garantizamos salarios muy superiores al mercado
            </p>
          </div>
        </div>
      </div>



   
     <div className="contentInfo" style={{ backgroundColor: "#F8F8FF" }}>
        <div className="rowQh">
          <h1 className="text-2xl font-bold text-center md:s">
            ¿Por qué unirse a nuestro equipo?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly" style={{ gap: "20px" }}>
          <div className="flex items-center flex-col"
          >
          
              <Image style={{ width: "150px" }} src={jefe} />
           
      
            <p className="contentModel2">Buen ambiente laboral</p>
  
          </div>
          <div className="flex items-center flex-col">
            <Image style={{ width: "150px" }} src={dinero} />
            <p className="contentModel2">Gana el dinero que te mereces</p>
          </div>
          <div className="flex items-center flex-col">
            <Image style={{ width: "150px" }} src={metas} />
            <p className="contentModel2">Logra tus sueños con tu trabajo</p>
          </div>
        </div>
      </div>
      <div className="contentInfo" style={{ backgroundColor: "#f3f5f9" }}>
        <div >
        <div style={{
            
          }} >

          <h1 className="text-2xl font-bold  text-center">
            Ingresa tus datos
          </h1>
          <p className="text-base text-center ">
            Nuestro compromiso es con tu seguridad y reconocimiento profesional.
            </p>
            </div>
        
            
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form className="pt-4"
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{ maxWidth: 600, width: '90%' }}
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
                    message: 'Ingresa tu nombre',
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
                    message: 'Por favor ingresa tu email',
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
                    message: 'Por favor ingresa tu número de WhatsApp!',
                  },
                  {
                    pattern: /^\d+$/,
                    message: 'Por favor ingresa solo números!'
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Selecciona la vacante"
                name="vacante"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresa la vacante',
                  },

                ]}
              >
                <Select
                  allowClear
                >
                  <Option value="enfermera">Enfermera</Option>
                  <Option value="quimicoFarmaceutico">Químico Farmaceútico</Option>
                  <Option value="laboratoristaClinico">Laboratorista Clínico</Option>
                  <Option value="optometrista">Optometrista</Option>
                  <Option value="representanteMedico">Representante Médico</Option>

                </Select>

              </Form.Item>
              <Form.Item
              style={{ display: 'flex', justifyContent:'center'}}
              >
                <Button type="prymary" htmlType="submit" className="bg-sky-500 hover:bg-sky-600 text-white ">
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

export default Bolsatrabajo;
