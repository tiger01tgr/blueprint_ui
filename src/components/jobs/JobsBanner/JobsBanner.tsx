import styles from './JobsBanner.module.css'
import InputSelectFilter from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import MultiSelectFilter from '@/components/shared/dropdowns/filters/MultiSelectFilter/MultiSelectFilter'
import { Option } from '@/utils/types/option'

interface Props {
  setSelectedCompanies: (data: number[]) => void;
  companyOptions: Option[];
  setSelectedIndustries: (data: number[]) => void;
  industryOptions: Option[];
  // setSelectedRoles: (data: string[]) => void;
  // roleOptions: Option[];
}


const JobsBanner = ({ setSelectedCompanies, companyOptions, setSelectedIndustries, industryOptions }: Props) => {
  return (
    <div className={styles.liner}>
      <div className={styles.title}>
        Jobs
      </div>
      <div className={styles.filterSection}>
        <InputSelectFilter title="Company" options={companyOptions} setData={setSelectedCompanies} />
        <MultiSelectFilter title="Industry" options={industryOptions} setData={setSelectedIndustries} />
      </div>
    </div>
  )
}

export default JobsBanner