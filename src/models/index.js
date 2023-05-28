// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Statusorder = {
  "CREATED": "CREATED",
  "PUBLISHED": "PUBLISHED",
  "VERIFIED": "VERIFIED",
  "SENT": "SENT"
};

const Typeorder = {
  "QUOTE": "QUOTE",
  "ORDER": "ORDER"
};

const Sexotipo = {
  "MASCULINO": "MASCULINO",
  "FEMENINO": "FEMENINO"
};

const Servicio = {
  "EXCELENTE": "EXCELENTE",
  "REGULAR": "REGULAR",
  "MALO": "MALO"
};

const { REFERENCE, RESULTPARAMITEM, PARAMETROSTEST, ORDENPRUEBAITEM, REPRESENTANTE, LABORATORIO, GERENTE, DOCTOR, ORDEN, PACIENTE, PRUEBA, EncuestaServicio, BLOG } = initSchema(schema);

export {
  REFERENCE,
  RESULTPARAMITEM,
  PARAMETROSTEST,
  ORDENPRUEBAITEM,
  REPRESENTANTE,
  LABORATORIO,
  GERENTE,
  DOCTOR,
  ORDEN,
  PACIENTE,
  PRUEBA,
  EncuestaServicio,
  BLOG,
  Statusorder,
  Typeorder,
  Sexotipo,
  Servicio
};