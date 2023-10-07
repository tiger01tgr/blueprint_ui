import LoginForm from '../auth/LoginForm/LoginForm';
import styles from './page.module.css';

const LoginPage = () => {
    return (
        <div className={styles.liner}>
            <LoginForm />
        </div>
    )
}

export default LoginPage