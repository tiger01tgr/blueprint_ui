import styles from './PracticeBanner.module.css'
import InputSelectFilter from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import MultiSelectFilter from '@/components/shared/dropdowns/filters/MultiSelectFilter/MultiSelectFilter'
import { Option } from '@/utils/types/option'
import React from 'react'

interface Props {
    setSelectedCompanies: (data: number[]) => void;
    companyOptions: Option[];
    setSelectedIndustries: (data: number[]) => void;
    industryOptions: Option[];
    // setSelectedRoles: (data: string[]) => void;
    // roleOptions: Option[];
    // setSelectedInterviewTypes: (data: string[]) => void;
    // interviewTypeOptions: Option[];
}
// setSelectedIndustries, industryOptions, setSelectedRoles, roleOptions, setSelectedIndustries, interviewTypeOptions

const PracticeBanner: React.FC<Props> = ({ setSelectedCompanies, companyOptions, industryOptions, setSelectedIndustries }) => {

    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                Mock Interviews
            </div>
            <div className={styles.filterSection}>
                <InputSelectFilter title="Company" options={companyOptions} setData={setSelectedCompanies} />
                <MultiSelectFilter title="Industry" options={industryOptions} setData={setSelectedIndustries} />
            </div>
        </div>
    )
}

export default PracticeBanner