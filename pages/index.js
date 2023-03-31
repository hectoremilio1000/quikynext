import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>Laboratorios San Mateo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="of:title" content="San Mateo" />
        <meta name="of:description" content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios" />
        <meta name="og:description" content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios" />
        <meta property="og:url" content="https://laboratoriossanmateo.com/" />
        <meta name="og:title" content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios" />
        <meta property="og:type" content="Laboratorios San Mateo la mayor calidad en estudios de laboratorios" />
        <meta property="og:image" content="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png" />
        {/* <link rel="apple-touch-icon" href="../logo192.png" />
        <link rel="manifest" href="../manifest.json" /> */}



      </Head>
      <main className={styles.main}>
        <div>
          <p>hola</p>
        </div>
      </main>
    </>
  )
}
