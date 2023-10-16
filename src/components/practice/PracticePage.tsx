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

const PracticePage = () => {
    const { allIndustries } = useIndustries()
    const { allPracticeSets } = usePractice()
    const { allCompanies } = useCompanies()
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([])
    const [companyOptions, setCompanyOptions] = useState<Option[]>([])
    const [selectedIndustries, setSelectedIndustries] = useState<number[]>([])
    const [industryOptions, setIndustryOptions] = useState<Option[]>([])
    const [activePage, setActivePage] = useState(1);
    //const [ practiceSets, setPracticeSets ] = useState<QuestionSet[]>([])

    useEffect(() => {
        console.log(activePage)
    }, [activePage])

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
            <PracticeBanner
                setSelectedCompanies={setSelectedCompanies}
                companyOptions={companyOptions}
                industryOptions={industryOptions}
                setSelectedIndustries={setSelectedIndustries}
            />
            <InterviewsSection sets={allPracticeSets} />
            <div className={styles.pagination}>
                <Pagination
                    total={10}
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