interface FeedbackSet {
    id: string;
    feedback: Feedback[];
    type: string;
    interviewSetName: string;
    interviewPosition: string;
    interviewEmployerLogo: string;
    feedbackGivenTime: Date;
}

interface Feedback {
    questionText: string;
    response: string;
    feedbackText: string;
}
