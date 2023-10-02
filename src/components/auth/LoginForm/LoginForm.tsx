'use client'
import styles from './LoginForm.module.css'
import { SignInWithGoogle } from '../SignIns/SignInWithGoogle/SignInWithGoogle'

const LoginForm = () => {
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
            <div className={styles.iconButtonSection}>
                <SignInWithGoogle />
            </div>
        </div>
    )
}

export default LoginForm