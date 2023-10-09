import styles from './BenefitsSection.module.css'
import Image from 'next/image'
import Books from '../../../../public/books.svg'
import Bullseye from '../../../../public/bullseye.svg'
import Blueprint from '../../../../public/blueprint.svg'
import Link from 'next/link'

const BenefitsSection = () => {
  return (
    <div className={styles.liner}>
      <div className={styles.title}>
        the better way to mock interview
      </div>
      <div className={styles.cardSection}>
        <div className={styles.cardLiner}>
          <Image alt='books' src={Books} className={styles.cardImage} />
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>
              Relevant questions
            </div>
            <div className={styles.cardDescription}>
              We gather known interview questions from companies and work with recruiters to generate questions most likely to be asked in interviews.
            </div>
          </div>
        </div>
        <div className={styles.cardLiner}>
          <Image alt='bullseye' src={Bullseye} className={styles.cardImage} />
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>
              Quick and accurate feedback
            </div>
            <div className={styles.cardDescription}>
              Practice interviewing at your convenience. Submit mock interviews and get personalized, role-specific feedback within a day.
            </div>
          </div>
        </div>
        <div className={styles.cardLiner}>
          <Image alt='blueprint' src={Blueprint} className={styles.cardImage} />
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>
              Valuable suggestions
            </div>
            <div className={styles.cardDescription}>
              Bluprint tracks how you&apos;ve grown over time and identifies key strengths and weaknesses. Grow faster with Bluprint.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Link href='/practice'>
          <button className={styles.interviewButton}>
            <div className={styles.interviewButtonText}>
              <div className={styles.interviewButtonMainText}>
                Practice now
              </div>
              <div className={styles.interviewButtonSubText}>
                — it&apos;s free
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BenefitsSection