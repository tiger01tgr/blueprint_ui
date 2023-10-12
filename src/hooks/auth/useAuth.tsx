import { 
    useAuthState,
} from 'react-firebase-hooks/auth';
import { app } from '../../config/firebase'
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserAccount, getMe } from './authApi';


const useAuth = () => {

    const [authObj, authLoading] = useAuthState(getAuth(app));

    const getAuthState = () => {
        return getAuth(app)
    }

    const LoginWithEmailPassword = async (email: string, password: string): Promise<Error | null> => {
        const auth = getAuthState()
        if (!auth) return new Error("auth not initialized");
        email = email.trim()
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                getMe(await userCredential.user.getIdToken(true))
                return null
            })
            .catch((error) => {
                console.log(error)
                return error
            });
        return null
    }

    const RegisterWithEmailPassword = async (email: string, password: string, firstName: string, lastName: string): Promise<Error | null> => {
        const auth = getAuthState()
        if (!auth) return new Error("auth not initialized");

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
                console.log(errorMessage)
                // ..
                return errorMessage
            })
        return null
    }

    const getBearerToken  = () => {
        const auth = getAuthState()
        if (!auth || !auth.currentUser) return ""
        return auth.currentUser?.getIdToken(true)
    }

    const Logout = () => {
        const auth = getAuthState()
        if (!auth) return new Error("auth not initialized")
        signOut(auth).then(() => {
            return null
        }).catch((error) => {
            return error
        })
    }

    return (
        {
            authObj,
            getBearerToken,
            LoginWithEmailPassword,
            RegisterWithEmailPassword,
            Logout
        }
    )
}

export default useAuth