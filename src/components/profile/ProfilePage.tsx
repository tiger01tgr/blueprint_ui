'use client'
import React, { useEffect, useState, useCallback } from 'react'
import styles from './page.module.css'
import InformationSection from './InformationSection/InformationSection'
import InterviewFeedback from './InterviewFeedback/InterviewFeedback'

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [userFeedback, setUserFeedback] = useState<FeedbackSet[] | null>(null)

    useEffect(() => {
        async function getUserData() {
            const user1: User = {
                id: '123321123',
                firstName: 'John',
                middleName: '',
                lastName: 'Doe',
                email: 'johndoe817@gmail.com',
                position: 'Engineer',
                company: 'Intel',
                school: 'Vanderbilt University',
                major: 'Electrical Engineering'
            }
            const user2: User = {
                id: '123890123',
                firstName: 'Mostnamescanbeuptothis',
                middleName: '',
                lastName: 'Park',
                email: 'sarahpsffdsasfark9@gmail.com',
                school: 'Vanderbilt University',
                phone: '5032942438',
                // major: 'Computer Science',
                resume: 'https://youtube.com'
            }
            setCurrentUser(user2)
            const userFeedback: FeedbackSet[] = [
                {
                    id: '123980128921',
                    interviewSetName: 'Okta Winter 2023',
                    type: 'Technical',
                    interviewPosition: 'Software Engineering Intern',
                    interviewEmployerLogo: 'https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png',
                    feedbackGivenTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                    feedback: [
                        {
                            questionText: 'How would you design Doordash? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        },
                        {
                            questionText: 'How would you design Instacart? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    ]
                },
                {
                    id: '123980128921',
                    interviewSetName: 'Okta Winter 2023',
                    type: 'Technical',
                    interviewPosition: 'Summer 2024 Fixed Income Summer Analyst',
                    interviewEmployerLogo: 'https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png',
                    feedbackGivenTime: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
                    feedback: [
                        {
                            questionText: 'How would you design Doordash? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        },
                        {
                            questionText: 'How would you design Instacart? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    ]
                },
                {
                    id: '123980128921',
                    interviewSetName: 'Okta Winter 2023',
                    type: 'Technical',
                    interviewPosition: 'Software Engineering Intern',
                    interviewEmployerLogo: 'https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png',
                    feedbackGivenTime: new Date(Date.now() - 12 * 60 * 60 * 1000),
                    feedback: [
                        {
                            questionText: 'How would you design Doordash? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        },
                        {
                            questionText: 'How would you design Instacart? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    ]
                },
                {
                    id: '123980128921',
                    interviewSetName: 'Okta Winter 2023',
                    type: 'Technical',
                    interviewPosition: 'Software Engineering Intern',
                    interviewEmployerLogo: 'https://blueprint-dev-1234.s3.amazonaws.com/company-logos/logo-Okta.png',
                    feedbackGivenTime: new Date(Date.now() - 1 * 1 * 5 * 1000),
                    feedback: [
                        {
                            questionText: 'How would you design Doordash? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        },
                        {
                            questionText: 'How would you design Instacart? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            response: 'https://www.youtube.com/',
                            feedbackText: 'You did a great job communicating but you could improve Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    ]
                }
            ]
            setUserFeedback(userFeedback)
        }
        getUserData()
    }, [])

    const renderUserInfo = useCallback(() => (
        <InformationSection user={currentUser} />
    ), [currentUser])

    const renderInterviewFeedback = useCallback(() => (
        <InterviewFeedback feedbackSet={userFeedback} />
    ), [userFeedback])

    return (
        <div className={styles.liner}>
            {renderUserInfo()}
            {renderInterviewFeedback()}
        </div>
    )
}

export default ProfilePage