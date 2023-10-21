export interface Question {
    id: number;
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

export interface QuestionSetPagination {
    totalPages: number;
    currentPage: number;
    limit: number;
}

export interface QuestionSetAllData {
    practiceSets: QuestionSet[];
    pagination: QuestionSetPagination;
}