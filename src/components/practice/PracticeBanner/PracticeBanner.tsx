import styles from './PracticeBanner.module.css'
import InputSelectFilter, { Option } from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import MultiSelectFilter from '@/components/shared/dropdowns/filters/MultiSelectFilter/MultiSelectFilter'
import React from 'react'

const PracticeSelectFilters = [
    {
        title: 'Industry',
        options: [
            'Finance',
            'Consulting',
            'Technology',
            'Start-ups',
        ]
    },
    {
        title: 'Role',
        options: [
            'Software Engineering',
            'Product',
            'Analyst',
            'Consultant',
            'Account Management',
            'Business & Strategy',
            'Customer Success',
            'Growth & Marketing',
        ]
    },
    {
        title: 'Interview Type',
        options: [
            'Behavioral',
            'Technical'
        ]
    }
]

interface Props {
    setSelectedCompanies: (data: number[]) => void;
    companyOptions: Option[];
    // setSelectedIndustries: (data: string[]) => void;
    // industryOptions: Option[];
    // setSelectedRoles: (data: string[]) => void;
    // roleOptions: Option[];
    // setSelectedInterviewTypes: (data: string[]) => void;
    // interviewTypeOptions: Option[];
}
// setSelectedIndustries, industryOptions, setSelectedRoles, roleOptions, setSelectedIndustries, interviewTypeOptions

const PracticeBanner: React.FC<Props> = ({ setSelectedCompanies, companyOptions }) => {

  return (
    <div className={styles.liner}>
        <div className={styles.title}>
            Mock Interviews
        </div>
        <div className={styles.filterSection}>
            <InputSelectFilter title="Company" options={companyOptions} setData={setSelectedCompanies}/>
            {PracticeSelectFilters.map((filter) => (
                <MultiSelectFilter key={filter.title} {...filter} />
            ))}
        </div>
    </div>
  )
}

export default PracticeBanner