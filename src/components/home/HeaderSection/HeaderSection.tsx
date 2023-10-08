import Link from 'next/link'
import styles from './HeaderSection.module.css'

const HeaderSection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.titleSection}>
                <div className={styles.title}>
                    Mock Interviews with AI
                </div>
                <div className={styles.subtitle}>
                    Practice interviewing anywhere, anytime. Submit an asynchronous mock interview and get customized, same day AI-feedback that helps you turn interviews into offers.
                </div>
            </div>
            <div className={styles.buttonSection}>
                <Link href='/practice'>
                    <button className={styles.interviewButton}>
                        <div className={styles.interviewButtonText}>
                            <div className={styles.interviewButtonMainText}>
                                Interview now
                            </div>
                            <div className={styles.interviewButtonSubText}>
                                — it&apos;s free
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeaderSection

