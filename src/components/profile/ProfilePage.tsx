'use client'
import React, { useEffect, useState, useCallback } from 'react'
import styles from './page.module.css'
import InformationSection from './InformationSection/InformationSection'
import InterviewFeedback from './InterviewFeedback/InterviewFeedback'
import { User } from '@/utils/types/user'
import useUser from '@/hooks/user/useUser'
import useAuth from '@/hooks/auth/useAuth'
import useFeedback from '@/hooks/feedback/useFeedback'
import { FeedbackSet } from '@/utils/types/feedback'

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [userFeedback, setUserFeedback] = useState<FeedbackSet[]>([])
    const { getBearerToken, authLoading } = useAuth()
    const { getProfile } = useUser()
    const { getAllFeedback } = useFeedback()

    useEffect(() => {
        async function getUserData() {
            if (authLoading) return
            const token = await getBearerToken()
            if (token) {
                const user = await getProfile(token)
                if (user) {
                    setCurrentUser(user)
                }
                const feedbackSet = await getAllFeedback(token)
                if (feedbackSet) {
                    setUserFeedback(feedbackSet)
                }
            } else {
                window.location.href='/register'
            }
        }
        getUserData()
    }, [authLoading])

    const renderUserInfo = useCallback(() => (
        <InformationSection user={currentUser} setCurrentUser={setCurrentUser}/>
    ), [currentUser])

    const renderInterviewFeedback = useCallback(() => (
        <InterviewFeedback feedbackSets={userFeedback} />
    ), [userFeedback])

    return (
        <div className={styles.liner}>
            {renderUserInfo()}
            {renderInterviewFeedback()}
        </div>
    )
}

export default ProfilePage