/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateREFERENCE = /* GraphQL */ `
  subscription OnCreateREFERENCE(
    $filter: ModelSubscriptionREFERENCEFilterInput
  ) {
    onCreateREFERENCE(filter: $filter) {
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
export const onUpdateREFERENCE = /* GraphQL */ `
  subscription OnUpdateREFERENCE(
    $filter: ModelSubscriptionREFERENCEFilterInput
  ) {
    onUpdateREFERENCE(filter: $filter) {
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
export const onDeleteREFERENCE = /* GraphQL */ `
  subscription OnDeleteREFERENCE(
    $filter: ModelSubscriptionREFERENCEFilterInput
  ) {
    onDeleteREFERENCE(filter: $filter) {
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
export const onCreateRESULTPARAMITEM = /* GraphQL */ `
  subscription OnCreateRESULTPARAMITEM(
    $filter: ModelSubscriptionRESULTPARAMITEMFilterInput
  ) {
    onCreateRESULTPARAMITEM(filter: $filter) {
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
export const onUpdateRESULTPARAMITEM = /* GraphQL */ `
  subscription OnUpdateRESULTPARAMITEM(
    $filter: ModelSubscriptionRESULTPARAMITEMFilterInput
  ) {
    onUpdateRESULTPARAMITEM(filter: $filter) {
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
export const onDeleteRESULTPARAMITEM = /* GraphQL */ `
  subscription OnDeleteRESULTPARAMITEM(
    $filter: ModelSubscriptionRESULTPARAMITEMFilterInput
  ) {
    onDeleteRESULTPARAMITEM(filter: $filter) {
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
export const onCreateORDENPRUEBAITEM = /* GraphQL */ `
  subscription OnCreateORDENPRUEBAITEM(
    $filter: ModelSubscriptionORDENPRUEBAITEMFilterInput
  ) {
    onCreateORDENPRUEBAITEM(filter: $filter) {
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
export const onUpdateORDENPRUEBAITEM = /* GraphQL */ `
  subscription OnUpdateORDENPRUEBAITEM(
    $filter: ModelSubscriptionORDENPRUEBAITEMFilterInput
  ) {
    onUpdateORDENPRUEBAITEM(filter: $filter) {
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
export const onDeleteORDENPRUEBAITEM = /* GraphQL */ `
  subscription OnDeleteORDENPRUEBAITEM(
    $filter: ModelSubscriptionORDENPRUEBAITEMFilterInput
  ) {
    onDeleteORDENPRUEBAITEM(filter: $filter) {
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
export const onCreateREPRESENTANTE = /* GraphQL */ `
  subscription OnCreateREPRESENTANTE(
    $filter: ModelSubscriptionREPRESENTANTEFilterInput
  ) {
    onCreateREPRESENTANTE(filter: $filter) {
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
export const onUpdateREPRESENTANTE = /* GraphQL */ `
  subscription OnUpdateREPRESENTANTE(
    $filter: ModelSubscriptionREPRESENTANTEFilterInput
  ) {
    onUpdateREPRESENTANTE(filter: $filter) {
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
export const onDeleteREPRESENTANTE = /* GraphQL */ `
  subscription OnDeleteREPRESENTANTE(
    $filter: ModelSubscriptionREPRESENTANTEFilterInput
  ) {
    onDeleteREPRESENTANTE(filter: $filter) {
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
export const onCreateGERENTE = /* GraphQL */ `
  subscription OnCreateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onCreateGERENTE(filter: $filter) {
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
export const onUpdateGERENTE = /* GraphQL */ `
  subscription OnUpdateGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onUpdateGERENTE(filter: $filter) {
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
export const onDeleteGERENTE = /* GraphQL */ `
  subscription OnDeleteGERENTE($filter: ModelSubscriptionGERENTEFilterInput) {
    onDeleteGERENTE(filter: $filter) {
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
export const onCreateLABORATORIO = /* GraphQL */ `
  subscription OnCreateLABORATORIO(
    $filter: ModelSubscriptionLABORATORIOFilterInput
  ) {
    onCreateLABORATORIO(filter: $filter) {
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
export const onUpdateLABORATORIO = /* GraphQL */ `
  subscription OnUpdateLABORATORIO(
    $filter: ModelSubscriptionLABORATORIOFilterInput
  ) {
    onUpdateLABORATORIO(filter: $filter) {
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
export const onDeleteLABORATORIO = /* GraphQL */ `
  subscription OnDeleteLABORATORIO(
    $filter: ModelSubscriptionLABORATORIOFilterInput
  ) {
    onDeleteLABORATORIO(filter: $filter) {
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
export const onCreatePARAMETROSTEST = /* GraphQL */ `
  subscription OnCreatePARAMETROSTEST(
    $filter: ModelSubscriptionPARAMETROSTESTFilterInput
  ) {
    onCreatePARAMETROSTEST(filter: $filter) {
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
export const onUpdatePARAMETROSTEST = /* GraphQL */ `
  subscription OnUpdatePARAMETROSTEST(
    $filter: ModelSubscriptionPARAMETROSTESTFilterInput
  ) {
    onUpdatePARAMETROSTEST(filter: $filter) {
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
export const onDeletePARAMETROSTEST = /* GraphQL */ `
  subscription OnDeletePARAMETROSTEST(
    $filter: ModelSubscriptionPARAMETROSTESTFilterInput
  ) {
    onDeletePARAMETROSTEST(filter: $filter) {
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
export const onCreateEncuestaServicio = /* GraphQL */ `
  subscription OnCreateEncuestaServicio(
    $filter: ModelSubscriptionEncuestaServicioFilterInput
  ) {
    onCreateEncuestaServicio(filter: $filter) {
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
export const onUpdateEncuestaServicio = /* GraphQL */ `
  subscription OnUpdateEncuestaServicio(
    $filter: ModelSubscriptionEncuestaServicioFilterInput
  ) {
    onUpdateEncuestaServicio(filter: $filter) {
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
export const onDeleteEncuestaServicio = /* GraphQL */ `
  subscription OnDeleteEncuestaServicio(
    $filter: ModelSubscriptionEncuestaServicioFilterInput
  ) {
    onDeleteEncuestaServicio(filter: $filter) {
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
export const onCreateORDEN = /* GraphQL */ `
  subscription OnCreateORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onCreateORDEN(filter: $filter) {
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
export const onUpdateORDEN = /* GraphQL */ `
  subscription OnUpdateORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onUpdateORDEN(filter: $filter) {
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
export const onDeleteORDEN = /* GraphQL */ `
  subscription OnDeleteORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onDeleteORDEN(filter: $filter) {
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
export const onCreatePRUEBA = /* GraphQL */ `
  subscription OnCreatePRUEBA($filter: ModelSubscriptionPRUEBAFilterInput) {
    onCreatePRUEBA(filter: $filter) {
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
export const onUpdatePRUEBA = /* GraphQL */ `
  subscription OnUpdatePRUEBA($filter: ModelSubscriptionPRUEBAFilterInput) {
    onUpdatePRUEBA(filter: $filter) {
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
export const onDeletePRUEBA = /* GraphQL */ `
  subscription OnDeletePRUEBA($filter: ModelSubscriptionPRUEBAFilterInput) {
    onDeletePRUEBA(filter: $filter) {
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
export const onCreateDOCTOR = /* GraphQL */ `
  subscription OnCreateDOCTOR($filter: ModelSubscriptionDOCTORFilterInput) {
    onCreateDOCTOR(filter: $filter) {
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
export const onUpdateDOCTOR = /* GraphQL */ `
  subscription OnUpdateDOCTOR($filter: ModelSubscriptionDOCTORFilterInput) {
    onUpdateDOCTOR(filter: $filter) {
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
export const onDeleteDOCTOR = /* GraphQL */ `
  subscription OnDeleteDOCTOR($filter: ModelSubscriptionDOCTORFilterInput) {
    onDeleteDOCTOR(filter: $filter) {
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
export const onCreatePACIENTE = /* GraphQL */ `
  subscription OnCreatePACIENTE($filter: ModelSubscriptionPACIENTEFilterInput) {
    onCreatePACIENTE(filter: $filter) {
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
export const onUpdatePACIENTE = /* GraphQL */ `
  subscription OnUpdatePACIENTE($filter: ModelSubscriptionPACIENTEFilterInput) {
    onUpdatePACIENTE(filter: $filter) {
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
export const onDeletePACIENTE = /* GraphQL */ `
  subscription OnDeletePACIENTE($filter: ModelSubscriptionPACIENTEFilterInput) {
    onDeletePACIENTE(filter: $filter) {
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
export const onCreateBLOG = /* GraphQL */ `
  subscription OnCreateBLOG($filter: ModelSubscriptionBLOGFilterInput) {
    onCreateBLOG(filter: $filter) {
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
export const onUpdateBLOG = /* GraphQL */ `
  subscription OnUpdateBLOG($filter: ModelSubscriptionBLOGFilterInput) {
    onUpdateBLOG(filter: $filter) {
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
export const onDeleteBLOG = /* GraphQL */ `
  subscription OnDeleteBLOG($filter: ModelSubscriptionBLOGFilterInput) {
    onDeleteBLOG(filter: $filter) {
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
