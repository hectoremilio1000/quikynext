import React, {  } from 'react'
import awsExports from '../../src/aws-exports';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import AuthContextProvider from '@/context/AuthContext';
import Results from '@/components/Result/Results';

Amplify.configure(awsExports);


function Doctor({signOut,user}) {
    return (
        <AuthContextProvider>
            <Results signOut={signOut} user={user}/>
        </AuthContextProvider>
    )
}
    
export default withAuthenticator(Doctor)
