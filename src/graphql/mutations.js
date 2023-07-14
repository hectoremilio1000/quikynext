/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  mutation CreateCONFIGURACIONDOCUMENTO(
    $input: CreateCONFIGURACIONDOCUMENTOInput!
    $condition: ModelCONFIGURACIONDOCUMENTOConditionInput
  ) {
    createCONFIGURACIONDOCUMENTO(input: $input, condition: $condition) {
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
export const updateCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  mutation UpdateCONFIGURACIONDOCUMENTO(
    $input: UpdateCONFIGURACIONDOCUMENTOInput!
    $condition: ModelCONFIGURACIONDOCUMENTOConditionInput
  ) {
    updateCONFIGURACIONDOCUMENTO(input: $input, condition: $condition) {
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
export const deleteCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  mutation DeleteCONFIGURACIONDOCUMENTO(
    $input: DeleteCONFIGURACIONDOCUMENTOInput!
    $condition: ModelCONFIGURACIONDOCUMENTOConditionInput
  ) {
    deleteCONFIGURACIONDOCUMENTO(input: $input, condition: $condition) {
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
export const createDOCUMENTOS = /* GraphQL */ `
  mutation CreateDOCUMENTOS(
    $input: CreateDOCUMENTOSInput!
    $condition: ModelDOCUMENTOSConditionInput
  ) {
    createDOCUMENTOS(input: $input, condition: $condition) {
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
export const updateDOCUMENTOS = /* GraphQL */ `
  mutation UpdateDOCUMENTOS(
    $input: UpdateDOCUMENTOSInput!
    $condition: ModelDOCUMENTOSConditionInput
  ) {
    updateDOCUMENTOS(input: $input, condition: $condition) {
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
export const deleteDOCUMENTOS = /* GraphQL */ `
  mutation DeleteDOCUMENTOS(
    $input: DeleteDOCUMENTOSInput!
    $condition: ModelDOCUMENTOSConditionInput
  ) {
    deleteDOCUMENTOS(input: $input, condition: $condition) {
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
export const createCaja = /* GraphQL */ `
  mutation CreateCaja(
    $input: CreateCajaInput!
    $condition: ModelCajaConditionInput
  ) {
    createCaja(input: $input, condition: $condition) {
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
export const updateCaja = /* GraphQL */ `
  mutation UpdateCaja(
    $input: UpdateCajaInput!
    $condition: ModelCajaConditionInput
  ) {
    updateCaja(input: $input, condition: $condition) {
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
export const deleteCaja = /* GraphQL */ `
  mutation DeleteCaja(
    $input: DeleteCajaInput!
    $condition: ModelCajaConditionInput
  ) {
    deleteCaja(input: $input, condition: $condition) {
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
export const createTurno = /* GraphQL */ `
  mutation CreateTurno(
    $input: CreateTurnoInput!
    $condition: ModelTurnoConditionInput
  ) {
    createTurno(input: $input, condition: $condition) {
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
export const updateTurno = /* GraphQL */ `
  mutation UpdateTurno(
    $input: UpdateTurnoInput!
    $condition: ModelTurnoConditionInput
  ) {
    updateTurno(input: $input, condition: $condition) {
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
export const deleteTurno = /* GraphQL */ `
  mutation DeleteTurno(
    $input: DeleteTurnoInput!
    $condition: ModelTurnoConditionInput
  ) {
    deleteTurno(input: $input, condition: $condition) {
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
export const createGASTOS = /* GraphQL */ `
  mutation CreateGASTOS(
    $input: CreateGASTOSInput!
    $condition: ModelGASTOSConditionInput
  ) {
    createGASTOS(input: $input, condition: $condition) {
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
export const updateGASTOS = /* GraphQL */ `
  mutation UpdateGASTOS(
    $input: UpdateGASTOSInput!
    $condition: ModelGASTOSConditionInput
  ) {
    updateGASTOS(input: $input, condition: $condition) {
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
export const deleteGASTOS = /* GraphQL */ `
  mutation DeleteGASTOS(
    $input: DeleteGASTOSInput!
    $condition: ModelGASTOSConditionInput
  ) {
    deleteGASTOS(input: $input, condition: $condition) {
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
export const createREFERENCE = /* GraphQL */ `
  mutation CreateREFERENCE(
    $input: CreateREFERENCEInput!
    $condition: ModelREFERENCEConditionInput
  ) {
    createREFERENCE(input: $input, condition: $condition) {
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
export const updateREFERENCE = /* GraphQL */ `
  mutation UpdateREFERENCE(
    $input: UpdateREFERENCEInput!
    $condition: ModelREFERENCEConditionInput
  ) {
    updateREFERENCE(input: $input, condition: $condition) {
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
export const deleteREFERENCE = /* GraphQL */ `
  mutation DeleteREFERENCE(
    $input: DeleteREFERENCEInput!
    $condition: ModelREFERENCEConditionInput
  ) {
    deleteREFERENCE(input: $input, condition: $condition) {
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
export const createRESULTPARAMITEM = /* GraphQL */ `
  mutation CreateRESULTPARAMITEM(
    $input: CreateRESULTPARAMITEMInput!
    $condition: ModelRESULTPARAMITEMConditionInput
  ) {
    createRESULTPARAMITEM(input: $input, condition: $condition) {
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
export const updateRESULTPARAMITEM = /* GraphQL */ `
  mutation UpdateRESULTPARAMITEM(
    $input: UpdateRESULTPARAMITEMInput!
    $condition: ModelRESULTPARAMITEMConditionInput
  ) {
    updateRESULTPARAMITEM(input: $input, condition: $condition) {
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
export const deleteRESULTPARAMITEM = /* GraphQL */ `
  mutation DeleteRESULTPARAMITEM(
    $input: DeleteRESULTPARAMITEMInput!
    $condition: ModelRESULTPARAMITEMConditionInput
  ) {
    deleteRESULTPARAMITEM(input: $input, condition: $condition) {
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
export const createORDENPRUEBAITEM = /* GraphQL */ `
  mutation CreateORDENPRUEBAITEM(
    $input: CreateORDENPRUEBAITEMInput!
    $condition: ModelORDENPRUEBAITEMConditionInput
  ) {
    createORDENPRUEBAITEM(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateORDENPRUEBAITEM = /* GraphQL */ `
  mutation UpdateORDENPRUEBAITEM(
    $input: UpdateORDENPRUEBAITEMInput!
    $condition: ModelORDENPRUEBAITEMConditionInput
  ) {
    updateORDENPRUEBAITEM(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteORDENPRUEBAITEM = /* GraphQL */ `
  mutation DeleteORDENPRUEBAITEM(
    $input: DeleteORDENPRUEBAITEMInput!
    $condition: ModelORDENPRUEBAITEMConditionInput
  ) {
    deleteORDENPRUEBAITEM(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createREPRESENTANTE = /* GraphQL */ `
  mutation CreateREPRESENTANTE(
    $input: CreateREPRESENTANTEInput!
    $condition: ModelREPRESENTANTEConditionInput
  ) {
    createREPRESENTANTE(input: $input, condition: $condition) {
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
export const updateREPRESENTANTE = /* GraphQL */ `
  mutation UpdateREPRESENTANTE(
    $input: UpdateREPRESENTANTEInput!
    $condition: ModelREPRESENTANTEConditionInput
  ) {
    updateREPRESENTANTE(input: $input, condition: $condition) {
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
export const deleteREPRESENTANTE = /* GraphQL */ `
  mutation DeleteREPRESENTANTE(
    $input: DeleteREPRESENTANTEInput!
    $condition: ModelREPRESENTANTEConditionInput
  ) {
    deleteREPRESENTANTE(input: $input, condition: $condition) {
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
export const createGERENTE = /* GraphQL */ `
  mutation CreateGERENTE(
    $input: CreateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    createGERENTE(input: $input, condition: $condition) {
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
export const updateGERENTE = /* GraphQL */ `
  mutation UpdateGERENTE(
    $input: UpdateGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    updateGERENTE(input: $input, condition: $condition) {
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
export const deleteGERENTE = /* GraphQL */ `
  mutation DeleteGERENTE(
    $input: DeleteGERENTEInput!
    $condition: ModelGERENTEConditionInput
  ) {
    deleteGERENTE(input: $input, condition: $condition) {
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
export const createLABORATORIO = /* GraphQL */ `
  mutation CreateLABORATORIO(
    $input: CreateLABORATORIOInput!
    $condition: ModelLABORATORIOConditionInput
  ) {
    createLABORATORIO(input: $input, condition: $condition) {
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
export const updateLABORATORIO = /* GraphQL */ `
  mutation UpdateLABORATORIO(
    $input: UpdateLABORATORIOInput!
    $condition: ModelLABORATORIOConditionInput
  ) {
    updateLABORATORIO(input: $input, condition: $condition) {
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
export const deleteLABORATORIO = /* GraphQL */ `
  mutation DeleteLABORATORIO(
    $input: DeleteLABORATORIOInput!
    $condition: ModelLABORATORIOConditionInput
  ) {
    deleteLABORATORIO(input: $input, condition: $condition) {
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
export const createPARAMETROSTEST = /* GraphQL */ `
  mutation CreatePARAMETROSTEST(
    $input: CreatePARAMETROSTESTInput!
    $condition: ModelPARAMETROSTESTConditionInput
  ) {
    createPARAMETROSTEST(input: $input, condition: $condition) {
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
export const updatePARAMETROSTEST = /* GraphQL */ `
  mutation UpdatePARAMETROSTEST(
    $input: UpdatePARAMETROSTESTInput!
    $condition: ModelPARAMETROSTESTConditionInput
  ) {
    updatePARAMETROSTEST(input: $input, condition: $condition) {
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
export const deletePARAMETROSTEST = /* GraphQL */ `
  mutation DeletePARAMETROSTEST(
    $input: DeletePARAMETROSTESTInput!
    $condition: ModelPARAMETROSTESTConditionInput
  ) {
    deletePARAMETROSTEST(input: $input, condition: $condition) {
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
export const createEncuestaServicio = /* GraphQL */ `
  mutation CreateEncuestaServicio(
    $input: CreateEncuestaServicioInput!
    $condition: ModelEncuestaServicioConditionInput
  ) {
    createEncuestaServicio(input: $input, condition: $condition) {
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
export const updateEncuestaServicio = /* GraphQL */ `
  mutation UpdateEncuestaServicio(
    $input: UpdateEncuestaServicioInput!
    $condition: ModelEncuestaServicioConditionInput
  ) {
    updateEncuestaServicio(input: $input, condition: $condition) {
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
export const deleteEncuestaServicio = /* GraphQL */ `
  mutation DeleteEncuestaServicio(
    $input: DeleteEncuestaServicioInput!
    $condition: ModelEncuestaServicioConditionInput
  ) {
    deleteEncuestaServicio(input: $input, condition: $condition) {
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
export const createORDEN = /* GraphQL */ `
  mutation CreateORDEN(
    $input: CreateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    createORDEN(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateORDEN = /* GraphQL */ `
  mutation UpdateORDEN(
    $input: UpdateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    updateORDEN(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteORDEN = /* GraphQL */ `
  mutation DeleteORDEN(
    $input: DeleteORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    deleteORDEN(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPRUEBA = /* GraphQL */ `
  mutation CreatePRUEBA(
    $input: CreatePRUEBAInput!
    $condition: ModelPRUEBAConditionInput
  ) {
    createPRUEBA(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePRUEBA = /* GraphQL */ `
  mutation UpdatePRUEBA(
    $input: UpdatePRUEBAInput!
    $condition: ModelPRUEBAConditionInput
  ) {
    updatePRUEBA(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePRUEBA = /* GraphQL */ `
  mutation DeletePRUEBA(
    $input: DeletePRUEBAInput!
    $condition: ModelPRUEBAConditionInput
  ) {
    deletePRUEBA(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createDOCTOR = /* GraphQL */ `
  mutation CreateDOCTOR(
    $input: CreateDOCTORInput!
    $condition: ModelDOCTORConditionInput
  ) {
    createDOCTOR(input: $input, condition: $condition) {
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
export const updateDOCTOR = /* GraphQL */ `
  mutation UpdateDOCTOR(
    $input: UpdateDOCTORInput!
    $condition: ModelDOCTORConditionInput
  ) {
    updateDOCTOR(input: $input, condition: $condition) {
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
export const deleteDOCTOR = /* GraphQL */ `
  mutation DeleteDOCTOR(
    $input: DeleteDOCTORInput!
    $condition: ModelDOCTORConditionInput
  ) {
    deleteDOCTOR(input: $input, condition: $condition) {
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
export const createPACIENTE = /* GraphQL */ `
  mutation CreatePACIENTE(
    $input: CreatePACIENTEInput!
    $condition: ModelPACIENTEConditionInput
  ) {
    createPACIENTE(input: $input, condition: $condition) {
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
export const updatePACIENTE = /* GraphQL */ `
  mutation UpdatePACIENTE(
    $input: UpdatePACIENTEInput!
    $condition: ModelPACIENTEConditionInput
  ) {
    updatePACIENTE(input: $input, condition: $condition) {
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
export const deletePACIENTE = /* GraphQL */ `
  mutation DeletePACIENTE(
    $input: DeletePACIENTEInput!
    $condition: ModelPACIENTEConditionInput
  ) {
    deletePACIENTE(input: $input, condition: $condition) {
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
export const createBLOG = /* GraphQL */ `
  mutation CreateBLOG(
    $input: CreateBLOGInput!
    $condition: ModelBLOGConditionInput
  ) {
    createBLOG(input: $input, condition: $condition) {
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
export const updateBLOG = /* GraphQL */ `
  mutation UpdateBLOG(
    $input: UpdateBLOGInput!
    $condition: ModelBLOGConditionInput
  ) {
    updateBLOG(input: $input, condition: $condition) {
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
export const deleteBLOG = /* GraphQL */ `
  mutation DeleteBLOG(
    $input: DeleteBLOGInput!
    $condition: ModelBLOGConditionInput
  ) {
    deleteBLOG(input: $input, condition: $condition) {
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
