import { Session } from "@/utils/types/session"
import { createSessionWithId, getCurrentSessionById, submitQuestionWithId } from "./sessionApi"

const useSessions = () => {

    const getSession = async (token: string, questionSetId: number): Promise<Session | null> => {
        if (!token || !questionSetId) { return null }
        const session = await getCurrentSessionById(token, questionSetId)
        .catch((error) => {
            console.log(error)
            return null
        })
        return session
    }

    const createSession = async (token: string, questionSetId: number): Promise<null> => {
        if (!token || !questionSetId) { return null }
        await createSessionWithId(token, questionSetId)
        .catch((error) => {
            console.log(error)
        })
        return null
    }

    const submitQuestion = async (token: string, questionSetId: number, sessionId: number, questionId: number, video: File): Promise<null> => {
        if (!token || !questionSetId || !sessionId || !questionId || !video) { return null }
        await submitQuestionWithId(token, questionSetId, sessionId, questionId, video)
        .catch((error) => {
            console.log(error)
        })
        return null
    }

    return {
        getSession,
        createSession,
        submitQuestion
    }
}

export default useSessions