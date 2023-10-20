export interface JobBase {
    id: number;
    name: string;
    employerName: string;
    employerId: number;
    roleName: string;
    roleId: number;
    jobType: string;
    jobTypeId: string;
    description: string;
    questionSetId: string;
}

export interface Job extends JobBase {
    logo: string;
    industryName: string;
    industryId: number;
}

export interface JobsPagination {
    totalPages: number;
    currentPage: number;
    limit: number;
}

export interface JobsAllData {
    jobs: Job[];
    pagination: JobsPagination;
}