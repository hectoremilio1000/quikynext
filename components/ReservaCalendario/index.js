import React from "react";
import Link from "next/link";
import { InlineWidget } from "react-calendly";

function ReservaCalendario() {
  return (
    <div className="contentInfo">
      <div className="rowQh">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          <span style={{ color: "#2228ff" }}>
            ¿Quieres agendar <br /> una cita{" "}
          </span>{" "}
          con
          <span style={{ color: "#007479" }}> nosotros</span>?
        </h1>
      </div>
      <div className="rowQh dFlex" style={{ gap: "20px" }}>
        <div className="blockElement">
          <InlineWidget url="https://calendly.com/softwarequiky/30min" />
        </div>
      </div>
    </div>
  );
}

export default ReservaCalendario;
