import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Statusorder {
  CREATED = "CREATED",
  PUBLISHED = "PUBLISHED",
  VERIFIED = "VERIFIED",
  SENT = "SENT"
}

export enum Typeorder {
  QUOTE = "QUOTE",
  ORDER = "ORDER"
}

export enum Sexotipo {
  MASCULINO = "MASCULINO",
  FEMENINO = "FEMENINO"
}

export enum Servicio {
  EXCELENTE = "EXCELENTE",
  REGULAR = "REGULAR",
  MALO = "MALO"
}



type EagerREFERENCE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<REFERENCE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly minReferencia: string;
  readonly maxReferencia?: string | null;
  readonly nombre?: string | null;
  readonly parametrostestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyREFERENCE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<REFERENCE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly minReferencia: string;
  readonly maxReferencia?: string | null;
  readonly nombre?: string | null;
  readonly parametrostestID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type REFERENCE = LazyLoading extends LazyLoadingDisabled ? EagerREFERENCE : LazyREFERENCE

export declare const REFERENCE: (new (init: ModelInit<REFERENCE>) => REFERENCE) & {
  copyOf(source: REFERENCE, mutator: (draft: MutableModel<REFERENCE>) => MutableModel<REFERENCE> | void): REFERENCE;
}

type EagerRESULTPARAMITEM = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESULTPARAMITEM, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parametrostestID: string;
  readonly PARAMETROSTEST?: PARAMETROSTEST | null;
  readonly ordenpruebaitemID: string;
  readonly resultParam?: string | null;
  readonly selectedReference?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRESULTPARAMITEM = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RESULTPARAMITEM, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parametrostestID: string;
  readonly PARAMETROSTEST: AsyncItem<PARAMETROSTEST | undefined>;
  readonly ordenpruebaitemID: string;
  readonly resultParam?: string | null;
  readonly selectedReference?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RESULTPARAMITEM = LazyLoading extends LazyLoadingDisabled ? EagerRESULTPARAMITEM : LazyRESULTPARAMITEM

export declare const RESULTPARAMITEM: (new (init: ModelInit<RESULTPARAMITEM>) => RESULTPARAMITEM) & {
  copyOf(source: RESULTPARAMITEM, mutator: (draft: MutableModel<RESULTPARAMITEM>) => MutableModel<RESULTPARAMITEM> | void): RESULTPARAMITEM;
}

type EagerPARAMETROSTEST = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PARAMETROSTEST, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly unidad?: string | null;
  readonly pruebaID: string;
  readonly RESULTPARAMITEMS?: (RESULTPARAMITEM | null)[] | null;
  readonly category?: string | null;
  readonly REFERENCES?: (REFERENCE | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPARAMETROSTEST = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PARAMETROSTEST, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly unidad?: string | null;
  readonly pruebaID: string;
  readonly RESULTPARAMITEMS: AsyncCollection<RESULTPARAMITEM>;
  readonly category?: string | null;
  readonly REFERENCES: AsyncCollection<REFERENCE>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PARAMETROSTEST = LazyLoading extends LazyLoadingDisabled ? EagerPARAMETROSTEST : LazyPARAMETROSTEST

export declare const PARAMETROSTEST: (new (init: ModelInit<PARAMETROSTEST>) => PARAMETROSTEST) & {
  copyOf(source: PARAMETROSTEST, mutator: (draft: MutableModel<PARAMETROSTEST>) => MutableModel<PARAMETROSTEST> | void): PARAMETROSTEST;
}

type EagerORDENPRUEBAITEM = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDENPRUEBAITEM, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pruebaID: string;
  readonly ordenID: string;
  readonly RESULTPARAMITEMS?: (RESULTPARAMITEM | null)[] | null;
  readonly resultInsight?: string | null;
  readonly costo: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyORDENPRUEBAITEM = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDENPRUEBAITEM, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pruebaID: string;
  readonly ordenID: string;
  readonly RESULTPARAMITEMS: AsyncCollection<RESULTPARAMITEM>;
  readonly resultInsight?: string | null;
  readonly costo: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ORDENPRUEBAITEM = LazyLoading extends LazyLoadingDisabled ? EagerORDENPRUEBAITEM : LazyORDENPRUEBAITEM

export declare const ORDENPRUEBAITEM: (new (init: ModelInit<ORDENPRUEBAITEM>) => ORDENPRUEBAITEM) & {
  copyOf(source: ORDENPRUEBAITEM, mutator: (draft: MutableModel<ORDENPRUEBAITEM>) => MutableModel<ORDENPRUEBAITEM> | void): ORDENPRUEBAITEM;
}

type EagerREPRESENTANTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<REPRESENTANTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly groups?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyREPRESENTANTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<REPRESENTANTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly groups?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type REPRESENTANTE = LazyLoading extends LazyLoadingDisabled ? EagerREPRESENTANTE : LazyREPRESENTANTE

export declare const REPRESENTANTE: (new (init: ModelInit<REPRESENTANTE>) => REPRESENTANTE) & {
  copyOf(source: REPRESENTANTE, mutator: (draft: MutableModel<REPRESENTANTE>) => MutableModel<REPRESENTANTE> | void): REPRESENTANTE;
}

type EagerLABORATORIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LABORATORIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly REPRESENTANTES?: (REPRESENTANTE | null)[] | null;
  readonly GERENTES?: (GERENTE | null)[] | null;
  readonly DOCTORS?: (DOCTOR | null)[] | null;
  readonly PACIENTES?: (PACIENTE | null)[] | null;
  readonly PRUEBAS?: (PRUEBA | null)[] | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLABORATORIO = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LABORATORIO, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly createdBy: string;
  readonly REPRESENTANTES: AsyncCollection<REPRESENTANTE>;
  readonly GERENTES: AsyncCollection<GERENTE>;
  readonly DOCTORS: AsyncCollection<DOCTOR>;
  readonly PACIENTES: AsyncCollection<PACIENTE>;
  readonly PRUEBAS: AsyncCollection<PRUEBA>;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LABORATORIO = LazyLoading extends LazyLoadingDisabled ? EagerLABORATORIO : LazyLABORATORIO

export declare const LABORATORIO: (new (init: ModelInit<LABORATORIO>) => LABORATORIO) & {
  copyOf(source: LABORATORIO, mutator: (draft: MutableModel<LABORATORIO>) => MutableModel<LABORATORIO> | void): LABORATORIO;
}

type EagerGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly groups?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGERENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GERENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly userName: string;
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdBy: string;
  readonly groups?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GERENTE = LazyLoading extends LazyLoadingDisabled ? EagerGERENTE : LazyGERENTE

export declare const GERENTE: (new (init: ModelInit<GERENTE>) => GERENTE) & {
  copyOf(source: GERENTE, mutator: (draft: MutableModel<GERENTE>) => MutableModel<GERENTE> | void): GERENTE;
}

type EagerDOCTOR = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DOCTOR, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly especialidad?: string | null;
  readonly calle?: string | null;
  readonly numeroExterior?: string | null;
  readonly numeroInterior?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly createdBy?: string | null;
  readonly groups?: (string | null)[] | null;
  readonly userName?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDOCTOR = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DOCTOR, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly especialidad?: string | null;
  readonly calle?: string | null;
  readonly numeroExterior?: string | null;
  readonly numeroInterior?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly createdBy?: string | null;
  readonly groups?: (string | null)[] | null;
  readonly userName?: string | null;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DOCTOR = LazyLoading extends LazyLoadingDisabled ? EagerDOCTOR : LazyDOCTOR

export declare const DOCTOR: (new (init: ModelInit<DOCTOR>) => DOCTOR) & {
  copyOf(source: DOCTOR, mutator: (draft: MutableModel<DOCTOR>) => MutableModel<DOCTOR> | void): DOCTOR;
}

type EagerORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: Typeorder | keyof typeof Typeorder;
  readonly fechaOrden: string;
  readonly horaOrden: string;
  readonly formatoPago?: string | null;
  readonly envioPaciente?: string | null;
  readonly totalPruebas: number;
  readonly sucursalMuestra?: string | null;
  readonly tratamiento?: string | null;
  readonly capturaOrden?: string | null;
  readonly diabetico?: string | null;
  readonly hipertenso?: string | null;
  readonly padecimientos?: string | null;
  readonly medicamentos?: string | null;
  readonly diagnostico?: string | null;
  readonly envioDoctor?: string | null;
  readonly altura?: number | null;
  readonly peso?: number | null;
  readonly indiceMasaCorporal?: number | null;
  readonly temperatura?: number | null;
  readonly costoTotal: number;
  readonly saturacion?: number | null;
  readonly frecuenciaCardiaca?: number | null;
  readonly pacienteID: string;
  readonly datePublishingResult?: string | null;
  readonly hourPublishingResult?: string | null;
  readonly ORDENPRUEBAITEMS?: (ORDENPRUEBAITEM | null)[] | null;
  readonly doctorID: string;
  readonly status: Statusorder | keyof typeof Statusorder;
  readonly groups?: (string | null)[] | null;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly pdfReceipt?: string | null;
  readonly urlReceipt?: string | null;
  readonly pdfResul?: string | null;
  readonly urlResult?: string | null;
  readonly presion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyORDEN = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ORDEN, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: Typeorder | keyof typeof Typeorder;
  readonly fechaOrden: string;
  readonly horaOrden: string;
  readonly formatoPago?: string | null;
  readonly envioPaciente?: string | null;
  readonly totalPruebas: number;
  readonly sucursalMuestra?: string | null;
  readonly tratamiento?: string | null;
  readonly capturaOrden?: string | null;
  readonly diabetico?: string | null;
  readonly hipertenso?: string | null;
  readonly padecimientos?: string | null;
  readonly medicamentos?: string | null;
  readonly diagnostico?: string | null;
  readonly envioDoctor?: string | null;
  readonly altura?: number | null;
  readonly peso?: number | null;
  readonly indiceMasaCorporal?: number | null;
  readonly temperatura?: number | null;
  readonly costoTotal: number;
  readonly saturacion?: number | null;
  readonly frecuenciaCardiaca?: number | null;
  readonly pacienteID: string;
  readonly datePublishingResult?: string | null;
  readonly hourPublishingResult?: string | null;
  readonly ORDENPRUEBAITEMS: AsyncCollection<ORDENPRUEBAITEM>;
  readonly doctorID: string;
  readonly status: Statusorder | keyof typeof Statusorder;
  readonly groups?: (string | null)[] | null;
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly pdfReceipt?: string | null;
  readonly urlReceipt?: string | null;
  readonly pdfResul?: string | null;
  readonly urlResult?: string | null;
  readonly presion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ORDEN = LazyLoading extends LazyLoadingDisabled ? EagerORDEN : LazyORDEN

export declare const ORDEN: (new (init: ModelInit<ORDEN>) => ORDEN) & {
  copyOf(source: ORDEN, mutator: (draft: MutableModel<ORDEN>) => MutableModel<ORDEN> | void): ORDEN;
}

type EagerPACIENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PACIENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly sexo?: Sexotipo | keyof typeof Sexotipo | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: number | null;
  readonly direccion?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly ORDENS?: (ORDEN | null)[] | null;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly createdBy?: string | null;
  readonly groups?: (string | null)[] | null;
  readonly userName: string;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPACIENTE = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PACIENTE, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombres: string;
  readonly apellidoPaterno?: string | null;
  readonly apellidoMaterno?: string | null;
  readonly sexo?: Sexotipo | keyof typeof Sexotipo | null;
  readonly fechaNacimiento?: string | null;
  readonly edad?: number | null;
  readonly direccion?: string | null;
  readonly colonia?: string | null;
  readonly cp?: string | null;
  readonly municipio?: string | null;
  readonly estado?: string | null;
  readonly pais?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly ORDENS: AsyncCollection<ORDEN>;
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly createdBy?: string | null;
  readonly groups?: (string | null)[] | null;
  readonly userName: string;
  readonly confirmed?: boolean | null;
  readonly blocked?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PACIENTE = LazyLoading extends LazyLoadingDisabled ? EagerPACIENTE : LazyPACIENTE

export declare const PACIENTE: (new (init: ModelInit<PACIENTE>) => PACIENTE) & {
  copyOf(source: PACIENTE, mutator: (draft: MutableModel<PACIENTE>) => MutableModel<PACIENTE> | void): PACIENTE;
}

type EagerPRUEBA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PRUEBA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly categoria: string;
  readonly precio: number;
  readonly precioDescuento?: number | null;
  readonly descripcionCorta?: string | null;
  readonly tiempoEntrega?: string | null;
  readonly indicaciones?: string | null;
  readonly tipoMuestra?: string | null;
  readonly tipoContenedor?: string | null;
  readonly PARAMETROSTESTS?: (PARAMETROSTEST | null)[] | null;
  readonly laboratorioID: string;
  readonly LABORATORIO?: LABORATORIO | null;
  readonly groups?: (string | null)[] | null;
  readonly ORDENPRUEBAITEMS?: (ORDENPRUEBAITEM | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPRUEBA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PRUEBA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly categoria: string;
  readonly precio: number;
  readonly precioDescuento?: number | null;
  readonly descripcionCorta?: string | null;
  readonly tiempoEntrega?: string | null;
  readonly indicaciones?: string | null;
  readonly tipoMuestra?: string | null;
  readonly tipoContenedor?: string | null;
  readonly PARAMETROSTESTS: AsyncCollection<PARAMETROSTEST>;
  readonly laboratorioID: string;
  readonly LABORATORIO: AsyncItem<LABORATORIO | undefined>;
  readonly groups?: (string | null)[] | null;
  readonly ORDENPRUEBAITEMS: AsyncCollection<ORDENPRUEBAITEM>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PRUEBA = LazyLoading extends LazyLoadingDisabled ? EagerPRUEBA : LazyPRUEBA

export declare const PRUEBA: (new (init: ModelInit<PRUEBA>) => PRUEBA) & {
  copyOf(source: PRUEBA, mutator: (draft: MutableModel<PRUEBA>) => MutableModel<PRUEBA> | void): PRUEBA;
}

type EagerEncuestaServicio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EncuestaServicio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encuesta?: Servicio | keyof typeof Servicio | null;
  readonly usuario?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEncuestaServicio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EncuestaServicio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly encuesta?: Servicio | keyof typeof Servicio | null;
  readonly usuario?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EncuestaServicio = LazyLoading extends LazyLoadingDisabled ? EagerEncuestaServicio : LazyEncuestaServicio

export declare const EncuestaServicio: (new (init: ModelInit<EncuestaServicio>) => EncuestaServicio) & {
  copyOf(source: EncuestaServicio, mutator: (draft: MutableModel<EncuestaServicio>) => MutableModel<EncuestaServicio> | void): EncuestaServicio;
}

type EagerBLOG = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BLOG, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly texto1?: string | null;
  readonly texto2?: string | null;
  readonly texto3?: string | null;
  readonly imagen1?: string | null;
  readonly imagen2?: string | null;
  readonly imagen3?: string | null;
  readonly fecha?: string | null;
  readonly url1?: string | null;
  readonly url2?: string | null;
  readonly url3?: string | null;
  readonly autor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBLOG = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BLOG, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly titulo?: string | null;
  readonly subtitulo?: string | null;
  readonly texto1?: string | null;
  readonly texto2?: string | null;
  readonly texto3?: string | null;
  readonly imagen1?: string | null;
  readonly imagen2?: string | null;
  readonly imagen3?: string | null;
  readonly fecha?: string | null;
  readonly url1?: string | null;
  readonly url2?: string | null;
  readonly url3?: string | null;
  readonly autor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BLOG = LazyLoading extends LazyLoadingDisabled ? EagerBLOG : LazyBLOG

export declare const BLOG: (new (init: ModelInit<BLOG>) => BLOG) & {
  copyOf(source: BLOG, mutator: (draft: MutableModel<BLOG>) => MutableModel<BLOG> | void): BLOG;
}