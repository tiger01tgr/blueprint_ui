interface User {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    position?: string;
    company?: string;
    school?: string;
    major?: string;
    phone?: string;
    resume?: string;
}

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
