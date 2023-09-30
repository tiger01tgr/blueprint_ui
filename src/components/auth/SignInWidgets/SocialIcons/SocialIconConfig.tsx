import { GoogleIcon } from './SocialIcons'
import { auth } from '../../../../config/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export interface SocialIcon {
    id: string,
    icon: JSX.Element,
    aria: string,
    text: string,
    signIn: () => void,
}

export const Google: SocialIcon = {
    id: "google",
    icon: <GoogleIcon/>,
    aria: 'Google icon',
    text: 'Sign in with Google',
    signIn: () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const user = result.user;
                console.log(user.email);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
}
