import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.line}/>
            <div className={styles.footerSection} >
                <div className={styles.copyright}>
                    © 2023 Bluprint. All rights reserved.
                </div>
                <div className={styles.terms}>
                    <Link href='/terms' className={styles.link}>
                        Terms of Use
                    </Link>
                    &
                    <Link href='/privacy' className={styles.link}>
                        Privacy
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer