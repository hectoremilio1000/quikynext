import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import info1 from "../../public/about.png"

function ContentInfo() {
    return (
        <div className='contentInfo'>
            <div className="rowQh dFlex" style={{ gap: "40px" }}>
                <div className="blockElement">
                    <h1 className="text-2xl md:text-4xl text-sky-300 text-center uppercase">
                        ¿Quienes confían en nosotros?
                    </h1>
                    <div class="mt-2 grid grid-cols-3 gap-8 md:grid-cols-6 xl:grid-cols-6 py-6">

                
                   
                        <div class="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
                            <img class="w-1/2" src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg" alt="Best Buy" />
                        </div>
                        <div class="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
                            <img class="w-1/2" src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg" alt="Best Buy" />
                        </div>
                       
                        <div class="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
                            <img class="w-1/2" src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg" alt="Best Buy" />
                            </div>
                            <div class="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
                            <img class="w-1/2" src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg" alt="Best Buy" />
                            </div>
                        <div class="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
                            <img class="w-1/2" src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg" alt="Best Buy" />
                        </div><div class="col-span-1 flex justify-center md:col-span-1 xl:col-span-1 w-5/6">
                            <img class="w-1/2" src="https://www.alluxi.com/static/media/client-best.ada3d91ed80f01d30713b2d6487f0487.svg" alt="Best Buy" />
                        </div>
                    </div>
                   
                </div>
               

            </div>
        </div>
    )
}

export default ContentInfo