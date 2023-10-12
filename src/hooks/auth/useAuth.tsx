import React, { useEffect } from 'react'
import { app } from '../../config/firebase'
import { Auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createUserAccount } from './authApi';


const useAuth = () => {

    const [ auth, setAuth ] = React.useState<Auth | null>(null)

    useEffect(() => {
        const setAuthState = async () => {
            setAuth(getAuth(app))
        }
        setAuthState()
    }, [])


    const getUser = () => {
        if (!auth || !auth.currentUser) return null
        return auth.currentUser
    }

    const LoginWithEmailPassword = () => {
        console.log('LoginWithEmailPassword')
    }

    const RegisterWithEmailPassword = async (email: string, password: string, firstName: string, lastName: string): Promise<Error | null> => {
        email = email.trim()
        firstName = firstName.trim()
        lastName = lastName.trim()

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed up 
                createUserAccount(email, firstName, lastName, "", await userCredential.user.getIdToken(true))
                .then((response) => {
                    return null
                })
                .catch((error) => {
                    // need actual handling, perhaps retries
                    console.log('error creating user account')
                    return error
                })
            })
            .catch((error) => {
                // need actual handling here too
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                return errorMessage
            });
        return null
    }

    const getBearerToken  = () => {
        if (!auth.currentUser) return ""
        return auth.currentUser?.getIdToken(true)
    }

    return (
        {
            getUser,
            getBearerToken,
            LoginWithEmailPassword,
            RegisterWithEmailPassword,
        }
    )
}

export default useAuth