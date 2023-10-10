'use client'
import styles from './FeedbackCard.module.css'
import Image from 'next/image'
import FeedbackCardModal from './FeedbackCardModal/FeedbackCardModal'
import timeAgo from '@/utils/timeAgo'

interface Props {
    feedbackSet: FeedbackSet
}

const FeedbackCard = ({ feedbackSet }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.topSection}>
                <div className={styles.header}>
                    <Image alt='logo' src={feedbackSet.interviewEmployerLogo} width={120} height={100} />
                    <div className={styles.tag}>
                        {feedbackSet.type}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.setName}>
                        {feedbackSet.interviewSetName}
                    </div>
                    <div className={styles.position}>
                        {feedbackSet.interviewPosition}
                    </div>
                </div>
            </div>
            <div className={styles.buttonSection}>
                <div className={styles.time}>
                    {timeAgo(feedbackSet.feedbackGivenTime)}
                </div>
                <FeedbackCardModal feedbackSet={feedbackSet} />
            </div>
        </div>
    )
}

export default FeedbackCard