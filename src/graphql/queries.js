/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEMPLEO = /* GraphQL */ `
  query GetEMPLEO($id: ID!) {
    getEMPLEO(id: $id) {
      id
      nombre
      email
      whatsappNumber
      vacante
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listEMPLEOS = /* GraphQL */ `
  query ListEMPLEOS(
    $filter: ModelEMPLEOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEMPLEOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        email
        whatsappNumber
        vacante
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEMPLEOS = /* GraphQL */ `
  query SyncEMPLEOS(
    $filter: ModelEMPLEOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEMPLEOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        email
        whatsappNumber
        vacante
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPAQUETESPRUEBAS = /* GraphQL */ `
  query GetPAQUETESPRUEBAS($id: ID!) {
    getPAQUETESPRUEBAS(id: $id) {
      id
      paquetesID
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPAQUETESPRUEBAS = /* GraphQL */ `
  query ListPAQUETESPRUEBAS(
    $filter: ModelPAQUETESPRUEBASFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPAQUETESPRUEBAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paquetesID
        pruebaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPAQUETESPRUEBAS = /* GraphQL */ `
  query SyncPAQUETESPRUEBAS(
    $filter: ModelPAQUETESPRUEBASFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPAQUETESPRUEBAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        paquetesID
        pruebaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pAQUETESPRUEBASByPaquetesID = /* GraphQL */ `
  query PAQUETESPRUEBASByPaquetesID(
    $paquetesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPAQUETESPRUEBASFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pAQUETESPRUEBASByPaquetesID(
      paquetesID: $paquetesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        paquetesID
        pruebaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pAQUETESPRUEBASByPruebaID = /* GraphQL */ `
  query PAQUETESPRUEBASByPruebaID(
    $pruebaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPAQUETESPRUEBASFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pAQUETESPRUEBASByPruebaID(
      pruebaID: $pruebaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        paquetesID
        pruebaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPAQUETES = /* GraphQL */ `
  query GetPAQUETES($id: ID!) {
    getPAQUETES(id: $id) {
      id
      nombre
      precioTotal
      PAQUETESPRUEBAS {
        items {
          id
          paquetesID
          pruebaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPAQUETES = /* GraphQL */ `
  query ListPAQUETES(
    $filter: ModelPAQUETESFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPAQUETES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        precioTotal
        PAQUETESPRUEBAS {
          items {
            id
            paquetesID
            pruebaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPAQUETES = /* GraphQL */ `
  query SyncPAQUETES(
    $filter: ModelPAQUETESFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPAQUETES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        precioTotal
        PAQUETESPRUEBAS {
          items {
            id
            paquetesID
            pruebaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  query GetCONFIGURACIONDOCUMENTO($id: ID!) {
    getCONFIGURACIONDOCUMENTO(id: $id) {
      id
      tipoDocumento
      serieActual
      numeroSecuencialActual
      laboratorioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCONFIGURACIONDOCUMENTOS = /* GraphQL */ `
  query ListCONFIGURACIONDOCUMENTOS(
    $filter: ModelCONFIGURACIONDOCUMENTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCONFIGURACIONDOCUMENTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tipoDocumento
        serieActual
        numeroSecuencialActual
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCONFIGURACIONDOCUMENTOS = /* GraphQL */ `
  query SyncCONFIGURACIONDOCUMENTOS(
    $filter: ModelCONFIGURACIONDOCUMENTOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCONFIGURACIONDOCUMENTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tipoDocumento
        serieActual
        numeroSecuencialActual
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const cONFIGURACIONDOCUMENTOSByLaboratorioID = /* GraphQL */ `
  query CONFIGURACIONDOCUMENTOSByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCONFIGURACIONDOCUMENTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cONFIGURACIONDOCUMENTOSByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tipoDocumento
        serieActual
        numeroSecuencialActual
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDOCUMENTOS = /* GraphQL */ `
  query GetDOCUMENTOS($id: ID!) {
    getDOCUMENTOS(id: $id) {
      id
      tipoDocumento
      serie
      numeroSecuencial
      laboratorioID
      ordenID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listDOCUMENTOS = /* GraphQL */ `
  query ListDOCUMENTOS(
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDOCUMENTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tipoDocumento
        serie
        numeroSecuencial
        laboratorioID
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDOCUMENTOS = /* GraphQL */ `
  query SyncDOCUMENTOS(
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDOCUMENTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tipoDocumento
        serie
        numeroSecuencial
        laboratorioID
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const dOCUMENTOSByLaboratorioID = /* GraphQL */ `
  query DOCUMENTOSByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dOCUMENTOSByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tipoDocumento
        serie
        numeroSecuencial
        laboratorioID
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const dOCUMENTOSByOrdenID = /* GraphQL */ `
  query DOCUMENTOSByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDOCUMENTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dOCUMENTOSByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tipoDocumento
        serie
        numeroSecuencial
        laboratorioID
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCaja = /* GraphQL */ `
  query GetCaja($id: ID!) {
    getCaja(id: $id) {
      id
      nombre
      laboratorioID
      Turnos {
        items {
          id
          montoInicial
          fechaApertura
          montoCierre
          fechaCierre
          usuario
          estado
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          cajaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listCajas = /* GraphQL */ `
  query ListCajas(
    $filter: ModelCajaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCajas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        laboratorioID
        Turnos {
          items {
            id
            montoInicial
            fechaApertura
            montoCierre
            fechaCierre
            usuario
            estado
            cajaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCajas = /* GraphQL */ `
  query SyncCajas(
    $filter: ModelCajaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCajas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        laboratorioID
        Turnos {
          items {
            id
            montoInicial
            fechaApertura
            montoCierre
            fechaCierre
            usuario
            estado
            cajaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const cajasByLaboratorioID = /* GraphQL */ `
  query CajasByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCajaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cajasByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        laboratorioID
        Turnos {
          items {
            id
            montoInicial
            fechaApertura
            montoCierre
            fechaCierre
            usuario
            estado
            cajaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTurno = /* GraphQL */ `
  query GetTurno($id: ID!) {
    getTurno(id: $id) {
      id
      montoInicial
      fechaApertura
      montoCierre
      fechaCierre
      usuario
      estado
      ORDENS {
        items {
          id
          type
          fechaOrden
          horaOrden
          formatoPago
          envioPaciente
          totalPruebas
          sucursalMuestra
          tratamiento
          capturaOrden
          diabetico
          hipertenso
          padecimientos
          medicamentos
          diagnostico
          envioDoctor
          altura
          peso
          indiceMasaCorporal
          temperatura
          costoTotal
          saturacion
          frecuenciaCardiaca
          pacienteID
          datePublishingResult
          hourPublishingResult
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
            __typename
          }
          doctorID
          status
          groups
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          pdfReceipt
          urlReceipt
          pdfResul
          urlResult
          presion
          turnoID
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          fecha
          turnoID
          laboratorioID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      cajaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTurnos = /* GraphQL */ `
  query ListTurnos(
    $filter: ModelTurnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTurnos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        montoInicial
        fechaApertura
        montoCierre
        fechaCierre
        usuario
        estado
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cajaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTurnos = /* GraphQL */ `
  query SyncTurnos(
    $filter: ModelTurnoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTurnos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        montoInicial
        fechaApertura
        montoCierre
        fechaCierre
        usuario
        estado
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cajaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const turnosByCajaID = /* GraphQL */ `
  query TurnosByCajaID(
    $cajaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTurnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    turnosByCajaID(
      cajaID: $cajaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        montoInicial
        fechaApertura
        montoCierre
        fechaCierre
        usuario
        estado
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        cajaID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGASTOS = /* GraphQL */ `
  query GetGASTOS($id: ID!) {
    getGASTOS(id: $id) {
      id
      montoGasto
      descripcion
      fecha
      turnoID
      laboratorioID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listGASTOS = /* GraphQL */ `
  query ListGASTOS(
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGASTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        montoGasto
        descripcion
        fecha
        turnoID
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGASTOS = /* GraphQL */ `
  query SyncGASTOS(
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGASTOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        montoGasto
        descripcion
        fecha
        turnoID
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const gASTOSByTurnoID = /* GraphQL */ `
  query GASTOSByTurnoID(
    $turnoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gASTOSByTurnoID(
      turnoID: $turnoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        montoGasto
        descripcion
        fecha
        turnoID
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const gASTOSByLaboratorioID = /* GraphQL */ `
  query GASTOSByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGASTOSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gASTOSByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        montoGasto
        descripcion
        fecha
        turnoID
        laboratorioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getREFERENCE = /* GraphQL */ `
  query GetREFERENCE($id: ID!) {
    getREFERENCE(id: $id) {
      id
      minReferencia
      maxReferencia
      nombre
      parametrostestID
      isValueNormal
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listREFERENCES = /* GraphQL */ `
  query ListREFERENCES(
    $filter: ModelREFERENCEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listREFERENCES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        minReferencia
        maxReferencia
        nombre
        parametrostestID
        isValueNormal
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncREFERENCES = /* GraphQL */ `
  query SyncREFERENCES(
    $filter: ModelREFERENCEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncREFERENCES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        minReferencia
        maxReferencia
        nombre
        parametrostestID
        isValueNormal
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const rEFERENCESByParametrostestID = /* GraphQL */ `
  query REFERENCESByParametrostestID(
    $parametrostestID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelREFERENCEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rEFERENCESByParametrostestID(
      parametrostestID: $parametrostestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        minReferencia
        maxReferencia
        nombre
        parametrostestID
        isValueNormal
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRESULTPARAMITEM = /* GraphQL */ `
  query GetRESULTPARAMITEM($id: ID!) {
    getRESULTPARAMITEM(id: $id) {
      id
      parametrostestID
      PARAMETROSTEST {
        id
        nombre
        unidad
        pruebaID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        category
        REFERENCES {
          items {
            id
            minReferencia
            maxReferencia
            nombre
            parametrostestID
            isValueNormal
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ordenpruebaitemID
      resultParam
      selectedReference
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listRESULTPARAMITEMS = /* GraphQL */ `
  query ListRESULTPARAMITEMS(
    $filter: ModelRESULTPARAMITEMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRESULTPARAMITEMS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        parametrostestID
        PARAMETROSTEST {
          id
          nombre
          unidad
          pruebaID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          category
          REFERENCES {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRESULTPARAMITEMS = /* GraphQL */ `
  query SyncRESULTPARAMITEMS(
    $filter: ModelRESULTPARAMITEMFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRESULTPARAMITEMS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        parametrostestID
        PARAMETROSTEST {
          id
          nombre
          unidad
          pruebaID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          category
          REFERENCES {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const rESULTPARAMITEMSByParametrostestID = /* GraphQL */ `
  query RESULTPARAMITEMSByParametrostestID(
    $parametrostestID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRESULTPARAMITEMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rESULTPARAMITEMSByParametrostestID(
      parametrostestID: $parametrostestID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        parametrostestID
        PARAMETROSTEST {
          id
          nombre
          unidad
          pruebaID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          category
          REFERENCES {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const rESULTPARAMITEMSByOrdenpruebaitemID = /* GraphQL */ `
  query RESULTPARAMITEMSByOrdenpruebaitemID(
    $ordenpruebaitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRESULTPARAMITEMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rESULTPARAMITEMSByOrdenpruebaitemID(
      ordenpruebaitemID: $ordenpruebaitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        parametrostestID
        PARAMETROSTEST {
          id
          nombre
          unidad
          pruebaID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          category
          REFERENCES {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getORDENPRUEBAITEM = /* GraphQL */ `
  query GetORDENPRUEBAITEM($id: ID!) {
    getORDENPRUEBAITEM(id: $id) {
      id
      pruebaID
      ordenID
      RESULTPARAMITEMS {
        items {
          id
          parametrostestID
          PARAMETROSTEST {
            id
            nombre
            unidad
            pruebaID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          ordenpruebaitemID
          resultParam
          selectedReference
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      resultInsight
      costo
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listORDENPRUEBAITEMS = /* GraphQL */ `
  query ListORDENPRUEBAITEMS(
    $filter: ModelORDENPRUEBAITEMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORDENPRUEBAITEMS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pruebaID
        ordenID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        resultInsight
        costo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncORDENPRUEBAITEMS = /* GraphQL */ `
  query SyncORDENPRUEBAITEMS(
    $filter: ModelORDENPRUEBAITEMFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncORDENPRUEBAITEMS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pruebaID
        ordenID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        resultInsight
        costo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const oRDENPRUEBAITEMSByPruebaID = /* GraphQL */ `
  query ORDENPRUEBAITEMSByPruebaID(
    $pruebaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENPRUEBAITEMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENPRUEBAITEMSByPruebaID(
      pruebaID: $pruebaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pruebaID
        ordenID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        resultInsight
        costo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const oRDENPRUEBAITEMSByOrdenID = /* GraphQL */ `
  query ORDENPRUEBAITEMSByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENPRUEBAITEMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENPRUEBAITEMSByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pruebaID
        ordenID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        resultInsight
        costo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getREPRESENTANTE = /* GraphQL */ `
  query GetREPRESENTANTE($id: ID!) {
    getREPRESENTANTE(id: $id) {
      id
      nombres
      userName
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      groups
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listREPRESENTANTES = /* GraphQL */ `
  query ListREPRESENTANTES(
    $filter: ModelREPRESENTANTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listREPRESENTANTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncREPRESENTANTES = /* GraphQL */ `
  query SyncREPRESENTANTES(
    $filter: ModelREPRESENTANTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncREPRESENTANTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const rEPRESENTANTESByLaboratorioID = /* GraphQL */ `
  query REPRESENTANTESByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelREPRESENTANTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rEPRESENTANTESByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGERENTE = /* GraphQL */ `
  query GetGERENTE($id: ID!) {
    getGERENTE(id: $id) {
      id
      nombres
      userName
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      email
      phoneNumber
      confirmed
      blocked
      createdBy
      groups
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listGERENTES = /* GraphQL */ `
  query ListGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGERENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncGERENTES = /* GraphQL */ `
  query SyncGERENTES(
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGERENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const gERENTESByLaboratorioID = /* GraphQL */ `
  query GERENTESByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGERENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gERENTESByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        userName
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        email
        phoneNumber
        confirmed
        blocked
        createdBy
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getLABORATORIO = /* GraphQL */ `
  query GetLABORATORIO($id: ID!) {
    getLABORATORIO(id: $id) {
      id
      nombre
      createdBy
      REPRESENTANTES {
        items {
          id
          nombres
          userName
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          groups
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      GERENTES {
        items {
          id
          nombres
          userName
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          email
          phoneNumber
          confirmed
          blocked
          createdBy
          groups
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      DOCTORS {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          especialidad
          calle
          numeroExterior
          numeroInterior
          colonia
          cp
          municipio
          estado
          pais
          email
          whatsapp
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          createdBy
          groups
          userName
          confirmed
          blocked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PACIENTES {
        items {
          id
          nombres
          apellidoPaterno
          apellidoMaterno
          sexo
          fechaNacimiento
          edad
          direccion
          colonia
          cp
          municipio
          estado
          pais
          email
          whatsapp
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          createdBy
          groups
          userName
          confirmed
          blocked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      PRUEBAS {
        items {
          id
          nombre
          categoria
          precio
          precioDescuento
          descripcionCorta
          tiempoEntrega
          indicaciones
          tipoMuestra
          tipoContenedor
          PARAMETROSTESTS {
            nextToken
            startedAt
            __typename
          }
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          groups
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
            __typename
          }
          grupoPersona
          PAQUETESPRUEBAS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ORDENS {
        items {
          id
          type
          fechaOrden
          horaOrden
          formatoPago
          envioPaciente
          totalPruebas
          sucursalMuestra
          tratamiento
          capturaOrden
          diabetico
          hipertenso
          padecimientos
          medicamentos
          diagnostico
          envioDoctor
          altura
          peso
          indiceMasaCorporal
          temperatura
          costoTotal
          saturacion
          frecuenciaCardiaca
          pacienteID
          datePublishingResult
          hourPublishingResult
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
            __typename
          }
          doctorID
          status
          groups
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          pdfReceipt
          urlReceipt
          pdfResul
          urlResult
          presion
          turnoID
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Cajas {
        items {
          id
          nombre
          laboratorioID
          Turnos {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      GASTOS {
        items {
          id
          montoGasto
          descripcion
          fecha
          turnoID
          laboratorioID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      direction
      cp
      rfc
      contactPhone
      codSerial
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          laboratorioID
          ordenID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      CONFIGURACIONDOCUMENTOS {
        items {
          id
          tipoDocumento
          serieActual
          numeroSecuencialActual
          laboratorioID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listLABORATORIOS = /* GraphQL */ `
  query ListLABORATORIOS(
    $filter: ModelLABORATORIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLABORATORIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncLABORATORIOS = /* GraphQL */ `
  query SyncLABORATORIOS(
    $filter: ModelLABORATORIOFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLABORATORIOS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPARAMETROSTEST = /* GraphQL */ `
  query GetPARAMETROSTEST($id: ID!) {
    getPARAMETROSTEST(id: $id) {
      id
      nombre
      unidad
      pruebaID
      RESULTPARAMITEMS {
        items {
          id
          parametrostestID
          PARAMETROSTEST {
            id
            nombre
            unidad
            pruebaID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          ordenpruebaitemID
          resultParam
          selectedReference
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      category
      REFERENCES {
        items {
          id
          minReferencia
          maxReferencia
          nombre
          parametrostestID
          isValueNormal
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPARAMETROSTESTS = /* GraphQL */ `
  query ListPARAMETROSTESTS(
    $filter: ModelPARAMETROSTESTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPARAMETROSTESTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        unidad
        pruebaID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        category
        REFERENCES {
          items {
            id
            minReferencia
            maxReferencia
            nombre
            parametrostestID
            isValueNormal
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPARAMETROSTESTS = /* GraphQL */ `
  query SyncPARAMETROSTESTS(
    $filter: ModelPARAMETROSTESTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPARAMETROSTESTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        unidad
        pruebaID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        category
        REFERENCES {
          items {
            id
            minReferencia
            maxReferencia
            nombre
            parametrostestID
            isValueNormal
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pARAMETROSTESTSByPruebaID = /* GraphQL */ `
  query PARAMETROSTESTSByPruebaID(
    $pruebaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPARAMETROSTESTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pARAMETROSTESTSByPruebaID(
      pruebaID: $pruebaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        unidad
        pruebaID
        RESULTPARAMITEMS {
          items {
            id
            parametrostestID
            ordenpruebaitemID
            resultParam
            selectedReference
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        category
        REFERENCES {
          items {
            id
            minReferencia
            maxReferencia
            nombre
            parametrostestID
            isValueNormal
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEncuestaServicio = /* GraphQL */ `
  query GetEncuestaServicio($id: ID!) {
    getEncuestaServicio(id: $id) {
      id
      encuesta
      usuario
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listEncuestaServicios = /* GraphQL */ `
  query ListEncuestaServicios(
    $filter: ModelEncuestaServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEncuestaServicios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        encuesta
        usuario
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEncuestaServicios = /* GraphQL */ `
  query SyncEncuestaServicios(
    $filter: ModelEncuestaServicioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEncuestaServicios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        encuesta
        usuario
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getORDEN = /* GraphQL */ `
  query GetORDEN($id: ID!) {
    getORDEN(id: $id) {
      id
      type
      fechaOrden
      horaOrden
      formatoPago
      envioPaciente
      totalPruebas
      sucursalMuestra
      tratamiento
      capturaOrden
      diabetico
      hipertenso
      padecimientos
      medicamentos
      diagnostico
      envioDoctor
      altura
      peso
      indiceMasaCorporal
      temperatura
      costoTotal
      saturacion
      frecuenciaCardiaca
      pacienteID
      datePublishingResult
      hourPublishingResult
      ORDENPRUEBAITEMS {
        items {
          id
          pruebaID
          ordenID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          resultInsight
          costo
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      doctorID
      status
      groups
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      pdfReceipt
      urlReceipt
      pdfResul
      urlResult
      presion
      turnoID
      DOCUMENTOS {
        items {
          id
          tipoDocumento
          serie
          numeroSecuencial
          laboratorioID
          ordenID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      isPaquete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listORDENS = /* GraphQL */ `
  query ListORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORDENS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        fechaOrden
        horaOrden
        formatoPago
        envioPaciente
        totalPruebas
        sucursalMuestra
        tratamiento
        capturaOrden
        diabetico
        hipertenso
        padecimientos
        medicamentos
        diagnostico
        envioDoctor
        altura
        peso
        indiceMasaCorporal
        temperatura
        costoTotal
        saturacion
        frecuenciaCardiaca
        pacienteID
        datePublishingResult
        hourPublishingResult
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        doctorID
        status
        groups
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        turnoID
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        isPaquete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncORDENS = /* GraphQL */ `
  query SyncORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncORDENS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        fechaOrden
        horaOrden
        formatoPago
        envioPaciente
        totalPruebas
        sucursalMuestra
        tratamiento
        capturaOrden
        diabetico
        hipertenso
        padecimientos
        medicamentos
        diagnostico
        envioDoctor
        altura
        peso
        indiceMasaCorporal
        temperatura
        costoTotal
        saturacion
        frecuenciaCardiaca
        pacienteID
        datePublishingResult
        hourPublishingResult
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        doctorID
        status
        groups
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        turnoID
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        isPaquete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const oRDENSByPacienteID = /* GraphQL */ `
  query ORDENSByPacienteID(
    $pacienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByPacienteID(
      pacienteID: $pacienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        fechaOrden
        horaOrden
        formatoPago
        envioPaciente
        totalPruebas
        sucursalMuestra
        tratamiento
        capturaOrden
        diabetico
        hipertenso
        padecimientos
        medicamentos
        diagnostico
        envioDoctor
        altura
        peso
        indiceMasaCorporal
        temperatura
        costoTotal
        saturacion
        frecuenciaCardiaca
        pacienteID
        datePublishingResult
        hourPublishingResult
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        doctorID
        status
        groups
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        turnoID
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        isPaquete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const oRDENSByDoctorID = /* GraphQL */ `
  query ORDENSByDoctorID(
    $doctorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByDoctorID(
      doctorID: $doctorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        fechaOrden
        horaOrden
        formatoPago
        envioPaciente
        totalPruebas
        sucursalMuestra
        tratamiento
        capturaOrden
        diabetico
        hipertenso
        padecimientos
        medicamentos
        diagnostico
        envioDoctor
        altura
        peso
        indiceMasaCorporal
        temperatura
        costoTotal
        saturacion
        frecuenciaCardiaca
        pacienteID
        datePublishingResult
        hourPublishingResult
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        doctorID
        status
        groups
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        turnoID
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        isPaquete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const oRDENSByLaboratorioID = /* GraphQL */ `
  query ORDENSByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        fechaOrden
        horaOrden
        formatoPago
        envioPaciente
        totalPruebas
        sucursalMuestra
        tratamiento
        capturaOrden
        diabetico
        hipertenso
        padecimientos
        medicamentos
        diagnostico
        envioDoctor
        altura
        peso
        indiceMasaCorporal
        temperatura
        costoTotal
        saturacion
        frecuenciaCardiaca
        pacienteID
        datePublishingResult
        hourPublishingResult
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        doctorID
        status
        groups
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        turnoID
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        isPaquete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const oRDENSByTurnoID = /* GraphQL */ `
  query ORDENSByTurnoID(
    $turnoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByTurnoID(
      turnoID: $turnoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        fechaOrden
        horaOrden
        formatoPago
        envioPaciente
        totalPruebas
        sucursalMuestra
        tratamiento
        capturaOrden
        diabetico
        hipertenso
        padecimientos
        medicamentos
        diagnostico
        envioDoctor
        altura
        peso
        indiceMasaCorporal
        temperatura
        costoTotal
        saturacion
        frecuenciaCardiaca
        pacienteID
        datePublishingResult
        hourPublishingResult
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        doctorID
        status
        groups
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        turnoID
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        isPaquete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPRUEBA = /* GraphQL */ `
  query GetPRUEBA($id: ID!) {
    getPRUEBA(id: $id) {
      id
      nombre
      categoria
      precio
      precioDescuento
      descripcionCorta
      tiempoEntrega
      indicaciones
      tipoMuestra
      tipoContenedor
      PARAMETROSTESTS {
        items {
          id
          nombre
          unidad
          pruebaID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          category
          REFERENCES {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      groups
      ORDENPRUEBAITEMS {
        items {
          id
          pruebaID
          ordenID
          RESULTPARAMITEMS {
            nextToken
            startedAt
            __typename
          }
          resultInsight
          costo
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      grupoPersona
      PAQUETESPRUEBAS {
        items {
          id
          paquetesID
          pruebaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPRUEBAS = /* GraphQL */ `
  query ListPRUEBAS(
    $filter: ModelPRUEBAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPRUEBAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        PARAMETROSTESTS {
          items {
            id
            nombre
            unidad
            pruebaID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groups
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        grupoPersona
        PAQUETESPRUEBAS {
          items {
            id
            paquetesID
            pruebaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPRUEBAS = /* GraphQL */ `
  query SyncPRUEBAS(
    $filter: ModelPRUEBAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPRUEBAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        PARAMETROSTESTS {
          items {
            id
            nombre
            unidad
            pruebaID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groups
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        grupoPersona
        PAQUETESPRUEBAS {
          items {
            id
            paquetesID
            pruebaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pRUEBASByLaboratorioID = /* GraphQL */ `
  query PRUEBASByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPRUEBAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pRUEBASByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        PARAMETROSTESTS {
          items {
            id
            nombre
            unidad
            pruebaID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        groups
        ORDENPRUEBAITEMS {
          items {
            id
            pruebaID
            ordenID
            resultInsight
            costo
            status
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        grupoPersona
        PAQUETESPRUEBAS {
          items {
            id
            paquetesID
            pruebaID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDOCTOR = /* GraphQL */ `
  query GetDOCTOR($id: ID!) {
    getDOCTOR(id: $id) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      especialidad
      calle
      numeroExterior
      numeroInterior
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ORDENS {
        items {
          id
          type
          fechaOrden
          horaOrden
          formatoPago
          envioPaciente
          totalPruebas
          sucursalMuestra
          tratamiento
          capturaOrden
          diabetico
          hipertenso
          padecimientos
          medicamentos
          diagnostico
          envioDoctor
          altura
          peso
          indiceMasaCorporal
          temperatura
          costoTotal
          saturacion
          frecuenciaCardiaca
          pacienteID
          datePublishingResult
          hourPublishingResult
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
            __typename
          }
          doctorID
          status
          groups
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          pdfReceipt
          urlReceipt
          pdfResul
          urlResult
          presion
          turnoID
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdBy
      groups
      userName
      confirmed
      blocked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listDOCTORS = /* GraphQL */ `
  query ListDOCTORS(
    $filter: ModelDOCTORFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDOCTORS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        especialidad
        calle
        numeroExterior
        numeroInterior
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdBy
        groups
        userName
        confirmed
        blocked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDOCTORS = /* GraphQL */ `
  query SyncDOCTORS(
    $filter: ModelDOCTORFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDOCTORS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        especialidad
        calle
        numeroExterior
        numeroInterior
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdBy
        groups
        userName
        confirmed
        blocked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const dOCTORSByLaboratorioID = /* GraphQL */ `
  query DOCTORSByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDOCTORFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dOCTORSByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        especialidad
        calle
        numeroExterior
        numeroInterior
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdBy
        groups
        userName
        confirmed
        blocked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPACIENTE = /* GraphQL */ `
  query GetPACIENTE($id: ID!) {
    getPACIENTE(id: $id) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      sexo
      fechaNacimiento
      edad
      direccion
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      ORDENS {
        items {
          id
          type
          fechaOrden
          horaOrden
          formatoPago
          envioPaciente
          totalPruebas
          sucursalMuestra
          tratamiento
          capturaOrden
          diabetico
          hipertenso
          padecimientos
          medicamentos
          diagnostico
          envioDoctor
          altura
          peso
          indiceMasaCorporal
          temperatura
          costoTotal
          saturacion
          frecuenciaCardiaca
          pacienteID
          datePublishingResult
          hourPublishingResult
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
            __typename
          }
          doctorID
          status
          groups
          laboratorioID
          LABORATORIO {
            id
            nombre
            createdBy
            direction
            cp
            rfc
            contactPhone
            codSerial
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          pdfReceipt
          urlReceipt
          pdfResul
          urlResult
          presion
          turnoID
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        REPRESENTANTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GERENTES {
          items {
            id
            nombres
            userName
            laboratorioID
            email
            phoneNumber
            confirmed
            blocked
            createdBy
            groups
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        DOCTORS {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            especialidad
            calle
            numeroExterior
            numeroInterior
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PACIENTES {
          items {
            id
            nombres
            apellidoPaterno
            apellidoMaterno
            sexo
            fechaNacimiento
            edad
            direccion
            colonia
            cp
            municipio
            estado
            pais
            email
            whatsapp
            laboratorioID
            createdBy
            groups
            userName
            confirmed
            blocked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        PRUEBAS {
          items {
            id
            nombre
            categoria
            precio
            precioDescuento
            descripcionCorta
            tiempoEntrega
            indicaciones
            tipoMuestra
            tipoContenedor
            laboratorioID
            groups
            grupoPersona
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Cajas {
          items {
            id
            nombre
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        GASTOS {
          items {
            id
            montoGasto
            descripcion
            fecha
            turnoID
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        direction
        cp
        rfc
        contactPhone
        codSerial
        DOCUMENTOS {
          items {
            id
            tipoDocumento
            serie
            numeroSecuencial
            laboratorioID
            ordenID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        CONFIGURACIONDOCUMENTOS {
          items {
            id
            tipoDocumento
            serieActual
            numeroSecuencialActual
            laboratorioID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdBy
      groups
      userName
      confirmed
      blocked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listPACIENTES = /* GraphQL */ `
  query ListPACIENTES(
    $filter: ModelPACIENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPACIENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        sexo
        fechaNacimiento
        edad
        direccion
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdBy
        groups
        userName
        confirmed
        blocked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPACIENTES = /* GraphQL */ `
  query SyncPACIENTES(
    $filter: ModelPACIENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPACIENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        sexo
        fechaNacimiento
        edad
        direccion
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdBy
        groups
        userName
        confirmed
        blocked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const pACIENTESByLaboratorioID = /* GraphQL */ `
  query PACIENTESByLaboratorioID(
    $laboratorioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPACIENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pACIENTESByLaboratorioID(
      laboratorioID: $laboratorioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        sexo
        fechaNacimiento
        edad
        direccion
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        ORDENS {
          items {
            id
            type
            fechaOrden
            horaOrden
            formatoPago
            envioPaciente
            totalPruebas
            sucursalMuestra
            tratamiento
            capturaOrden
            diabetico
            hipertenso
            padecimientos
            medicamentos
            diagnostico
            envioDoctor
            altura
            peso
            indiceMasaCorporal
            temperatura
            costoTotal
            saturacion
            frecuenciaCardiaca
            pacienteID
            datePublishingResult
            hourPublishingResult
            doctorID
            status
            groups
            laboratorioID
            pdfReceipt
            urlReceipt
            pdfResul
            urlResult
            presion
            turnoID
            isPaquete
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        laboratorioID
        LABORATORIO {
          id
          nombre
          createdBy
          REPRESENTANTES {
            nextToken
            startedAt
            __typename
          }
          GERENTES {
            nextToken
            startedAt
            __typename
          }
          DOCTORS {
            nextToken
            startedAt
            __typename
          }
          PACIENTES {
            nextToken
            startedAt
            __typename
          }
          PRUEBAS {
            nextToken
            startedAt
            __typename
          }
          ORDENS {
            nextToken
            startedAt
            __typename
          }
          Cajas {
            nextToken
            startedAt
            __typename
          }
          GASTOS {
            nextToken
            startedAt
            __typename
          }
          direction
          cp
          rfc
          contactPhone
          codSerial
          DOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          CONFIGURACIONDOCUMENTOS {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdBy
        groups
        userName
        confirmed
        blocked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBLOG = /* GraphQL */ `
  query GetBLOG($id: ID!) {
    getBLOG(id: $id) {
      id
      titulo
      subtitulo
      texto1
      texto2
      texto3
      imagen1
      imagen2
      imagen3
      fecha
      url1
      url2
      url3
      autor
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listBLOGS = /* GraphQL */ `
  query ListBLOGS(
    $filter: ModelBLOGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBLOGS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        subtitulo
        texto1
        texto2
        texto3
        imagen1
        imagen2
        imagen3
        fecha
        url1
        url2
        url3
        autor
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBLOGS = /* GraphQL */ `
  query SyncBLOGS(
    $filter: ModelBLOGFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBLOGS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        titulo
        subtitulo
        texto1
        texto2
        texto3
        imagen1
        imagen2
        imagen3
        fecha
        url1
        url2
        url3
        autor
        slug
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
