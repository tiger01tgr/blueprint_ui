'use client'
import Link from 'next/link'
import styles from './RegisterForm.module.css'
import { Google, SocialIcon } from '../SignIns/SocialIconConfig'
import { SignInWithButton } from '../SignIns/SignInWithButton'

const buttons: SocialIcon[] = [
    Google
]

const RegisterForm = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.nameSection}>
                <div className={styles.input}>
                    <div className={styles.inputText}>
                        First Name
                    </div>
                    <input className={styles.shortInput} placeholder='First Name' />
                </div>
                <div className={styles.input}>
                    <div className={styles.inputText}>
                        Last Name
                    </div>
                    <input className={styles.shortInput} placeholder='Last Name' />
                </div>
            </div>
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
            <button className={styles.registerButton}>
                Register
            </button>
            <div className={styles.loginSection}>
                <span>
                    Already have an account? <Link href='/login' className={styles.loginLink}> Log in </Link>
                    or sign in with Google below.
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

export default RegisterForm