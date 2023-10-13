'use client'
import RegisterForm from '../auth/RegisterForm/RegisterForm';
import { SignInWithButton } from '../auth/SignIns/SignInWithButton';
import styles from './page.module.css';

const RegisterPage = () => {
    return (
        <div className={styles.liner}>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage