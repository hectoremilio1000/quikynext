/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePAQUETESPRUEBAS = /* GraphQL */ `
  subscription OnCreatePAQUETESPRUEBAS(
    $filter: ModelSubscriptionPAQUETESPRUEBASFilterInput
  ) {
    onCreatePAQUETESPRUEBAS(filter: $filter) {
      id
      paquetesID
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePAQUETESPRUEBAS = /* GraphQL */ `
  subscription OnUpdatePAQUETESPRUEBAS(
    $filter: ModelSubscriptionPAQUETESPRUEBASFilterInput
  ) {
    onUpdatePAQUETESPRUEBAS(filter: $filter) {
      id
      paquetesID
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePAQUETESPRUEBAS = /* GraphQL */ `
  subscription OnDeletePAQUETESPRUEBAS(
    $filter: ModelSubscriptionPAQUETESPRUEBASFilterInput
  ) {
    onDeletePAQUETESPRUEBAS(filter: $filter) {
      id
      paquetesID
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePAQUETES = /* GraphQL */ `
  subscription OnCreatePAQUETES($filter: ModelSubscriptionPAQUETESFilterInput) {
    onCreatePAQUETES(filter: $filter) {
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
        }
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
export const onUpdatePAQUETES = /* GraphQL */ `
  subscription OnUpdatePAQUETES($filter: ModelSubscriptionPAQUETESFilterInput) {
    onUpdatePAQUETES(filter: $filter) {
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
        }
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
export const onDeletePAQUETES = /* GraphQL */ `
  subscription OnDeletePAQUETES($filter: ModelSubscriptionPAQUETESFilterInput) {
    onDeletePAQUETES(filter: $filter) {
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
        }
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
export const onCreateCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  subscription OnCreateCONFIGURACIONDOCUMENTO(
    $filter: ModelSubscriptionCONFIGURACIONDOCUMENTOFilterInput
  ) {
    onCreateCONFIGURACIONDOCUMENTO(filter: $filter) {
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
    }
  }
`;
export const onUpdateCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  subscription OnUpdateCONFIGURACIONDOCUMENTO(
    $filter: ModelSubscriptionCONFIGURACIONDOCUMENTOFilterInput
  ) {
    onUpdateCONFIGURACIONDOCUMENTO(filter: $filter) {
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
    }
  }
`;
export const onDeleteCONFIGURACIONDOCUMENTO = /* GraphQL */ `
  subscription OnDeleteCONFIGURACIONDOCUMENTO(
    $filter: ModelSubscriptionCONFIGURACIONDOCUMENTOFilterInput
  ) {
    onDeleteCONFIGURACIONDOCUMENTO(filter: $filter) {
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
    }
  }
`;
export const onCreateDOCUMENTOS = /* GraphQL */ `
  subscription OnCreateDOCUMENTOS(
    $filter: ModelSubscriptionDOCUMENTOSFilterInput
  ) {
    onCreateDOCUMENTOS(filter: $filter) {
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
    }
  }
`;
export const onUpdateDOCUMENTOS = /* GraphQL */ `
  subscription OnUpdateDOCUMENTOS(
    $filter: ModelSubscriptionDOCUMENTOSFilterInput
  ) {
    onUpdateDOCUMENTOS(filter: $filter) {
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
    }
  }
`;
export const onDeleteDOCUMENTOS = /* GraphQL */ `
  subscription OnDeleteDOCUMENTOS(
    $filter: ModelSubscriptionDOCUMENTOSFilterInput
  ) {
    onDeleteDOCUMENTOS(filter: $filter) {
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
    }
  }
`;
export const onCreateCaja = /* GraphQL */ `
  subscription OnCreateCaja($filter: ModelSubscriptionCajaFilterInput) {
    onCreateCaja(filter: $filter) {
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
          }
          GASTOS {
            nextToken
            startedAt
          }
          cajaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
export const onUpdateCaja = /* GraphQL */ `
  subscription OnUpdateCaja($filter: ModelSubscriptionCajaFilterInput) {
    onUpdateCaja(filter: $filter) {
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
          }
          GASTOS {
            nextToken
            startedAt
          }
          cajaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
export const onDeleteCaja = /* GraphQL */ `
  subscription OnDeleteCaja($filter: ModelSubscriptionCajaFilterInput) {
    onDeleteCaja(filter: $filter) {
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
          }
          GASTOS {
            nextToken
            startedAt
          }
          cajaID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
export const onCreateTurno = /* GraphQL */ `
  subscription OnCreateTurno($filter: ModelSubscriptionTurnoFilterInput) {
    onCreateTurno(filter: $filter) {
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
      }
      cajaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTurno = /* GraphQL */ `
  subscription OnUpdateTurno($filter: ModelSubscriptionTurnoFilterInput) {
    onUpdateTurno(filter: $filter) {
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
      }
      cajaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTurno = /* GraphQL */ `
  subscription OnDeleteTurno($filter: ModelSubscriptionTurnoFilterInput) {
    onDeleteTurno(filter: $filter) {
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
      }
      cajaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateGASTOS = /* GraphQL */ `
  subscription OnCreateGASTOS($filter: ModelSubscriptionGASTOSFilterInput) {
    onCreateGASTOS(filter: $filter) {
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
    }
  }
`;
export const onUpdateGASTOS = /* GraphQL */ `
  subscription OnUpdateGASTOS($filter: ModelSubscriptionGASTOSFilterInput) {
    onUpdateGASTOS(filter: $filter) {
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
    }
  }
`;
export const onDeleteGASTOS = /* GraphQL */ `
  subscription OnDeleteGASTOS($filter: ModelSubscriptionGASTOSFilterInput) {
    onDeleteGASTOS(filter: $filter) {
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
    }
  }
`;
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
      isValueNormal
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
      isValueNormal
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
      isValueNormal
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
          }
          groups
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
          }
          grupoPersona
          PAQUETESPRUEBAS {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Cajas {
        items {
          id
          nombre
          laboratorioID
          Turnos {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
        }
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
          }
          groups
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
          }
          grupoPersona
          PAQUETESPRUEBAS {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Cajas {
        items {
          id
          nombre
          laboratorioID
          Turnos {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
        }
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
        nextToken
        startedAt
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
          }
          groups
          ORDENPRUEBAITEMS {
            nextToken
            startedAt
          }
          grupoPersona
          PAQUETESPRUEBAS {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Cajas {
        items {
          id
          nombre
          laboratorioID
          Turnos {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
        }
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
        nextToken
        startedAt
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
        }
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
        nextToken
        startedAt
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
        }
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
        nextToken
        startedAt
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
        }
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
        items {
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
        }
        nextToken
        startedAt
      }
      isPaquete
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
        items {
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
        }
        nextToken
        startedAt
      }
      isPaquete
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
        items {
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
        }
        nextToken
        startedAt
      }
      isPaquete
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
        items {
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
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
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
        }
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
        items {
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
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
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
        }
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
        items {
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
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
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
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          isPaquete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
      slug
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
      slug
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
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
