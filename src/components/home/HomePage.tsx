import styles from './page.module.css'
import HeaderSection from './HeaderSection/HeaderSection'
import LogoSection from './LogoSection/LogoSection'
import BenefitsSection from './BenefitsSection/BenefitsSection'
import TimelineSection from './TimelineSection/TimelineSection'
import Footer from './Footer/Footer'

const HomePage = () => {
  return (
    <div className={styles.liner}>
      <HeaderSection />
      <LogoSection />
      <BenefitsSection />
      <TimelineSection />
      <Footer />
    </div>
  )
}

export default HomePage