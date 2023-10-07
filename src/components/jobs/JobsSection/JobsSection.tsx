import JobCard from '@/components/shared/cards/JobCard/JobCard'
import styles from './JobsSection.module.css'

const jobs: any[] = [
    {
        id: "MS123123321",
        employerName: "Morgan Stanley",
        employerLogo: "http://via.placeholder.com/100x100",
        position: "Summer 2024 Fixed Income Summer Analyst",
        type: "Full-time", 
        interviewId: "MS123",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "OKTA23213",
        employerName: "Okta",
        employerLogo: "http://via.placeholder.com/100x100",
        position: "Summer 2024 Software Engineering Intern",
        type: "Part-time",
        interviewId: "OKTA23T",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "OKTA23FD",
        employerName: "Okta",
        employerLogo: "http://via.placeholder.com/100x100",
        position: "Summer 2024 Software Engineering Intern",
        type: "Full-time",
        interviewId: "OKTA23B",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "GS23TD123",
        employerName: "Goldman Sachs",
        employerLogo: "http://via.placeholder.com/100x100",
        position: "Summer Analyst",
        type: "Full-time",
        interviewId: "GS23T",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "GOOGL23BBA",
        employerName: "Google",
        employerLogo: "http://via.placeholder.com/100x100",
        position: "Associate Product Manager",
        type: "Full-time",
        interviewId: "GOOGL23B",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

const JobsSection = () => {
    return (
        <div className={styles.liner}>
            {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
            ))}
        </div>
    )
}

export default JobsSection