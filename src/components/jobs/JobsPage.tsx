'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import JobsBanner from './JobsBanner/JobsBanner'
import JobsSection from './JobsSection/JobsSection'
import useCompanies from '@/hooks/company/useCompanies'
import { Option } from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import { Company } from '@/utils/types/company'

const JobsPage = () => {
    const { allCompanies } = useCompanies()
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
    const [companyOptions, setCompanyOptions] = useState<Option[]>([])

    useEffect(() => {
        setCompanyOptions(getCompanyOptions(allCompanies))
    }, [allCompanies])

    const getCompanyOptions = (companies: Company[]): Option[] => {
        return companies.map((company) => {
            return {
                value: company.id,
                label: company.name
            }
        })
    }

    return (
        <div className={styles.liner}>
            <JobsBanner setSelectedCompanies={setSelectedCompanies} companyOptions={companyOptions}/>
            <JobsSection />
        </div>
    )
}

export default JobsPage