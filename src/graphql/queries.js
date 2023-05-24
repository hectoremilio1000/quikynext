/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getREFERENCE = /* GraphQL */ `
  query GetREFERENCE($id: ID!) {
    getREFERENCE(id: $id) {
      id
      minReferencia
      maxReferencia
      nombre
      parametrostestID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ordenpruebaitemID
      resultParam
      selectedReference
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        ordenpruebaitemID
        resultParam
        selectedReference
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      resultInsight
      costo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        resultInsight
        costo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        resultInsight
        costo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        resultInsight
        costo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        resultInsight
        costo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      GERENTES {
        nextToken
        startedAt
      }
      DOCTORS {
        nextToken
        startedAt
      }
      PACIENTES {
        nextToken
        startedAt
      }
      PRUEBAS {
        nextToken
        startedAt
      }
      ORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      category
      REFERENCES {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      doctorID
      status
      groups
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pdfReceipt
      urlReceipt
      pdfResul
      urlResult
      presion
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        doctorID
        status
        groups
        laboratorioID
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        doctorID
        status
        groups
        laboratorioID
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        doctorID
        status
        groups
        laboratorioID
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        doctorID
        status
        groups
        laboratorioID
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        doctorID
        status
        groups
        laboratorioID
        pdfReceipt
        urlReceipt
        pdfResul
        urlResult
        presion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      groups
      ORDENPRUEBAITEMS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        laboratorioID
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        laboratorioID
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        laboratorioID
        groups
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ORDENS {
        nextToken
        startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      laboratorioID
      LABORATORIO {
        id
        nombre
        createdBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
