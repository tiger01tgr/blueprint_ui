import styles from './page.module.css'
import HeaderSection from './HeaderSection/HeaderSection'
import LogoSection from './LogoSection/LogoSection'
import BenefitsSection from './BenefitsSection/BenefitsSection'

const HomePage = () => {
  return (
    <div className={styles.liner}>
      <HeaderSection />
      {/* <LogoSection /> */}
      <BenefitsSection />
    </div>
  )
}

export default HomePage