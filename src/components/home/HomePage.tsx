'use client'
import styles from './page.module.css'
import { useGlobalAuthContext } from '@/contexts'

const HomePage = () => {
  const { user } = useGlobalAuthContext();
  console.log(user)
  return (
    <div className={styles.liner}>
      <div className={styles.title}>
        Mock Interviews with AI
      </div>
    </div>
  )
}

export default HomePage