'use client'
import { useState, useEffect } from 'react'
import InterviewsSection from './InterviewsSection/InterviewsSection'
import PracticeBanner from './PracticeBanner/PracticeBanner'
import usePractice from '@/hooks/practice/usePractice'
import useCompanies from '@/hooks/company/useCompanies'
import { Company } from '@/utils/types/company'
import { Option } from '@/utils/types/option'
import { Pagination } from '@mantine/core'
import styles from './page.module.css'
import useIndustries from '@/hooks/industry/useIndustries'
import { Industry } from '@/utils/types/industry'
import useRoles from '@/hooks/role/useRoles'
import { Role } from '@/utils/types/role'
import { QuestionSet } from '@/utils/types/question'

const PracticePage = () => {
    const { allIndustries } = useIndustries()
    const { getPracticeSetsByPage } = usePractice()
    const { allCompanies } = useCompanies()
    const { allRoles } = useRoles()
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
    const [companyOptions, setCompanyOptions] = useState<Option[]>([])
    const [selectedIndustries, setSelectedIndustries] = useState<number[]>([])
    const [industryOptions, setIndustryOptions] = useState<Option[]>([])
    const [activePage, setActivePage] = useState(1)
    const [selectedRoles, setSelectedRoles] = useState<number[]>([])
    const [roleOptions, setRoleOptions] = useState<Option[]>([])
    const [practiceSets, setPracticeSets ] = useState<QuestionSet[]>([])
    const [totalPages, setTotalPages] = useState<number>(1)

    useEffect(() => {
        async function fetchQuestionData() {
            const data = await getPracticeSetsByPage({limit: 15, page: activePage})
            if (data) {
                setPracticeSets(data.sets)
                setTotalPages(data.pages)
            }
        }
        fetchQuestionData()
    }, [activePage])

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
            <PracticeBanner
                setSelectedCompanies={setSelectedCompanies}
                companyOptions={companyOptions}
                industryOptions={industryOptions}
                setSelectedIndustries={setSelectedIndustries}
                setSelectedRoles={setSelectedRoles}
                roleOptions={roleOptions}
            />
            <InterviewsSection sets={practiceSets} />
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

export default PracticePage