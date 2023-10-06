'use client'

import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Logo from '../../../public/logo.png'

const links = [
    { name: 'Practice', path: '/practice' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Profile', path: '/profile' },
    // { name: 'Employers', path: '/employers' }
]

const Navbar = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.header}>
                <div className={styles.nonSignUpSection}>
                    <div className={styles.homeSection}>
                        <Link href='/'>
                            <Image alt='logo' src={Logo} width={150} height={40} />
                        </Link>
                    </div>
                    <div className={styles.linkSection}>
                        {links.map((link) => (
                            <Link key={link.name} href={link.path} className={styles.link}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.signUpSection}>
                    <Link key='Sign Up' href='/login'>
                        <button className={styles.signUpButton}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar