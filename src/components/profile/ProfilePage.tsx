'use client'
import React, { useEffect, useState, useCallback } from 'react'
import styles from './page.module.css'
import InformationSection from './InformationSection/InformationSection'
import InterviewFeedback from './InterviewFeedback/InterviewFeedback'
import { User } from '@/utils/types/user'
import useUser from '@/hooks/user/useUser'
import useAuth from '@/hooks/auth/useAuth'

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [userFeedback, setUserFeedback] = useState<FeedbackSet[] | null>(null)
    const { getBearerToken, authObj } = useAuth()
    const { getProfile } = useUser()

    useEffect(() => {
        async function getUserData() {
            const token = await getBearerToken()
            if (token) {
                const user = await getProfile(token)
                if (user) {
                    setCurrentUser(user)
                }
            }
        }
        getUserData()
    }, [authObj])

    const renderUserInfo = useCallback(() => (
        <InformationSection user={currentUser} />
    ), [currentUser])

    const renderInterviewFeedback = useCallback(() => (
        <InterviewFeedback feedbackSet={userFeedback} />
    ), [userFeedback])

    return (
        <div className={styles.liner}>
            {renderUserInfo()}
            {renderInterviewFeedback()}
        </div>
    )
}

export default ProfilePage