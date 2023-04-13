import "../styles/main.css";
import "../styles/globals.css"
import "../components/Navbar/navBar.css"
import LayoutFinal from "../components/layout";

import awsExports from '../src/aws-exports';
import { Amplify } from 'aws-amplify'

Amplify.configure(awsExports);



export default function MyApp({ Component, pageProps }) {
  return (<>
    <LayoutFinal>
      <Component {...pageProps} />
    </LayoutFinal> </>
  )
}