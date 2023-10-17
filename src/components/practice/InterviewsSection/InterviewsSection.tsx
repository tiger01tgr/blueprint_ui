import InterviewCard from '@/components/shared/cards/InterviewCard/InterviewCard'
import { QuestionSet } from '@/utils/types/question'
import styles from './InterviewsSection.module.css'

interface Props {
    sets: QuestionSet[]
}

const InterviewsSection: React.FC<Props> = ({ sets }) => {
    return (
        <div className={styles.liner}>
            {sets.map((interview : QuestionSet, index:  number) => (
                <InterviewCard 
                    key={index} 
                    id={interview.id} 
                    employerLogo={interview.logo} 
                    employerName={interview.employerName} 
                    position={interview.name}
                    type={interview.interviewType}
                    />
            ))}
        </div>
    )
}

export default InterviewsSection