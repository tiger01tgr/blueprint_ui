import styles from './BlogPage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import underConstructionImage from '../../../public/under-construction.png'

const BlogPage = () => {
    return (
        <div className={styles.liner}>
            <Image alt='i am broke' src={underConstructionImage} height={300} />
            <div className={styles.title}>
                <span>
                    not built yet, practice some <Link href='/practice' className={styles.link}> interviews </Link> or check out the <Link href='/jobs' className={styles.link}> job board </Link> before you end up like me
                </span>
            </div>
        </div>
    )
}

export default BlogPage