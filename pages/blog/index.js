import Link from "next/link";
import React, { useState, useEffect } from "react";

// import awsExports from "../../src/aws-exports";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import { listBLOGS } from "@/src/graphql/queries";

// const awsConfig = {
//   aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
//   aws_appsync_graphqlEndpoint:
//     process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQLENDPOINT,
//   aws_appsync_region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION,
//   aws_appsync_authenticationType:
//     process.env.NEXT_PUBLIC_AWS_APPSYNC_AUTHENTICATIONTYPE,
//   aws_cognito_identity_pool_id:
//     process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
//   aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
//   aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
//   aws_user_pools_web_client_id:
//     process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
//   oauth: {},
//   aws_cognito_username_attributes: [],
//   aws_cognito_social_providers: [],
//   aws_cognito_signup_attributes: ["NAME"],
//   aws_cognito_mfa_configuration: "OFF",
//   aws_cognito_mfa_types: ["SMS"],
//   aws_cognito_password_protection_settings: {
//     passwordPolicyMinLength: 8,
//     passwordPolicyCharacters: [],
//   },
//   aws_cognito_verification_mechanisms: ["EMAIL"],
//   aws_user_files_s3_bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET,
//   aws_user_files_s3_bucket_region:
//     process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION,
// };

// Amplify.configure(awsConfig);

function Blog() {
  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    const blogs = await API.graphql(graphqlOperation(listBLOGS));
    const listBlogs = blogs?.data?.listBLOGS?.items;
    setBlog(listBlogs);
  };


  console.log(blog);


  useEffect(() => {
    fetchBlog();
  }, []);

  console.log(blog);

  return (
    <>
   
        
    </>
    // <>
    //   <div
    //     className="bannerSanmateo afterBanner posRelative ovHidden"
    //     style={{
    //       height: "60vh",
    //       backgroundImage: `url("https://blog.fpmaragall.org/hubfs/ana%CC%81lisis%20sangre.jpg")`,
    //       backgroundPosition: "top center",
    //       backgroundRepeat: "repeat",
    //       backgroundSize: "cover",
    //     }}
    //   >
    //     {/* <video autoPlay muted loop src={videoPort} /> */}

    //     <div
    //       className="titlePortada rowQh dFlex"
    //       style={{ gap: "20px", zIndex: "2000" }}
    //     >
    //       <div className="blockElement">
    //         {/* <h1 className="contentModel4">
    //                         ¿Eres enfermera?
    //                     </h1> */}
    //         <p className="title3Model text-white">
    //           ¿La venopunción es un procedimiento invasivo?
    //         </p>
    //         <p className="title4Model text-white">
    //           ¿Es necesario un consentimiento informado?
    //         </p>
    //       </div>
    //       <div className="blockElement posRelative ">
    //         <div className="heroFloatImg rotateme">
    //           {/* <img src="https://dreamthemebd.dreamitsolution.net/html/dreamhub/medical/assets/images/single-imgs3.png" alt="" /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="contentInfo" style={{ backgroundColor: "#F8F8FF" }}>
    //     <div className="rowQh">
    //       <h1 className="title1Model text-center">
    //         Todo lo relevante a la salud lo podrás encontrar Aquí
    //       </h1>
    //       <p className="contentModel text-center mt-6 mb-12">
    //         Creemos que la información actualizada y de mayor impacto debe de
    //         estar al alcance de nuestros pacientes en tiempo real
    //       </p>
    //     </div>
    //     <div className="rowQh dGrig3cm" style={{ gap: "40px" }}>
    //       {blog
    //         .map((blogs) => {
    //           return (
    //             <div
    //               className="blockElement"
    //               key={blogs.id}
    //               style={{ paddingBottom: "20px" }}
    //             >
    //               <Link href={`/blog/${blogs.slug}`}>
    //                 <img
    //                   style={{
    //                     width: "100%",
    //                     objectFit: "cover",
    //                     height: "250px",
    //                     borderRadius: ".25rem",
    //                   }}
    //                   src={
    //                     blogs.url1
    //                       ? blogs.url1
    //                       : "https://us.123rf.com/450wm/lehui/lehui1505/lehui150500011/39732408-sin-fisuras-de-fondo-blanco-textura-de-papel-foto-de-gran-tama%C3%B1o.jpg"
    //                   }
    //                   alt="blogs san mateo"
    //                 />{" "}
    //                 <br />
    //                 <h1
    //                   style={{
    //                     color: "#18181b !important",
    //                     textTransform: "capitalize",
    //                     fontWeight: "600",
    //                     fontSize: "15px",
    //                   }}
    //                   className="text-start"
    //                 >
    //                   {blogs.titulo}
    //                 </h1>
    //                 <p
    //                   className="mt-4"
    //                   style={{
    //                     fontSize: "12px",
    //                     fontWeight: "400",
    //                     color: "#757575",
    //                   }}
    //                 >
    //                   {blogs.subtitulo}
    //                 </p>{" "}
    //                 <br />
    //               </Link>
    //               <div className="authorBlog dFlex" style={{ gap: "20px" }}>
    //                 <img
    //                   style={{
    //                     width: "40px",
    //                     height: "40px",
    //                     borderRadius: "50%",
    //                   }}
    //                   src="https://img.freepik.com/free-icon/user_318-159711.jpg"
    //                   alt=""
    //                 />
    //                 <div className="contentInfoauthor">
    //                   <p
    //                     style={{
    //                       textTransform: "capitalize",
    //                       fontSize: "12px",
    //                       color: "#18181b",
    //                       fontWeight: "600",
    //                     }}
    //                   >
    //                     {blogs.autor}
    //                   </p>
    //                   <p
    //                     className="contentModel2"
    //                     style={{ fontSize: "15px", color: "#000" }}
    //                   >
    //                     {blogs.fecha}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })
    //         .sort((a, b) => {
    //           if (
    //             a?.props?.children[1]?.props?.children >
    //             b?.props?.children[1]?.props?.children
    //           ) {
    //             return -1;
    //           }
    //           return 0;
    //         })}
    //     </div>
    //   </div>
    // </>
  );
}

export default Blog;
