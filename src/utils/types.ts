interface Question {
    id: string;
    text: string;
    timeLimit: string;
}

interface QuestionSet {
    id: string;
    employerId: string;
    role: string;
    interviewType: string;
    questions: Question[];
}

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
}

interface Feedback {
    questionText: string;
    response: string;
    feedbackText: string;
}