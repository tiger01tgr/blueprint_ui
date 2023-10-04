import styles from './PracticeBanner.module.css'
import SelectFilter from '@/components/shared/dropdowns/filters/SelectFilter/SelectFilter'

const PracticeSelectFilters = [
    {
        title: 'Industry',
        options: [
            'Finance',
            'Consulting',
            'Technology',
            'Start-ups',
            'Quant',
        ]
    }
]

const PracticeBanner = () => {
  return (
    <div className={styles.liner}>
        <div className={styles.title}>
            Mock Interviews
        </div>
        <div className={styles.filterSection}>
            {PracticeSelectFilters.map((filter) => (
                <SelectFilter key={filter.title} {...filter} />
            ))}
        </div>
    </div>
  )
}

export default PracticeBanner