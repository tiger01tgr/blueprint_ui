'use client'

import styles from './Navbar.module.css'
import Link from 'next/link'

const links = [
    { name: 'Home', path: '/' },
    { name: 'Practice', path: '/practice' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Profile', path: '/profile' },
]

const Navbar = () => {
    return (
        <div className={styles.liner}>
            <div className={styles.header}>
                <div className={styles.linkSection}>
                    {links.map((link) => (
                        <Link key={link.name} href={link.path} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
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