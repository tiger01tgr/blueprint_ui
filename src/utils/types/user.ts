export interface User {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    position: string;
    employer: string;
    school: string;
    major: string;
    phone: string;
    resume: string;
    type_of_user: string;
    highestDegree?: string;
}