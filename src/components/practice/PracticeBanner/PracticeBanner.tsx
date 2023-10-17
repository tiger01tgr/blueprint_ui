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
    setSelectedRoles: (data: number[]) => void;
    roleOptions: Option[];
    setSelectedInterviewTypes: (data: string[]) => void;
    interviewTypeOptions: Option[];
}

const PracticeBanner: React.FC<Props> = ({
    setSelectedCompanies,
    companyOptions, 
    industryOptions, 
    setSelectedIndustries,
    setSelectedRoles,
    roleOptions,
    setSelectedInterviewTypes,
    interviewTypeOptions
 }) => {

    return (
        <div className={styles.liner}>
            <div className={styles.title}>
                Mock Interviews
            </div>
            <div className={styles.filterSection}>
                <InputSelectFilter title="Company" options={companyOptions} setData={setSelectedCompanies} />
                <MultiSelectFilter title="Industry" options={industryOptions} setData={setSelectedIndustries} />
                <MultiSelectFilter title="Role" options={roleOptions} setData={setSelectedRoles} />
                <MultiSelectFilter title="Interview Type" options={interviewTypeOptions} setData={setSelectedInterviewTypes} />
            </div>
        </div>
    )
}

export default PracticeBanner