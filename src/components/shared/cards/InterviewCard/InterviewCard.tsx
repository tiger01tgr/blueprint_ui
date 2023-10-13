import styles from './InterviewCard.module.css'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: number,
  employerName: string,
  employerLogo: string,
  position: string,
  type: string,
}

const InterviewCard: React.FC<Props> = ({ id, employerLogo, employerName, position, type }) => {
  return (
    <div className={styles.liner}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image alt='logo' src={employerLogo} width={80} height={80} />
        </div>
        <div className={styles.tag}>
          {type}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.position}>
          {position}
        </div>
        <div className={styles.company}>
          {employerName}
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Link href={`/practice/${id}`}>
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