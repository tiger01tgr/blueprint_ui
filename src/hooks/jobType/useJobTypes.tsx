import { JobType } from '@/utils/types/jobType'
import { getJobTypes } from './jobTypeApi'
import React, { useState, useEffect } from 'react'

const useJobTypes = () => {

    const [allJobTypes, setAllJobTypes] = useState<JobType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getJobTypes()
            setAllJobTypes(data)
        }
        fetchData()
    }, [])

    return (
        {
            allJobTypes,
        }
    )
}

export default useJobTypes