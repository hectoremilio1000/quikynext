import "../styles/main.css";
import "../styles/globals.css"
import "../components/Navbar/navBar.css"
import LayoutFinal from "../components/layout";


export default function MyApp({ Component, pageProps }) {
  return (<>
    <LayoutFinal>
      <Component {...pageProps} />
    </LayoutFinal> </>
  )
}