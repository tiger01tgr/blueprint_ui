import JobCard from '@/components/shared/cards/JobCard/JobCard'
import { Job } from '@/utils/types/job'
import styles from './JobsSection.module.css'

interface Props {
    jobs: Job[]
}

const JobsSection = ({ jobs }: Props) => {
    return (
        <div className={styles.liner}>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    )
}

export default JobsSection