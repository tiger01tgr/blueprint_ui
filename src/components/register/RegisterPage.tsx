import RegisterForm from '../auth/RegisterForm/RegisterForm';
import styles from './page.module.css';

const RegisterPage = () => {
    return (
        <div className={styles.liner}>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage