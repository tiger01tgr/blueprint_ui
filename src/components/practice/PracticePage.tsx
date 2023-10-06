'use client'
import InterviewsSection from './InterviewsSection/InterviewsSection'
import PracticeBanner from './PracticeBanner/PracticeBanner'
import styles from './page.module.css'

const PracticePage = () => {
    return (
        <div className={styles.liner}>
            <PracticeBanner />
            <InterviewsSection />
        </div>
    )
}

export default PracticePage