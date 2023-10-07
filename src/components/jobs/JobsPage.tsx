'use client'
import styles from './page.module.css'
import JobsBanner from './JobsBanner/JobsBanner'
import JobsSection from './JobsSection/JobsSection'

const JobsPage = () => {
    return (
        <div className={styles.liner}>
            <JobsBanner />
            <JobsSection />
        </div>
    )
}

export default JobsPage