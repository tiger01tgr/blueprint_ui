'use client'
import Link from 'next/link'
import styles from './LoginForm.module.css'
import { Google, SocialIcon } from '../SignIns/SocialIconConfig'
import { SignInWithButton } from '../SignIns/SignInWithButton'

const buttons: SocialIcon[] = [
    Google
]

const LoginForm = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.input}>
                <div className={styles.inputText}>
                    Email Address
                </div>
                <input className={styles.longInput} placeholder='Email Address' />
            </div>
            <div className={styles.input}>
                <div className={styles.inputText}>
                    Password
                </div>
                <input type="password" className={styles.longInput} placeholder='Password' />
            </div>
            <button className={styles.signInButton}>
                Sign in
            </button>
            <div className={styles.loginSection}>
                <span>
                    Don&apos;t have an account? <Link href='/register' className={styles.loginLink}> Register </Link>
                    or sign up with Google below.
                </span>
            </div>
            <div className={styles.iconButtonSection}>
                {buttons.map((social) => (
                    <SignInWithButton key={social.id} props={social} />
                ))}
            </div>
        </div>
    )
}

export default LoginForm