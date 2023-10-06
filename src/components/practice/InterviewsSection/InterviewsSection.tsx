import InterviewCard from '@/components/shared/cards/InterviewCard/InterviewCard'
import styles from './InterviewsSection.module.css'

const InterviewsSection = () => {
    const Interviews:any[] = [
        {
            id: "MS23T",
            employerName: "Morgan Stanley",
            employerLogo: "http://via.placeholder.com/100x100",
            position: "Summer 2024 Fixed Income Summer Analyst",
            type: "Technical"
        },
        {
            id: "OKTA23T",
            employerName: "Okta",
            employerLogo: "http://via.placeholder.com/100x100",
            position: "Summer 2024 Software Engineering Intern",
            type: "Technical"
        },
        {
            id: "OKTA23B",
            employerName: "Okta",
            employerLogo: "http://via.placeholder.com/100x100",
            position: "Summer 2024 Software Engineering Intern",
            type: "Behavioral"
        },
        {
            id: "GS23T",
            employerName: "Goldman Sachs",
            employerLogo: "http://via.placeholder.com/100x100",
            position: "Summer Analyst",
            type: "Technical"
        },
        {
            id: "GOOGL23B",
            employerName: "Google",
            employerLogo: "http://via.placeholder.com/100x100",
            position: "Associate Product Manager",
            type: "Behavioral"
        }
    ]

    return (
        <div className={styles.liner}>
            {Interviews.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
            ))}
        </div>
    )
}

export default InterviewsSection