export interface JobBase {
    id: number;
    name: string;
    employerName: string;
    employerId: number;
    roleName: string;
    roleId: number;
    jobType: string;
    description: string;
}

export interface Job extends JobBase {
    logo: string;
    industryName: string;
    industryId: number;
}