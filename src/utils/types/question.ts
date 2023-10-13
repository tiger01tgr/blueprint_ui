export interface Question {
    id: string;
    text: string;
    timeLimit: string;
}

export interface QuestionSetBase {
    id: number;
    name: string;
    employerName: string;
    employerId: number;
    roleName: string;
    roleId: number;
    interviewType: string;
}

export interface QuestionSet extends QuestionSetBase {
    logo: string;
    industryName: string;
    industryId: number;
}

export interface QuestionSetWithQuestions extends QuestionSetBase {
    questions: Question[];
}