import "../styles/main.css";
import "../styles/globals.css"
import "../components/Navbar/navBar.css"
import LayoutFinal from "../components/layout";

import awsExports from '../src/aws-exports';
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

Amplify.configure({...awsExports, ssr: true});

export default function MyApp({ Component, pageProps }) {
  return (<>
    <LayoutFinal>
      <Component {...pageProps} />
      <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </LayoutFinal> 
  </>
  )
}