import React from "react";
import Link from "next/link";
import Image from "next/image";
import info1 from "../../public/about.png";

function ContentInfo() {
  return (
    <div className="py-6" style={{ background: "#F8F8FF" }}>
      <div className="rowQh dFlex" style={{ gap: "40px" }}>
        <div className="blockElement">
          {/* <h1 className="text-2xl md:text-4xl font-bold text-center">
            <span style={{ color: "#2228ff" }}>¿Quienes confían </span> <br />{" "}
            en
            <span style={{ color: "#007479" }}> nosotros</span>?
          </h1> */}
          <h1
            style={{ color: "#000" }}
            className="justify-center text-2xl md:text-4xl font-bold flex items-center gap-2 mb-6"
          >
            <span className="w-[20px] h-[20px] rounded-full block bg-[#2228ff] p-2"></span>{" "}
            Nuestros Clientes
          </h1>
          <div className="mt-2 grid grid-cols-3 gap-8 md:grid-cols-6 xl:grid-cols-6 py-6">
            <div className="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
              <img
                className="w-1/2"
                src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg"
                alt="Best Buy"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
              <img
                className="w-1/2"
                src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg"
                alt="Best Buy"
              />
            </div>

            <div className="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
              <img
                className="w-1/2"
                src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg"
                alt="Best Buy"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
              <img
                className="w-1/2"
                src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg"
                alt="Best Buy"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
              <img
                className="w-1/2"
                src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg"
                alt="Best Buy"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
              <img
                className="w-1/2"
                src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg"
                alt="Best Buy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentInfo;
