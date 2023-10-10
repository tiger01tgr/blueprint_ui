'use client'
import React, { useEffect, useState, useCallback } from 'react'
import InformationSection from './InformationSection/InformationSection'
import styles from './page.module.css'

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        async function getUserData() {
            const user1: User = {
                id: '123321123',
                firstName: 'John',
                middleName: '',
                lastName: 'Doe',
                email: 'johndoe817@gmail.com',
                position: 'Engineer',
                company: 'Intel',
                school: 'Vanderbilt University',
                major: 'Electrical Engineering'
            }
            const user2: User = {
                id: '123890123',
                firstName: 'Mostnamescanbeuptothis',
                middleName: '',
                lastName: 'Park',
                email: 'sarahpsffdsasfark9@gmail.com',
                school: 'Vanderbilt University',
                phone: '5032942438',
                // major: 'Computer Science',
                resume: 'https://youtube.com'
            }
            setCurrentUser(user2)
        }
        getUserData()
    }, [])

    const renderUserInfo = useCallback(() => (
        <InformationSection user={currentUser} />
    ), [currentUser])

    return (
        <div className={styles.liner}>
            {renderUserInfo()}
        </div>
    )
}

export default ProfilePage