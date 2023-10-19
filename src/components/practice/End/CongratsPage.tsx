import Image from 'next/image'
import Link from 'next/link'
import styles from './CongratsPage.module.css'
import utopia from '../../../../public/utopia.png'

const CongratsPage = () => {
    return (
        <div className={styles.liner}>
            <Image alt='utopia' src={utopia} width={300} />
            <div className={styles.title}>
                <span>
                    congrats finishing a practice interview, we&apos;ll get it back to you in &lt;24 hours! <Link href='/practice' className={styles.link}> here&apos;s some more.</Link> employment speedrun starts now.
                </span>
            </div>
        </div>
    )
}

export default CongratsPage