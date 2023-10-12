import { Group } from '@mantine/core'
import styles from './SignInWithButton.module.css'
import { FcGoogle } from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';

export interface SocialIcon {
    id: string,
    icon: IconType,
    text: string,
    signIn: () => void,
}


export const SignInWithButton = () => {
    const router = useRouter()
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth)

    const buttons: SocialIcon[] = [
        {
            id: "Google",
            icon: FcGoogle,
            text: "Sign in with Google",
            signIn: signInWithGoogle
        }
    ]

    const onSignIn = async (signIn: () => any) => {
        const success = await signIn();
        if (success) {
            router.push('/profile');
        }
    }

    return ( 
        <Group grow mb="md" mt="md">
            {buttons.map((social) => (
                <button
                    key={social.id}
                    className={styles.button}
                    onClick={() => onSignIn(social.signIn)}
                >
                    <social.icon size={30} className={styles.icon}/>
                </button>
            ))}
        </Group>
    )
}