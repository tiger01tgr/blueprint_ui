import Link from 'next/link'
import styles from './InterviewFeedback.module.css'
import FeedbackCard from './FeedbackCard/FeedbackCard'
import { FeedbackSet } from '@/utils/types/feedback'

interface Props {
    feedbackSets: FeedbackSet[] | null
}

const InterviewFeedback = ({ feedbackSets }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                Interview Feedback
            </div>
            {(!feedbackSets || feedbackSets.length === 0)
                ?
                <div className={styles.practiceLiner}>
                    <Link href='/practice' className={styles.practiceMore}>Practice some interviews!</Link>
                </div>
                :
                <div className={styles.feedbackGrid}>
                    {feedbackSets.map((feedback, index) => (
                        <FeedbackCard key={index} feedbackSet={feedback}/>
                    ))}
                </div>
            }
        </div>
    )
}

export default InterviewFeedback