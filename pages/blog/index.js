import { BLOG } from '@/src/models';
import { API, DataStore, graphqlOperation } from 'aws-amplify';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import awsExports from '../../src/aws-exports';
import { Amplify } from 'aws-amplify'

Amplify.configure(awsExports);


function Blog() {
    const [blog, setBlog] = useState([]);

    const fetchBlog = async () => {
        const blogs = await DataStore.query(BLOG);
        setBlog(blogs)
    }

    useEffect(() => {
        fetchBlog();
    }, [])

    console.log(blog)


    return (
        <>
            <div className="bannerSanmateo posRelative ovHidden" style={{ height: "50vh", backgroundImage: `url("https://blog.fpmaragall.org/hubfs/ana%CC%81lisis%20sangre.jpg")`, backgroundPosition: "top center", backgroundRepeat: "repeat", backgroundSize: "cover" }}>
                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="titlePortada rowQh dFlex" style={{ gap: "20px" }}>
                    <div className="blockElement">

                        {/* <h1 className="contentModel4">
                            ¿Eres enfermera?
                        </h1> */}
                        <p className='title3Model text-white'>
                            ¿La venopunción es un procedimiento invasivo?</p>
                        <p className='title4Model text-white'>
                            ¿Es necesario un consentimiento informado?</p>
                    </div>
                    <div className="blockElement posRelative ">
                        <div className="heroFloatImg rotateme">
                            {/* <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs3.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='contentInfo' style={{ backgroundColor: "#F8F8FF" }}>
                <div className="rowQh">
                    <h1 className="title1Model text-center">
                        Todo lo relevante a la salud lo podrás encontrar Aquí
                    </h1>
                    <p className='contentModel text-center mt-6 mb-12'>Creemos que la información actualizada y de mayor impacto debe de estar al alcance de nuestros pacientes en tiempo real</p>
                </div>
                <div className="rowQh dGrig3cm" style={{ gap: "40px" }}>
                    {blog.map((blogs) => {
                        return (
                            <div className="blockElement" key={blogs.id} style={{ borderBottom: "1px solid #5b5b5b", paddingBottom: "20px" }}>
                                <p className="" style={{ fontSize: "20px", color: "#000" }}>{blogs.titulo}</p>
                                <p className="contentModel2" style={{ fontSize: "15px", color: "#000" }}>{blogs.fecha}</p>
                                <p className="contentModel" style={{ textTransform: "capitalize" }}>by: {blogs.autor}</p>
                                <p className="title1Model mt-4" style={{ fontSize: "20px", color: "#000" }}>{blogs.subtitulo}</p>
                                <img style={{ width: "100%", height: "250px", objectFit: "cover" }} src={blogs.url1} alt={blogs.imagen1} />
                                <p className="contentModel" style={{ height: "150px", overflow: "hidden" }}>{blogs.texto1}</p> <br />
                                <Link href={`/blog/${blogs.slug}`} className="logo">
                                    Leer mas
                                </Link>
                                {/* <img src={blogs.url2} alt={blogs.imagen2} />
                                    <p className="contentModel">{blogs.texto2}</p> <br />
                                    <img src={blogs.url3} alt={blogs.imagen3} /> <br />
                                    <p className="contentModel">{blogs.texto3}</p> */}
                            </div >
                        );
                    }).sort((a, b) => {
                        if (a?.props?.children[1]?.props?.children > b?.props?.children[1]?.props?.children) {
                            return -1
                        }
                        return 0;
                    })}

                </div>
            </div >
        </>
    )
}

export default Blog