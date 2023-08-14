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
import Sucursales from "@/components/Sucursales/Sucursales";
import ContentPruebas2 from '../components/ContentPruebas2/index';
import ContentPruebas3 from '../components/ContentPruebas3/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiky Software</title>
        <meta
          name="description"
          content="Somos una empresa 100% mexicana dedicada a la creación de software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <meta
          name="og:title"
          content="Quiky Software"
        />
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
      <Banner />
      <ContentInfo />
      <ContentPruebas3 />
      <ContentPruebas />
      <ReservaCalendario />
      <ContentPruebas2 />
    
    
      <PasosCitas />
      <Sucursales />
      <ContentTrabajo />
    </>
  );
}
