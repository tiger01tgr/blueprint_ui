import styles from './QuestionFeedbackCard.module.css'
import { Feedback } from '@/utils/types/feedback'

interface Props {
    feedback: Feedback;
    index: number;
    totalQuestions: number;
}

const QuestionFeedbackCard = ({ feedback, index, totalQuestions }: Props) => {
    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                Question {index} of {totalQuestions}
            </div>
            <div className={styles.question}>
                <div className={styles.label}>
                    Question:
                </div>
                {feedback.questionText}
            </div>
            <div className={styles.video}>
                <video controls width="640" height="360">
                    <source src={feedback.response} type="video/mp4" />
                </video>
            </div>
            <div className={styles.feedback}>
                <div className={styles.label}>
                    Feedback:
                </div>
                {feedback.feedbackText}
            </div>
        </div>
    )
}

export default QuestionFeedbackCard