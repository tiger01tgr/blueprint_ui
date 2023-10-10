import Link from 'next/link'
import styles from './InterviewFeedback.module.css'
import FeedbackCard from './FeedbackCard/FeedbackCard'

interface Props {
    feedbackSet: FeedbackSet[] | null
}

const InterviewFeedback = ({ feedbackSet }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                Interview Feedback
            </div>
            {!feedbackSet
                ?
                <Link href='/practice' className={styles.practiceMore}>Practice some inteviews!</Link>
                :
                <div className={styles.feedbackGrid}>
                    {feedbackSet.map((feedback, index) => (
                        <FeedbackCard key={index} feedbackSet={feedback}/>
                    ))}
                </div>
            }
        </div>
    )
}

export default InterviewFeedback