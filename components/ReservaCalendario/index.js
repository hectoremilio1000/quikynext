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
                <p className='contentModel text-center mt-6'>En caso de que quieras ir a nuestra sucursal agenda tu cita</p>
            </div>
            <div className="rowQh dFlex" style={{ gap: "20px" }}>
                <div className="blockElement">
                    <InlineWidget url="https://calendly.com/laboratoriossanmateo/sanmateo" />
                </div>
            </div>
        </div>
    )
}

export default ReservaCalendario