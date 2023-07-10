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

export default function Home() {
  return (
    <>
      <Head>
        <title>Laboratorios San Mateo</title>
        <meta
          name="description"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="of:title" content="San Mateo" />
        <meta
          name="of:description"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta
          name="og:description"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta property="og:url" content="https://laboratoriossanmateo.com/" />
        <meta
          name="og:title"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta
          property="og:type"
          content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios"
        />
        <meta
          property="og:image"
          content="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
        />
        {/* <link rel="apple-touch-icon" href="../logo192.png" />
        <link rel="manifest" href="../manifest.json" /> */}
      </Head>
      <Banner />
      <ContentInfo />
      <ContentPruebas />
      <ReservaCalendario />
      <PasosCitas />
      <Sucursales />
      <ContentTrabajo />
    </>
  );
}
