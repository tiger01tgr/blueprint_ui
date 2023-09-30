import EmailPasswordInput from '@/components/auth/SignInWidgets/EmailPasswordInput/EmailPasswordInput';
import SignInWidgets from '@/components/auth/SignInWidgets/SignInWidgets';
import {Button} from '@nextui-org/button'; 
import { Input } from '@nextui-org/react';
import styles from './page.module.css';

export default function Login() {
  return (
    <div className={styles.main}>
        {/* <EmailPasswordInput /> */}
        <SignInWidgets />
    </div>
  )
}