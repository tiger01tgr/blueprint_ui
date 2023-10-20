import { Job } from "@/utils/types/job";
import { getJobsWithFilter } from "./jobApi";

interface GetJobsByFilterProps {
    urlParams: string;
}

interface GetJobsByFilterReturn {
    jobs: Job[];
    pages: number;
}

const useJobs = () => {

    const getJobs = async ({ urlParams }: GetJobsByFilterProps): Promise<GetJobsByFilterReturn | undefined> => {
        const data = await getJobsWithFilter({ urlParams })
        const jobs = data.jobs
        const pages = data.pagination.totalPages
        return { jobs, pages }
    }

    return {
        getJobs
    }
}

export default useJobs