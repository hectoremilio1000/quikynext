import React from "react";
import { Statusorder } from "@/src/models";
import { useOrdenDetailsContext } from "@/context/OrdenDetailsContext";
import ResultadoPrueba from "./ResultadoPrueba";
import { Typography } from "@mui/material";

function PrintResult({ orden, patient, pruebas, doctor }) {
  const ordenItems = useOrdenDetailsContext();

  // console.log('orden', orden);
  // console.log('orden Items', ordenItems);

  if (
    orden?.status === Statusorder.VERIFIED ||
    orden?.status === Statusorder.SENT
  ) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {
          ordenItems?.ordenItems?.map(
            item => {
              const prueba = pruebas.find(prueba=>prueba.id===item.pruebaID);
              return (<ResultadoPrueba key={item.id} prueba={prueba} item={item} orden={orden} patient={patient} doctor={doctor} />)
            }
          )
        } */}
        <ResultadoPrueba
          pruebas={pruebas}
          itemOrd={ordenItems?.ordenItems}
          orden={orden}
          patient={patient}
          doctor={doctor}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Typography.Title level={4}>
          Se necesita verificar la orden
        </Typography.Title>
      </div>
    );
  }
}

export default PrintResult;
