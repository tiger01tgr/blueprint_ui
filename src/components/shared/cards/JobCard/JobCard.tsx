import Image from 'next/image'
import Link from 'next/link'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import styles from './JobCard.module.css'
import JobCardModal from './JobCardModal/JobCardModal'
import { Job } from '@/utils/types/job'

interface Props {
    job: Job;
}

const JobCard = ({ job }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.header}>
                <div className={styles.imageWrapper}>
                    <Image alt='logo' src={job.logo} width={80} height={80} />
                </div>
                <div className={styles.tag}>
                    {job.jobType}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.position}>
                    {job.name}
                </div>
                <div className={styles.company}>
                    {job.employerName}
                </div>
            </div>
            <div className={styles.buttonSection}>
                <Link href={`/practice/${job.questionSetId}`}>
                    <button className={styles.interviewButton}>
                        <BsFillLightningChargeFill />
                        <div>
                            Practice
                        </div>
                    </button>
                </Link>
                <JobCardModal description={job.description} />
            </div>
        </div>
    )
}

export default JobCard