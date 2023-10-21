export interface Session {
    id: number;
    questionSetId: number;
    currentQuestionId: number;
    lastAnsweredQuestionId: number;
    userId: number;
    status: string;
}