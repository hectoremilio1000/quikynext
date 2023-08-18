import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";
import ContentInfo from "@/components/ContentInfo";
import ContentPruebas from "@/components/ContentPruebas";
import ReservaCalendario from "@/components/ReservaCalendario";
import PasosCitas from "@/components/PasosCitas";
import ContentTrabajo from "@/components/ContentTrabajo/ContentTrabajo";
import ContentPruebas2 from "../components/ContentPruebas2/index";
import ContentPruebas3 from "../components/ContentPruebas3/index";
import Portafolio from "@/components/Portafolio/Portafolio";
import Team from "@/components/Team/Team";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Intercom widget initialization code
  //     window.Intercom("boot", {
  //       api_base: "https://api-iam.intercom.io",
  //       app_id: "u7n1fzb9",
  //     });
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>Quiky Software</title>
        <meta
          name="description"
          content="Somos una empresa 100% mexicana dedicada a la creación de software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iconQuiky.png" />
        <meta name="of:title" content="San Mateo" />
        <meta
          name="of:description"
          content="Quiky empresa cuidamos a tu empresa con el mejor software"
        />
        <meta
          name="og:description"
          content="Quiky empresa cuidamos a tu empresa con el mejor software"
        />
        <meta property="og:url" content="https://quikyempresa.com/" />
        <meta name="og:title" content="Quiky Software" />
        <meta
          property="og:type"
          content="Quiky empresa cuidamos a tu empresa con el mejor software"
        />
        <meta
          property="og:image"
          content="https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresa3.png"
        />
        {/* <link rel="apple-touch-icon" href="../logo192.png" />
        <link rel="manifest" href="../manifest.json" /> */}
      </Head>

      <Script id="scriptintercom">{`
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/u7n1fzb9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `}</Script>
      <Script id="scriptinitialintercom">{`window.Intercom("boot", {
  api_base: "https://api-iam.intercom.io",
  app_id: "u7n1fzb9"
});`}</Script>
      <Banner />
      <ContentPruebas />
      <Portafolio />
      <Team />
      <ContentInfo />
      {/* <ContentPruebas3 /> */}
      <ContentPruebas2 />
      <ReservaCalendario />

      {/* <PasosCitas /> */}
      {/* <Sucursales />
      <ContentTrabajo /> */}
    </>
  );
}
