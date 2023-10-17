import React, { useState, useEffect } from 'react'
import { getPracticeSets, getInterviewQuestions, getPracticeSetsWithFilter } from './practiceApi'
import { QuestionSet, QuestionSetAllData, QuestionSetWithQuestions } from '@/utils/types/question'


interface GetPracticeSetsByPageProps {
    limit: number;
    page: number;
}

interface GetPracticeSetsByPageReturn {
    sets: QuestionSet[];
    pages: number;
}

interface GetPracticeSetsByFilterProps {
    limit: number;
    page: number;
    companies: number[];
    industries: number[];
    roles: number[];
    interviewTypes: string[];
}

interface GetPracticeSetsByFilterReturn {
    sets: QuestionSet[];
    pages: number;
}

const usePractice = () => {

    const getPracticeSetsByPage = async ({ limit, page }: GetPracticeSetsByPageProps): Promise<GetPracticeSetsByPageReturn | undefined> => {
        const data = await getPracticeSets({ limit, page })
        const sets = data.practiceSets
        const pages = data.pagination.totalPages
        return { sets, pages }
    }

    const getPracticeSetsByFilter = async ({ limit, page, companies, industries, roles, interviewTypes }: GetPracticeSetsByFilterProps): Promise<GetPracticeSetsByFilterReturn | undefined> => {
        const data = await getPracticeSetsWithFilter({ limit, page, companies, industries, roles, interviewTypes })
        const sets = data.practiceSets
        const pages = data.pagination.totalPages
        return { sets, pages }
    }

    const getQuestionSetWithQuestions = async (id: string): Promise<QuestionSetWithQuestions | undefined> => {
        return await getInterviewQuestions(id)
    }

    return {
        getPracticeSetsByPage,
        getQuestionSetWithQuestions,
        getPracticeSetsByFilter
    }
}

export default usePractice