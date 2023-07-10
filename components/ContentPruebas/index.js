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
          sucursal
        </p>
      </div>
      <div className="rowQh dFlex" style={{ gap: "20px" }}>
        <div className="blockElement">
          <img
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
            src="https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/home/quimicasanguinea+copy.jpg"
            alt=""
          />
          <div>
            <h1 style={{ padding: "10px" }}>Química sanguínea</h1>
            <p className="contentModel2">Sangre</p>
            <p className="contentModel3">RESULTADOS EN 2 a 6 horas</p>
            <p className="contentModel">
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
        <div className="blockElement">
          <img
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
            src="https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/home/antigeno.jpg"
            alt=""
          />
          <div style={{ padding: "10px" }}>
            <h1>Prueba de Antígeno (prueba rápida)</h1>
            <p className="contentModel2">Muestra de nariz</p>
            <p className="contentModel3">RESULTADOS EN 2 horas</p>
            <p className="contentModel">
              Prueba rápida para detectar la presencia de COVID-19 en tu cuerpo.
            </p>
            <a href="https://wa.me/+5219511028474">
              <button type="button" className="buttonModel mt-6 mb-6">
                ¡Reserva ya!
              </button>
            </a>
          </div>
        </div>
        <div className="blockElement">
          <img
            style={{ height: "400px", objectFit: "cover", width: "100%" }}
            src="https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/home/orina.jpg"
            alt=""
          />
          <div>
            <h1>Ego</h1>
            <p style={{ padding: "10px" }} className="contentModel2">
              Orina
            </p>
            <p className="contentModel3">RESULTADOS EN 2 a 4 horas</p>
            <p className="contentModel">
              El examen general de orina es un examen de tu orina el cual se
              utiliza para revisar signos de algunas condiciones comunes o
              padecimientos.
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
