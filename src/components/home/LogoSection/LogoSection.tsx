import styles from './LogoSection.module.css'
import Image from 'next/image'

const LogoSection = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                10,000+ questions from industry leaders & high-growth start-ups
            </div>
            <div className={styles.logos}>
                <div className={styles.logosParent}>
                    <div className={styles.logosSlide}>
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                    </div>
                    <div className={styles.logosSlide}>
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                        <img src="https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png" alt="amazon" className={styles.logo} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSection