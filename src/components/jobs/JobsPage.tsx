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

const JobsPage = () => {
    const { allCompanies } = useCompanies()
    const { allIndustries } = useIndustries()
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
    const [companyOptions, setCompanyOptions] = useState<Option[]>([])
    const [selectedIndustries, setSelectedIndustries] = useState<number[]>([])
    const [industryOptions, setIndustryOptions] = useState<Option[]>([])

    useEffect(() => {
        setCompanyOptions(getCompanyOptions(allCompanies))
    }, [allCompanies])

    useEffect(() => {
        setIndustryOptions(getIndustryOptions(allIndustries))
    }, [allIndustries])

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

    return (
        <div className={styles.liner}>
            <JobsBanner
                setSelectedCompanies={setSelectedCompanies}
                companyOptions={companyOptions}
                setSelectedIndustries={setSelectedIndustries}
                industryOptions={industryOptions}
            />
            <JobsSection />
        </div>
    )
}

export default JobsPage