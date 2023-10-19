import { 
    useAuthState,
    useCreateUserWithEmailAndPassword
} from 'react-firebase-hooks/auth';
import { app } from '../../config/firebase'
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserAccount, getMe } from './authApi';


const useAuth = () => {

    const [authObj, authLoading] = useAuthState(getAuth(app));
    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(getAuth(app))

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
        // TODO: if user tries to register with an email that already exists, right now nothing happens -> we should show an error toast
        const user = await createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error)
                return error
            })
        if (!user) return new Error("error creating user")
        const error = await createUserAccount(user.user.email, firstName, lastName, "", await user.user.getIdToken(true))
        return null
    }

    const getBearerToken  = async () => {
        const auth = getAuthState()
        if (!auth || !auth.currentUser) return ""
        return await auth.currentUser?.getIdToken(true)
    }

    const Logout = async () => {
        const auth = getAuthState()
        if (!auth) return new Error("auth not initialized")
        await signOut(auth)
    }

    return (
        {
            authObj,
            authLoading,
            getBearerToken,
            LoginWithEmailPassword,
            RegisterWithEmailPassword,
            Logout
        }
    )
}

export default useAuth