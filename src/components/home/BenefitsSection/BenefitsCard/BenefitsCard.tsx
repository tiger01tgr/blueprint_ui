import styles from './BenefitsCard.module.css'

interface BenefitsCardProps {
    icon: any;
    title: string;
    description: string;
}

const BenefitsCard = ({icon, title, description}: BenefitsCardProps) => {
  return (
    <div className={styles.liner}>
        BenefitsCard
    </div>
  )
}

export default BenefitsCard