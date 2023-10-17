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

const JobsPage = () => {
    const { allCompanies } = useCompanies()
    const { allIndustries } = useIndustries()
    const { allRoles } = useRoles()
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
    const [companyOptions, setCompanyOptions] = useState<Option[]>([])
    const [selectedIndustries, setSelectedIndustries] = useState<number[]>([])
    const [industryOptions, setIndustryOptions] = useState<Option[]>([])
    const [selectedRoles, setSelectedRoles] = useState<number[]>([])
    const [roleOptions, setRoleOptions] = useState<Option[]>([])

    useEffect(() => {
        setCompanyOptions(getCompanyOptions(allCompanies))
    }, [allCompanies])

    useEffect(() => {
        setIndustryOptions(getIndustryOptions(allIndustries))
    }, [allIndustries])

    useEffect(() => {
        setRoleOptions(getRoleOptions(allRoles))
    }, [allRoles])

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

    return (
        <div className={styles.liner}>
            <JobsBanner
                setSelectedCompanies={setSelectedCompanies}
                companyOptions={companyOptions}
                setSelectedIndustries={setSelectedIndustries}
                industryOptions={industryOptions}
                setSelectedRoles={setSelectedRoles}
                roleOptions={roleOptions}
            />
            <JobsSection />
        </div>
    )
}

export default JobsPage