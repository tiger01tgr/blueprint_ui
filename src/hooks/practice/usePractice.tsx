import React, { useState, useEffect } from 'react'
import { getPracticeSets, getInterviewQuestions } from './practiceApi'
import { QuestionSet, QuestionSetAllData, QuestionSetWithQuestions } from '@/utils/types/question'


interface GetPracticeSetsByPageProps {
    limit: number;
    page: number;
}

interface GetPracticeSetsByPageReturn {
    sets: QuestionSet[];
    pages: number;
}

const usePractice = () => {

    const [practiceSetsByPage, setPracticeSetsByPage] = useState<GetPracticeSetsByPageReturn[]>([])

    const getPracticeSetsByPage = async ({ limit, page }: GetPracticeSetsByPageProps): Promise<GetPracticeSetsByPageReturn | undefined> => {
        const data = await getPracticeSets({ limit, page })
        const sets = data.practiceSets
        const pages = data.pagination.totalPages
        return { sets, pages }
    }

    const getQuestionSetWithQuestions = async (id: string): Promise<QuestionSetWithQuestions | undefined> => {
        return await getInterviewQuestions(id)
    }

    return {
        getPracticeSetsByPage,
        getQuestionSetWithQuestions
    }
}

export default usePractice