import { FcGoogle } from 'react-icons/fc'
import { auth } from '../../../config/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { IconType } from "react-icons"

export interface SocialIcon {
    id: string,
    icon: IconType,
    text: string,
    signIn: () => void,
}

export const Google: SocialIcon = {
    id: "google",
    icon: FcGoogle,
    text: 'Sign in with Google',
    signIn: () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const user = result.user
                console.log(user.email)
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.customData.email
                const credential = GoogleAuthProvider.credentialFromError(error);
            })
    }
}

// Create a LinkedIn one
