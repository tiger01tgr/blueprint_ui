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
                    not built yet, practice some
                </span>
                <span>
                    <Link href='/practice' className={styles.link}>
                        interviews
                    </Link>
                </span>
                <span>
                    or check out the
                </span>
                <span>
                    <Link href='/jobs' className={styles.link}>
                        job board
                    </Link>
                </span>
                <span>
                    before you end up like me
                </span>
            </div>
        </div>
    )
}

export default BlogPage