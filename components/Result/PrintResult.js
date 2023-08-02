import React from "react";
import { Statusorder } from "@/src/models";
import { useOrdenDetailsContext } from "@/context/OrdenDetailsContext";
import ResultadoPrueba from "./ResultadoPrueba";
import { Typography } from "@mui/material";
import { CheckCircleOutlined, SyncOutlined } from "@ant-design/icons";

import { Tag } from "antd";

function PrintResult({ orden, patient, pruebas, doctor }) {
  const ordenItems = useOrdenDetailsContext();

  // console.log('orden', orden);
  console.log("orden Items", ordenItems);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {ordenItems?.ordenItems?.map((item) => {
        const prueba = pruebas.find((prueba) => prueba.id === item.pruebaID);
        if (item.status === "VERIFIED") {
          return (
            <>
              <Tag
                style={{
                  width: "100%",
                  margin: "15px 0px",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  padding: "15px",
                }}
                icon={<CheckCircleOutlined />}
                color="success"
              >
                {prueba.nombre} Listo
              </Tag>
              <ResultadoPrueba
                pruebas={[prueba]}
                itemOrd={[item]}
                orden={orden}
                patient={patient}
                doctor={doctor}
              />
            </>
          );
        } else {
          return (
            <Tag icon={<SyncOutlined spin />} color="processing">
              {prueba.nombre} procesando..
            </Tag>
          );
        }
      })}
    </div>
  );
}

export default PrintResult;
