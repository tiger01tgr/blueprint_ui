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