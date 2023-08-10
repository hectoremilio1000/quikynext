import React from 'react'
import Link from 'next/link'
import { InlineWidget } from "react-calendly";

function ReservaCalendario() {
    return (
        <div className='contentInfo'>
            <div className="rowQh">
                <h1 className="title1Model text-center">
                    ¿Quieres agendar una cita con nosotros?
                </h1>
               
            </div>
            <div className="rowQh dFlex" style={{ gap: "20px" }}>
                <div className="blockElement">
                    <InlineWidget url="https://calendly.com/softwarequiky/30min" />
                </div>
            </div>
        </div>
    )
}

export default ReservaCalendario