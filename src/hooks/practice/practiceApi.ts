import { Question, QuestionSet, QuestionSetWithQuestions } from '../../utils/types/question'; 
const parsePracticeSet = (practiceSet: any): QuestionSet => {
    return {
        id: practiceSet.id,
        name: practiceSet.name,
        logo: practiceSet.logo,
        employerName: practiceSet.employer,
        employerId: practiceSet.employerId,
        roleName: practiceSet.role,
        roleId: practiceSet.roleId,
        industryName: practiceSet.industry,
        industryId: practiceSet.industryId,
        interviewType: practiceSet.interviewType,
    }
}

export const getAllPracticeSets = async (): Promise<QuestionSet[]> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/practice/?query=all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) throw new Error('Error occurred');

    const json = await response.json()
    const practiceSets = [] as QuestionSet[]
    json.map((practiceSet: any) => {
        practiceSets.push(parsePracticeSet(practiceSet))
    })
    return practiceSets;
}

const parseQuestion = (question: any): Question => {
    return {
        id: question.id,
        text: question.text,
        timeLimit: question.timelimit,
    }
}

const parseQuestionSetWithQuestions = (practiceSet: any): QuestionSetWithQuestions => {
    const questions = [] as Question[]
    practiceSet.questions.map((question: any) => {
        questions.push(parseQuestion(question))
    })
    const questionSet: QuestionSetWithQuestions = {
        id: practiceSet.id,
        name: practiceSet.name,
        employerName: practiceSet.employer,
        employerId: practiceSet.employerId,
        roleName: practiceSet.role,
        roleId: practiceSet.roleId,
        interviewType: practiceSet.interviewType,
        questions: questions
    }
    return questionSet;
}

export const getInterviewQuestions = async (practiceSetId: string): Promise<QuestionSetWithQuestions> => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/practice/' + practiceSetId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) throw new Error('Error occurred');
    return parseQuestionSetWithQuestions(await response.json());
}