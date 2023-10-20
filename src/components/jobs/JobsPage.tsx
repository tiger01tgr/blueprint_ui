'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import JobsBanner from './JobsBanner/JobsBanner'
import JobsSection from './JobsSection/JobsSection'
import useCompanies from '@/hooks/company/useCompanies'
import { Option } from '@/utils/types/option'
import { Company } from '@/utils/types/company'
import useIndustries from '@/hooks/industry/useIndustries'
import { Industry } from '@/utils/types/industry'
import useRoles from '@/hooks/role/useRoles'
import { Role } from '@/utils/types/role'
import useJobTypes from '@/hooks/jobType/useJobTypes'
import { JobType } from '@/utils/types/jobType'
import { addToUrl } from '@/utils/addToUrl'
import { useRouter, useSearchParams } from 'next/navigation'
import { Pagination } from '@mantine/core'
import { Job } from '@/utils/types/job'
import useJobs from '@/hooks/job/useJobs'

const JobsPage = () => {
    const { allCompanies } = useCompanies()
    const { allIndustries } = useIndustries()
    const { allRoles } = useRoles()
    const { allJobTypes } = useJobTypes()
    const { getJobs } = useJobs()
    const router = useRouter()
    const [jobs, setJobs] = useState<Job[]>([])
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
    const [companyOptions, setCompanyOptions] = useState<Option[]>([])
    const [selectedIndustries, setSelectedIndustries] = useState<number[]>([])
    const [industryOptions, setIndustryOptions] = useState<Option[]>([])
    const [selectedRoles, setSelectedRoles] = useState<number[]>([])
    const [roleOptions, setRoleOptions] = useState<Option[]>([])
    const [selectedJobTypes, setSelectedJobTypes] = useState<number[]>([])
    const [jobTypeOptions, setJobTypeOptions] = useState<Option[]>([])
    const [jobsLimit, setJobsLimit] = useState<number>(15)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [activePage, setActivePage] = useState(1)
    const searchParams = useSearchParams()

    useEffect(() => {
        const employers = searchParams.get('employers')
        const industries = searchParams.get('industries')
        const roles = searchParams.get('roles')
        const jobTypes = searchParams.get('jobTypes')
        async function fetchJobsData() {
            let urlParams = `&limit=${jobsLimit}&page=${activePage}`
            if (employers) {
                urlParams += '&employers=' + employers
            }
            if (industries) {
                urlParams += '&industries=' + industries
            }
            if (roles) {
                urlParams += '&roles=' + roles
            }
            if (jobTypes) {
                urlParams += '&jobTypes=' + jobTypes
            }
            const data = await getJobs({ urlParams })
            if (data) {
                setJobs(data.jobs)
                setTotalPages(data.pages)
            }
        }
        fetchJobsData()
    }, [searchParams])

    useEffect(() => {
        setCompanyOptions(getCompanyOptions(allCompanies))
    }, [allCompanies])

useEffect(() => {
    setIndustryOptions(getIndustryOptions(allIndustries))
}, [allIndustries])

useEffect(() => {
    setRoleOptions(getRoleOptions(allRoles))
}, [allRoles])

useEffect(() => {
    setJobTypeOptions(getJobTypeOptions(allJobTypes))
}, [allJobTypes])

useEffect(() => {
    let addToUrlString = ''
    addToUrlString += addToUrl('employers', selectedCompanies)
    addToUrlString += addToUrl('industries', selectedIndustries)
    addToUrlString += addToUrl('roles', selectedRoles)
    addToUrlString += addToUrl('jobTypes', selectedJobTypes)

    router.push(`?limit=${jobsLimit}&page=${activePage}` + addToUrlString)
}, [activePage, selectedCompanies, selectedIndustries, selectedRoles, selectedJobTypes])

const getCompanyOptions = (companies: Company[]): Option[] => {
    return companies.map((company) => {
        return {
            value: company.id,
            label: company.name
        }
    })
}

const getIndustryOptions = (industries: Industry[]): Option[] => {
    return industries.map((industry) => {
        return {
            value: industry.id.toString(),
            label: industry.name
        }
    })
}

const getRoleOptions = (roles: Role[]): Option[] => {
    return roles.map((role) => {
        return {
            value: role.id.toString(),
            label: role.name
        }
    })
}

const getJobTypeOptions = (jobTypes: JobType[]): Option[] => {
    return jobTypes.map((jobType) => {
        return {
            value: jobType.id.toString(),
            label: jobType.name
        }
    })
}

return (
    <div className={styles.liner}>
        <JobsBanner
            setSelectedCompanies={setSelectedCompanies}
            companyOptions={companyOptions}
            setSelectedIndustries={setSelectedIndustries}
            industryOptions={industryOptions}
            setSelectedRoles={setSelectedRoles}
            roleOptions={roleOptions}
            jobTypeOptions={jobTypeOptions}
            setSelectedJobTypes={setSelectedJobTypes}
        />
        <JobsSection jobs={jobs} />
        <div className={styles.pagination}>
            <Pagination
                total={totalPages}
                classNames={{
                    root: styles.paginationRoot,
                    control: styles.paginationControl,
                }}
                value={activePage}
                onChange={setActivePage}
            />
        </div>
    </div>
)
}

export default JobsPage