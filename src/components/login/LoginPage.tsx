import styles from './page.module.css';
import LoginForm from '../auth/LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div className={styles.liner}>
            <LoginForm />
        </div>
    )
}

export default LoginPage