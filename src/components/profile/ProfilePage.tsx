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
                firstName: 'Tiger',
                middleName: '',
                lastName: 'Li',
                email: 'tiger01tgr@gmail.com',
                position: 'Software Engineer',
                company: 'Okta',
                school: 'Vanderbilt University',
                major: 'Computer Science',
                phone: '6155738833'
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
            setCurrentUser(user1)
            const userFeedback: FeedbackSet[] = [
                {
                    id: '123980128921',
                    interviewSetName: 'Stripe Winter 2023',
                    type: 'Technical',
                    interviewPosition: 'Software Engineer',
                    interviewEmployerLogo: 'https://blueprint-prod-1234.s3.amazonaws.com/company-logos/logo-Stripe.png',
                    feedbackGivenTime: new Date(Date.now() - 1 * 4 * 60 * 1000),
                    feedback: [
                        {
                            questionText: 'What’s the difference between horizontal and vertical scaling?',
                            response: 'https://blueprint-prod-1234.s3.amazonaws.com/user-videos/v1.m4v',
                            feedbackText: 'Your explanation of the difference between horizontal and vertical scaling was clear and concise, but to enhance it, consider providing concrete examples, offering a more in-depth comparative analysis of when to use each method, mentioning additional factors that influence the choice, and noting that a combination of both strategies is often used in practice. Visual aids, if possible, could further assist in conveying these concepts effectively. To improve your tone, consider adopting a more confident and assured manner in your responses, which can enhance your overall communication. Great job overall!'
                        },
                        {
                            questionText: 'Design an API rate limiter.',
                            response: 'https://blueprint-prod-1234.s3.amazonaws.com/user-videos/v2.m4v',
                            feedbackText: 'Your response to the task of designing an API rate limiter was exemplary. You presented your design in a clear and structured manner, which makes it easy to understand and implement. You covered essential aspects like request tracking, rate limits, and handling of exceeded limits effectively. Additionally, you considered the potential use of a token bucket algorithm, which is a well-suited solution for rate limiting. Your clear and concise explanation demonstrates a deep understanding of the topic, and your design is highly practical. Excellent job!'
                        },
                        {
                            questionText: 'Design a limit order book for trading systems.',
                            response: 'https://blueprint-prod-1234.s3.amazonaws.com/user-videos/v3.m4v',
                            feedbackText: 'It appears that your response to designing a limit order book for trading systems may require further improvement. I suggest revisiting your understanding of trading order systems and secure payment mechanisms. Consider delving deeper into the intricacies of limit order books, their components, and their interactions within trading systems. Additionally, emphasize the importance of security measures and how to safeguard payment information within this context. A more comprehensive exploration of these topics will help you develop a more robust and well-informed design. Keep up the effort, and with more research and practice, your designs will improve. When speaking too fast, remember to pace yourself and take deliberate pauses between key points, allowing your audience to absorb the information effectively.'
                        },
                        {
                            questionText: 'How would you address data scalability, performance optimization, and high availability in your system design?',
                            response: 'https://blueprint-prod-1234.s3.amazonaws.com/user-videos/v4.m4v',
                            feedbackText: 'Your response effectively covered data scalability and high availability aspects in your system design, which is commendable. However, there is room for improvement in the performance optimization section. To enhance your response, consider delving into more specific strategies for performance optimization, such as caching mechanisms, database indexing, load balancing, and efficient query processing. Explain how these strategies can be applied to improve system performance. Additionally, it’s beneficial to highlight the trade-offs and challenges associated with each approach. This will provide a more well-rounded understanding of performance optimization within your system design. Overall, your response is on the right track, and refining the performance optimization section will make it even more comprehensive. Be mindful of maintaining a consistent and moderate pace throughout your response, as this ensures clarity and engagement for the audience. Keep up the good work!'
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