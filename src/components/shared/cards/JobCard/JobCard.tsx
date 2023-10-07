import Image from 'next/image'
import Link from 'next/link'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import styles from './JobCard.module.css'
import JobCardModal from './JobCardModal/JobCardModal'

const JobCard = (props: any) => {
    return (
        <div className={styles.liner}>
            <div className={styles.header}>
                <Image alt='logo' src={props.employerLogo} width={80} height={80} />
                <div className={styles.tag}>
                    {props.type}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.position}>
                    {props.position}
                </div>
                <div className={styles.company}>
                    {props.employerName}
                </div>
            </div>
            <div className={styles.buttonSection}>
                <Link href={`/practice/${props.interviewId}`}>
                    <button className={styles.interviewButton}>
                        <BsFillLightningChargeFill />
                        <div>
                            Practice
                        </div>
                    </button>
                </Link>
                <JobCardModal {...props}/>
            </div>
        </div>
    )
}

export default JobCard