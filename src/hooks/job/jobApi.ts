import { 
    Job, JobsAllData, JobsPagination
} from '../../utils/types/job'

const parseJob = (job: any): Job => {
    return {
        id: job.id,
        name: job.name,
        employerName: job.employer,
        employerId: job.employer_id,
        roleName: job.role,
        roleId: job.role_id,
        jobType: job.job_type,
        jobTypeId: job.job_type_id,
        industryName: job.industry,
        industryId: job.industry_id,
        description: job.description,
        questionSetId: job.question_set_id,
        logo: job.logo
    }
}

interface GetJobsWithFilterProps {
    urlParams: string;
}

export const getJobsWithFilter = async (props: GetJobsWithFilterProps): Promise<JobsAllData> => {
    let url = process.env.NEXT_PUBLIC_API_URL + '/jobs/?query=filter' + props.urlParams

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    if (!response.ok) throw new Error('Error occurred');

    const json = await response.json()
    const jobs = [] as Job[]
    const pagination: JobsPagination = json.pagination
    json.data.map((job: any) => {
        jobs.push(parseJob(job))
    })
    return {jobs, pagination}
}