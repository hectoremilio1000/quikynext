import React from "react";

const Sucursales = () => {
  return (
    <div className="">
      <div className="rowQh">
        <h1 className="title1Model text-center">Nuestras Sucursales</h1>
      </div>
      <div className="rowQh dFlex" style={{ gap: "20px" }}>
        <div className="blockElement">
          {/* <Image style={{ width: "150px" }} src={jefe} /> */}
          <p className="contentModel2">Sé tu propio jefe</p>
        </div>
        <div className="blockElement">
          {/* <Image style={{ width: "150px" }} src={dinero} /> */}
          <p className="contentModel2">Gana el dinero que te mereces</p>
        </div>
        <div className="blockElement">
          {/* <Image style={{ width: "150px" }} src={metas} /> */}
          <p className="contentModel2">Logra tus sueños con tu trabajo</p>
        </div>
      </div>
    </div>
  );
};

export default Sucursales;
