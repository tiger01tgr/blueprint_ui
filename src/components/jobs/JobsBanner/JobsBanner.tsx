import styles from './JobsBanner.module.css'
import InputSelectFilter from '@/components/shared/dropdowns/filters/InputSelectFilter/InputSelectFilter'
import MultiSelectFilter from '@/components/shared/dropdowns/filters/MultiSelectFilter/MultiSelectFilter'

const InputSelectFilters = [
  {
      title: 'Company',
      options: [
          "Okta",
          "Morgan Stanley",
          "Google",
          "Bain",
          "McKinsey",
          "Amazon",
          "Stripe",
          "Anduril",
          "Palantir",
          "OpenAI",
          "ScaleAI",
          "Apple",
          "Microsoft"
      ]
  }
]

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


const JobsBanner = () => {
  return (
    <div className={styles.liner}>
      <div className={styles.title}>
        Jobs
      </div>
      <div className={styles.filterSection}>
        {InputSelectFilters.map((filter) => (
          <InputSelectFilter key={filter.title} {...filter} />
        ))}
        {PracticeSelectFilters.map((filter) => (
          <MultiSelectFilter key={filter.title} {...filter} />
        ))}
      </div>
    </div>
  )
}

export default JobsBanner