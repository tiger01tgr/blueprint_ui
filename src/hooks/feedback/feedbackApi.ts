import { FeedbackSet } from "@/utils/types/feedback"
import { Feedback } from "@/utils/types/feedback"

const parseFeedbackSet = (feedbackSet: any): FeedbackSet => {
    return {
        id: feedbackSet.id,
        practiceSessionId: feedbackSet.practice_session_id,
        questionSetId: feedbackSet.question_set_id,
        userId: feedbackSet.user_id,
        questionSetName: feedbackSet.question_set_name,
        employerLogo: feedbackSet.employer_logo,
        employerName: feedbackSet.employer_name,
        seen: feedbackSet.seen,
        createdAt: new Date(feedbackSet.created_at)
    }
}

export const getAllFeedbackForUser = async (token: string): Promise<FeedbackSet[] | null> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/feedback', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    if (!response.ok) throw new Error('Error occurred')
    const json = await response.json()
    const feedbackSets = [] as FeedbackSet[]
    json.map((feedbackSet: any) => {
        feedbackSets.push(parseFeedbackSet(feedbackSet))
    })
    return feedbackSets
}

const parseFeedbackEntry = (feedbackEntry: any): Feedback => {
    return {
        id: feedbackEntry.id,
        feedbackText: feedbackEntry.feedback,
        feedbackSetId: feedbackEntry.feedback_id,
        questionId: feedbackEntry.question_id,
        questionText: feedbackEntry.question_text,
        timeLimit: feedbackEntry.time_limit,
        video: feedbackEntry.video_url
    }
}

export const getFeedbackBySessionId = async (token: string, practiceSessionId: number): Promise<Feedback[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback/${practiceSessionId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    if (!response.ok) throw new Error('Error occurred')
    const json = await response.json()
    const feedback = [] as Feedback[]
    json.map((feedbackEntry: any) => {
        feedback.push(parseFeedbackEntry(feedbackEntry))
    })
    return feedback
}