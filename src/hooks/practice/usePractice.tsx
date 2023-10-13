import React, { useState, useEffect } from 'react'
import { getAllPracticeSets, getInterviewQuestions } from './practiceApi'
import { QuestionSet, QuestionSetWithQuestions } from '@/utils/types/question'

const usePractice = () => {

    const [ practiceSets, setPracticeSets ] = useState<QuestionSet[]>([])

    useEffect(() => {
        getAllPracticeSets()
            .then((practiceSets: QuestionSet[]) => {
                setPracticeSets(practiceSets)
            })
            .catch((error: any) => {
                console.log(error)
            })
    }, [])

    const getQuestionSetWithQuestions = async (id: string): Promise<QuestionSetWithQuestions | undefined> => {
        return await getInterviewQuestions(id)
    }

    return {
        allPracticeSets: practiceSets,
        getQuestionSetWithQuestions
    }
}

export default usePractice