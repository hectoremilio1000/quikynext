import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import logo from '../../public/SAN-MATEO.png'

// css navbar

// icons react
import { FaAlignRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './navbar.module.css'
import { useRouter } from 'next/navigation';


function NavBar() {
  const [current, setCurrent] = useState("");
  const [linkswraper, setLinkswraper] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  }
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", changeBackground);
  }
  const navigate = useRouter();

  const handleNavbar = () => {
    setLinkswraper(!linkswraper)
  }

  const cambiarComponent = e => {
    setCurrent(e.key);
    navigate.push(`${e.key}`)
  }

  return (

    <div className={navbar ? "header-container sticky" : "header-container"}>
      <div className='row-qh px-4'>

        {/* <Link href="/">
        <Image src={logo} width={100}
          alt="llorona" priority />

      </Link> */}
        <div className='header-logo'>
          <Link href="/" className="logo">
            <Image src={logo} width={150}
              alt="llorona" priority />
          </Link>
          <FaAlignRight
            className="toggle-icon"
            onClick={() => {
              handleNavbar();
            }}
          />
        </div>
        <div onClick={() => { handleNavbar() }} className={linkswraper ? 'linkswraper active' : 'linkswraper'}>
          <li key="0">
            <Link href="/" className="nav-link hover:text-blue-600">
              Inicio
            </Link>
          </li>
          <li key="1">
            <Link href="/reserva" className="nav-link hover:text-blue-600">
              Paciente
            </Link>
          </li>
          <li key="2">
            <Link href="/menullorona" className="nav-link hover:text-blue-600">
              Doctor
            </Link>
          </li>
          <li key="3">
            <Link href="/mezcal" className="nav-link hover:text-blue-600">
              Blog
            </Link>
          </li>
          <li key="4">
            <Link href="/premios" className="nav-link hover:text-blue-600">
              Reserva
            </Link>
          </li>
          
        </div>
        <div className='header-icons'>
          <a key="0" href="https://www.facebook.com/people/Laboratorios-San-Mateo/100071824794370/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook-icon hover:text-blue-800 cursor-pointer" />
          </a>
          <a key="1" href="https://instagram.com/laboratoriossanmateo?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram-icon hover:text-blue-800 " />
          </a>
        </div>
      </div>

    </div>

  )
}

export default NavBar