import styles from './InterviewCard.module.css'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const InterviewCard = (props: any) => {
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
        <Link href={`/practice/${props.id}`}>
          <button className={styles.interviewButton}>
            <BsFillLightningChargeFill />
            <div>
              Interview
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default InterviewCard