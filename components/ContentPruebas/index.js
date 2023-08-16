import React from "react";

function ContentPruebas() {
  return (
    <div className="contentInfo">
      <div className="rowQh">
        <div className="mt-0">
          <div className="md:grid md:grid-cols-2 md:grid-flow-col-dense md:gap-4">
            <div className="md:col-start-1">
              <div>
                <span className="text-md tracking-widest  text-ablue-600 f uppercase">
                  Metodología única
                </span>
                <h2 style={{ color: "#2228ff" }} className="text-3xl font-bold">
                  Para desarrollar software a tu medida
                </h2>

                <p className="text-gray-500 text-xl md:text-xl mt-4 m-auto ">
                  Le guiaremos a través de nuestra metodología probada y
                  confiable que hemos testeado y pulido a lo largo de años de
                  experiencia. El proceso comienza comprendiendo sus necesidades
                  específicas, para que una vez analizada por nuestro equipo
                  extenso y especializado, le propongamos una solución confiable
                </p>
                <div className="single-about mt-6">
                  <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
                    <div className="flex-none w-1/2 max-w-1/2">
                      <div className="mb-12">
                        <h3 className="text-2xl text-[#7AEDCF] bg-[#E5FEF8] h-[50px] w-[50px] leading-[51px] text-center rounded-full float-left m-0 mr-[15px]">
                          01
                        </h3>
                        <span className="text-2xl text-[#010E22] relative top-2.5">
                          Reunión con el cliente
                        </span>
                      </div>
                    </div>
                    <div className="flex-none w-1/2 max-w-1/2">
                      <div className="mb-12">
                        <h3 className="text-2xl text-[#FD5B6A] bg-[#FFECEE] h-[50px] w-[50px] leading-[51px] text-center rounded-full float-left m-0 mr-[15px]">
                          02
                        </h3>
                        <span className="text-2xl text-[#010E22] relative top-2.5">
                          Analizamos
                        </span>
                      </div>
                    </div>
                    <div className="flex-none w-1/2 max-w-1/2">
                      <div className="mb-12">
                        <h3 className="text-2xl text-[#FDA329] bg-[#FFF5EB] h-[50px] w-[50px] leading-[51px] text-center rounded-full float-left m-0 mr-[15px]">
                          03
                        </h3>
                        <span className="text-2xl text-[#010E22] relative top-2.5">
                          Proponemos
                        </span>
                      </div>
                    </div>
                    <div className="flex-none w-1/2 max-w-1/2">
                      <div className="mb-12">
                        <h3 className="text-2xl text-[#7AEDCF] bg-[#E5FEF8] h-[50px] w-[50px] leading-[51px] text-center rounded-full float-left m-0 mr-[15px]">
                          04
                        </h3>
                        <span className="text-2xl text-[#010E22] relative top-2.5">
                          El cliente disfruta del éxito!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto my-8 md:my-auto">
              <img
                className="react-reveal w-full"
                src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/it-solution/assets/images/image1.png"
              />
            </div>
          </div>
        </div>

        <div className="it-solution-about-area">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPruebas;
