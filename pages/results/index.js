import React from "react";
// import awsExports from '../../src/aws-exports';
// import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { translations } from '@aws-amplify/ui-react';
import AuthContextProvider from "@/context/AuthContext";
import Results from "@/components/Result/Results";
import { I18n } from 'aws-amplify';

I18n.putVocabularies(translations);
  I18n.setLanguage("es");

I18n.putVocabularies({
  es: {
    "Sign In": "Iniciar Sesión",
    "Sign Up": "Regístrate",
    Username: "Usuario",
    Email: "Email",
    "Enter your Username": "Ingresa tu usuario",
    "Enter your Email": "Ingresa tu email",
    "Enter your Password": "Ingresa tu contraseña",
    "Please confirm your Password": "Confirma tu contraseña",
    "Create Account": "Regístrate",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Se envió el código de confirmación al email proporcionado.",
    "It may take a minute to arrive.": "Puede tardar unos minutos en llegar.",
    "Invalid verification code provided, please try again.":
      "Código de verificación inválido, por favor intenta de nuevo.",
    "Send code": "Enviar código",
    "Cannot reset password for the user as there is no registered/verified email or phone_number":
      "No se puede reestablecer la contraseña para el usuario ya que no se encuentra registrado/ el email no está verificado o tampoco el número de teléfono.",
  },
});

function Doctor({ signOut, user }) {
  return (
    <AuthContextProvider>
      <Results signOut={signOut} user={user} />
    </AuthContextProvider>
  );
}

export default withAuthenticator(Doctor);
