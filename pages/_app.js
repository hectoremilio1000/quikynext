import "../styles/main.css";
import "../styles/globals.css";
import "../components/Navbar/navBar.css";
import LayoutFinal from "../components/layout";

import { Amplify, withSSRContext } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import Head from "next/head";
const awsConfig = {
  aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint:
    process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.NEXT_PUBLIC_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType:
    process.env.NEXT_PUBLIC_AWS_APPSYNC_AUTHENTICATIONTYPE,
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_AWS_APPSYNC_APIKEY,
  aws_cognito_identity_pool_id:
    process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
  oauth: {},
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["NAME"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_user_files_s3_bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET,
  aws_user_files_s3_bucket_region:
    process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION,
};

Amplify.configure({ ...awsConfig });

export default function MyApp({ Component, pageProps }) {
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
  );
}
