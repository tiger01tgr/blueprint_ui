import { Feedback, FeedbackSet } from "@/utils/types/feedback"
import { getAllFeedbackForUser, getFeedbackBySessionId } from "./feedbackApi"

const useFeedback = () => {
    const getAllFeedback = async (token: string): Promise<FeedbackSet[]> => {
        if (!token) { return [] }
        const feedbackSet = await getAllFeedbackForUser(token)
        if (feedbackSet) {
            return feedbackSet
        }
        return []
    }

    const getFeedback = async (token: string, practiceSessionId: number): Promise<Feedback[]> => {
        if (!token || !practiceSessionId) { return [] }
        const feedback = await getFeedbackBySessionId(token, practiceSessionId)
        if (feedback) {
            return feedback
        }
        return []
    }

    return {
        getAllFeedback,
        getFeedback
    }
}

export default useFeedback