import "../styles/main.css";
import "../styles/globals.css";
import "../components/Navbar/navBar.css";
import LayoutFinal from "../components/layout";

// import awsExports from '../src/aws-exports';
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const awsConfig = {
  // Configuración de las variables de entorno

  aws_project_region: process.env.AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint: process.env.AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: process.env.AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.AWS_APPSYNC_AUTHENTICATIONTYPE,
  aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
  aws_user_files_s3_bucket: process.env.AWS_USER_FILES_S3_BUCKET,
  aws_user_files_s3_bucket_region: process.env.AWS_USER_FILES_S3_BUCKET_REGION,
};

Amplify.configure({ ...awsConfig, ssr: true });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
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
