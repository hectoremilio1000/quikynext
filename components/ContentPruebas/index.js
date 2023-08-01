import React from "react";

function ContentPruebas() {
  return (
    <div className="contentInfo" style={{ backgroundColor: "#F8F8FF" }}>
      <div className="rowQh">
        <h1 className="title1Model text-center">
          ¿Qué pruebas tienen disponibles?
        </h1>
        <p className="contentModel text-center mt-6 mb-12">
          Contamos con todas las pruebas que requieras con un CLICK o en
          nuestras sucursales
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-6">
          <img className="w-full" src="https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/home/quimicasanguinea+copy.jpg"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Química sanguínea</div>
              <p className="text-gray-700 text-base">
              Resultados en la app en <b>30 minutos</b>
              </p>

              <p className="text-gray-400 text-base">
            Es una serie de pruebas de sangre que analizan diversos elementos
              en el suero sanguíneo.
              </p>
            <a href="https://wa.me/+5219511028474">
              <button type="button" className="buttonModel mt-6 mb-6">
                ¡Reserva ya!
              </button>
            </a>
            </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg m-6">
          <img className="w-full" src="https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/home/antigeno.jpg"/>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Prueba de Antígeno (prueba rápida)</div>
            <p className="text-gray-700 text-base">
              Resultados en la app en <b>25 minutos</b>
            </p>

            <p className="text-gray-400 text-base">
              Prueba rápida para detectar la presencia de COVID-19 en tu cuerpo.
            </p>
            <a href="https://wa.me/+5219511028474">
              <button type="button" className="buttonModel mt-6 mb-6">
                ¡Reserva ya!
              </button>
            </a>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg m-6">
          <img className="w-full" src="https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/home/orina.jpg"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">EGO</div>
            <p className="text-gray-700 text-base">
              Resultados en la app en <b>1 hora</b>
            </p>

            <p className="text-gray-400 text-base">
              El Examen General de Orina es un examen que se utiliza para revisar padecimientos.
            </p>
            <a href="https://wa.me/+5219511028474">
              <button type="button" className="buttonModel mt-6 mb-6">
                ¡Reserva ya!
              </button>
            </a>
          </div>
        </div>
      </div>



      
      
    </div>
  );
}

export default ContentPruebas;
