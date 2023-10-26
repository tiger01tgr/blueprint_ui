export interface FeedbackSet {
    id: number;
    practiceSessionId: number;
    questionSetId: number;
    userId: number;
    questionSetName: string;
    employerLogo: string;
    employerName: string;
    questionSetType: string;
    seen: boolean;
    createdAt: Date;
}

export interface Feedback {
    id: number;
    feedbackText: string;
    feedbackSetId: number;
    questionId: number;
    questionText: string;
    timeLimit: number;
    video: string;
}