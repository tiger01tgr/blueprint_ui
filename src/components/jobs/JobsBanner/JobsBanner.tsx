import styles from './JobsBanner.module.css'
import InputSelectFilter from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import MultiSelectFilter from '@/components/shared/dropdowns/filters/MultiSelectFilter/MultiSelectFilter'
import { Option } from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'

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


const JobsBanner = ({ setSelectedCompanies, companyOptions }: Props) => {
  return (
    <div className={styles.liner}>
      <div className={styles.title}>
        Jobs
      </div>
      <div className={styles.filterSection}>
        <InputSelectFilter title="Company" options={companyOptions} setData={setSelectedCompanies} />
        {PracticeSelectFilters.map((filter) => (
          <MultiSelectFilter key={filter.title} {...filter} />
        ))}
      </div>
    </div>
  )
}

export default JobsBanner