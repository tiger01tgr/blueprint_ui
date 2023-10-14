import { Group } from '@mantine/core'
import styles from './SignInWithButton.module.css'
import { FcGoogle } from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebase';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';
import { createUserAccount } from '@/hooks/auth/authApi';
import useAuth from '@/hooks/auth/useAuth';

export interface SocialIcon {
    id: string,
    icon: IconType,
    text: string,
    signIn: () => void,
}


export const SignInWithButton = () => {
    const router = useRouter()
    const { getBearerToken } = useAuth()
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
        const success = await signIn()
        if (success) {
            const userInfo = success._tokenResponse
            const name = userInfo.fullName ? userInfo.fullName : userInfo.displayName
            const firstName = userInfo.firstName ? userInfo.firstName : name.split(' ')[0]
            const lastName = userInfo.lastName ? userInfo.lastName : name.split(' ')[1]
            const middleName = ""
            const email = userInfo.email
            const token = await getBearerToken()
            try {
                await createUserAccount(email, firstName, lastName, middleName, token)
            } catch (error) {
                console.log('shit')
            }
            router.push('/profile')
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