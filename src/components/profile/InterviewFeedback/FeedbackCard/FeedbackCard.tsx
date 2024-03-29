'use client'
import styles from './FeedbackCard.module.css'
import Image from 'next/image'
import FeedbackCardModal from './FeedbackCardModal/FeedbackCardModal'
import timeAgo from '@/utils/timeAgo'
import { FeedbackSet } from '@/utils/types/feedback'

interface Props {
    feedbackSet: FeedbackSet
}

const FeedbackCard = ({ feedbackSet }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.topSection}>
                <div className={styles.header}>
                    <div className={styles.imageWrapper}>
                        <Image alt='logo' src={feedbackSet.employerLogo} width={80} height={80} />
                    </div>
                    <div className={styles.tag}>
                        {feedbackSet.questionSetType}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.setName}>
                        {feedbackSet.questionSetName}
                    </div>
                    <div className={styles.employer}>
                        {feedbackSet.employerName}
                    </div>
                </div>
            </div>
            <div className={styles.buttonSection}>
                <div className={styles.time}>
                    {timeAgo(feedbackSet.createdAt)}
                </div>
                <FeedbackCardModal feedbackSet={feedbackSet}/>
            </div>
        </div>
    )
}

export default FeedbackCard