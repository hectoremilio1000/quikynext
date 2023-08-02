import { useRouter } from "next/router";
import { API, graphqlOperation } from "aws-amplify";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// import awsExports from "../../src/aws-exports";
import { Amplify } from "aws-amplify";
import { getBLOG, listBLOGS } from "@/src/graphql/queries";

import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

function Blog1() {
  const [blog, setBlog] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchBlog(id);
    }
  }, [id]);

  const fetchBlog = async (blogId) => {
    try {
      const blogData = await API.graphql({
        query: getBLOG,
        variables: {
          id: blogId,
        },

        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      setBlog(blogData.data.getBLOG);
    } catch (err) {
      console.error(err);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }
  console.log(blog);

  return (
    <>
      <div style={{ padding: "120px 0px", background: "#f3f5f9" }}>
        <div className="rowQhBlog dFlex">
          <div className="blockElement">
            <>
              <h1
                style={{
                  color: "#18181b !important",
                  textTransform: "capitalize",
                }}
                className="title3Model text-start"
              >
                {blog.titulo}
              </h1>
              <p
                className="mt-4"
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#757575",
                }}
              >
                {blog.subtitulo}
              </p>{" "}
              <br />
              <div className="authorBlog dFlex" style={{ gap: "20px" }}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                  alt=""
                />
                <div className="contentInfoauthor">
                  <p
                    style={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                      color: "#18181b",
                      fontWeight: "600",
                    }}
                  >
                    {blog.autor}
                  </p>
                  <p
                    className="contentModel2"
                    style={{ fontSize: "15px", color: "#000" }}
                  >
                    {blog.fecha}
                  </p>
                </div>
              </div>{" "}
              <br />
              <img
                style={{ width: "100%", objectFit: "contain", height: "400px" }}
                src={
                  blog.url1
                    ? blog.url1
                    : "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
                }
                alt={blog.imagen1}
              />{" "}
              <br />
              <p className="contentModel">{blog.texto1}</p> <br />
              <img
                style={{ width: "100%", objectFit: "contain", height: "400px" }}
                src={
                  blog.url2
                    ? blog.url2
                    : "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
                }
                alt={blog.imagen2}
              />{" "}
              <br />
              <p className="contentModel">{blog.texto2}</p> <br />
              <img
                style={{ width: "100%", objectFit: "contain", height: "400px" }}
                src={
                  blog.url3
                    ? blog.url3
                    : "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
                }
                alt={blog.imagen3}
              />{" "}
              <br />
              <p className="contentModel">{blog.texto3}</p>
            </>

            <br />
            <br />
            <Link className="buttonModel" href="/blog">
              Regresar a Blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog1;
