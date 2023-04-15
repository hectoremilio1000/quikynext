import React from 'react'
import Link from 'next/link'

function ContentTrabajo() {
    return (
        <div className='contentInfo' style={{ backgroundColor: "#f3f5f9" }}>
            <div className="rowQh">
                <h1 className="title1Model text-center">
                    ¿Buscas trabajo?
                </h1>
            </div>
            <div className="rowQh dFlex" style={{ gap: "20px" }}>
                <div className="blockElement" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <p className='contentModel text-center'>Inscríbete para poder ofrecer el servicio de enfermería a domicilio y gana desde el primer día grandes ingresos</p>

                    <Link href="/bolsatrabajo">
                        <button type="button" className="buttonModel mt-6 mb-6">
                            ¡Postularme ya!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContentTrabajo