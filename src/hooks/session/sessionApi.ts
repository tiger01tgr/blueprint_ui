import { Session } from "@/utils/types/session"

const parseSession = (session: any): Session => {
    return {
        id: session.id,
        questionSetId: session.question_set_id,
        currentQuestionId: session.current_question_id,
        lastAnsweredQuestionId: session.last_answered_question_id,
        userId: session.user_id,
        status: session.status,
    }
}

export const getCurrentSessionById = async (token: string, questionSetId: number): Promise<Session | null> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/sessions/' + questionSetId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    if (!response.ok) {
        console.log(response)
        if (response.statusText === "Not Found") {
            console.log('Not found')
            return null
        }
        console.log('Error occurred')
        throw new Error('Error occurred')
    }
    if (response.statusText === "Not Found") {
        return null
    }
    return parseSession(await response.json())
}

export const createSessionWithId = async (token: string, questionSetId: number): Promise<null> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/sessions/' + questionSetId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    })
    if (!response.ok) throw new Error('Error occurred')
    return null
}

export const submitQuestionWithId = async (token: string, questionSetId: number, sessionId: number, questionId: number, video: File): Promise<null> => {

    const url = process.env.NEXT_PUBLIC_API_URL + '/sessions/' + questionSetId + '/' + sessionId + '/' + questionId
    const formData = new FormData()
    formData.append('video', video)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        body: formData
    })
    if (!response.ok) throw new Error('Error occurred')
    return null
}