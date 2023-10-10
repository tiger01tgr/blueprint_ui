'use client'
import styles from './FeedbackCard.module.css'
import Image from 'next/image'
import FeedbackCardModal from './FeedbackCardModal/FeedbackCardModal'

interface Props {
    feedbackSet: FeedbackSet
}

const FeedbackCard = ({ feedbackSet }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.header}>
                <Image alt='logo' src={feedbackSet.interviewEmployerLogo} width={120} height={100} />
                <div className={styles.tag}>
                    {feedbackSet.type}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.position}>
                    {feedbackSet.interviewSetName}
                </div>
                <div className={styles.company}>
                    {feedbackSet.interviewPosition}
                </div>
            </div>
            <div className={styles.buttonSection}>
                <FeedbackCardModal feedbackSet={feedbackSet}/>
            </div>
        </div>
    )
}

export default FeedbackCard