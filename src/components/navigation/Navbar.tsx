'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import NavMenu from './NavMenu/NavMenu'
import useAuth from '@/hooks/auth/useAuth'
import { Button } from '@mantine/core'

const links = [
    { name: 'Practice', path: '/practice' },
    { name: 'Jobs Board', path: '/jobs' },
    { name: 'Blog', path: '/blog' },
    // { name: 'Profile', path: '/profile' },
    // { name: 'Employers', path: '/employers' }
]

const Navbar = () => {
    // const [loggedIn, setLoggedIn] = useState(false)
    const [buttonData, setButtonData] =  useState<any>({ name: 'Sign Up', link: 'register'})
    const { authObj } = useAuth()
    useEffect(() => {
        if (authObj) {
            setButtonData({ name: 'Profile', link: 'profile'})
        }
        else {
            setButtonData({ name: 'Sign Up', link: 'register'})
        }
    }, [authObj])

    return  (
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
                <div className={styles.buttonSection}>
                    <Link key='Sign Up' href={`/${buttonData.link}`}>
                        <button className={styles.button}>
                            {buttonData.name}
                        </button>
                    </Link>
                </div>
                <div className={styles.menu}>
                    <NavMenu buttonData={buttonData} />
                </div>
            </div>
        </div>
    )
}

export default Navbar