// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tipodocumento = {
  "NOTADEVENTA": "NOTADEVENTA"
};

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

const Servicio = {
  "EXCELENTE": "EXCELENTE",
  "REGULAR": "REGULAR",
  "MALO": "MALO"
};

const Sexotipo = {
  "MASCULINO": "MASCULINO",
  "FEMENINO": "FEMENINO"
};

const { CONFIGURACIONDOCUMENTO, DOCUMENTOS, Caja, Turno, GASTOS, REFERENCE, RESULTPARAMITEM, ORDENPRUEBAITEM, REPRESENTANTE, GERENTE, LABORATORIO, PARAMETROSTEST, EncuestaServicio, ORDEN, PRUEBA, DOCTOR, PACIENTE, BLOG } = initSchema(schema);

export {
  CONFIGURACIONDOCUMENTO,
  DOCUMENTOS,
  Caja,
  Turno,
  GASTOS,
  REFERENCE,
  RESULTPARAMITEM,
  ORDENPRUEBAITEM,
  REPRESENTANTE,
  GERENTE,
  LABORATORIO,
  PARAMETROSTEST,
  EncuestaServicio,
  ORDEN,
  PRUEBA,
  DOCTOR,
  PACIENTE,
  BLOG,
  Tipodocumento,
  Statusorder,
  Typeorder,
  Servicio,
  Sexotipo
};