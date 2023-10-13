'use client'
import { useState, useEffect } from 'react'
import InterviewsSection from './InterviewsSection/InterviewsSection'
import PracticeBanner from './PracticeBanner/PracticeBanner'
import usePractice from '@/hooks/practice/usePractice'
import useCompanies from '@/hooks/company/useCompanies'
import { Company } from '@/utils/types/company'
import { Option } from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import styles from './page.module.css'

const PracticePage = () => {
    const { allPracticeSets } = usePractice()
    const { allCompanies } = useCompanies()
    const [ selectedCompanies, setSelectedCompanies ] = useState<number[]>([])
    const [ companyOptions, setCompanyOptions ] = useState<Option[]>([])
    //const [ practiceSets, setPracticeSets ] = useState<QuestionSet[]>([])
    
    useEffect(() => {

    }, [allPracticeSets, selectedCompanies])

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
            <PracticeBanner setSelectedCompanies={setSelectedCompanies} companyOptions={companyOptions}/>
            <InterviewsSection sets={allPracticeSets}/>
        </div>
    )
}

export default PracticePage