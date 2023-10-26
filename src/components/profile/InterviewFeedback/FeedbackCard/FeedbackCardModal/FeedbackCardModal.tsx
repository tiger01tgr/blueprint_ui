'use client'
import React, { useState, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import styles from './FeedbackCardModal.module.css'
import QuestionFeedbackCard from './QuestionFeedbackCard/QuestionFeedbackCard'
import { FeedbackSet, Feedback } from '@/utils/types/feedback'
import useFeedback from '@/hooks/feedback/useFeedback'
import useAuth from '@/hooks/auth/useAuth'

interface Props {
    feedbackSet: FeedbackSet;
}

const FeedbackCardModal = ({ feedbackSet }: Props) => {
    const { getBearerToken } = useAuth()
    const { getFeedback } = useFeedback()
    const [opened, { open, close }] = useDisclosure(false)
    const [feedback, setFeedback] = useState<Feedback[]>([])
    
    useEffect(() => {
        async function fetchData() {
            const token = await getBearerToken()
            const feedback = await getFeedback(token, feedbackSet.id)
            setFeedback(feedback)
        }
        if (opened) {
            fetchData()
        }
    }, [feedbackSet, opened])

    return (
        <>
            <Modal opened={opened} onClose={close} title={<div className={styles.title}>Feedback for {feedbackSet.questionSetName}</div>} size={700}>
                <div className={styles.liner}>
                    <div className={styles.feedbackSection}>
                        {feedback.map((feedbackEntry, index) => (
                            <QuestionFeedbackCard key={index} feedback={feedbackEntry} index={index+1} totalQuestions={feedback.length} />
                        ))}
                    </div>
                    <button className={styles.closeButton} onClick={close}>
                        Close
                    </button>
                </div>
            </Modal>

            <button className={styles.reviewButton} onClick={open}>
                Review
            </button>
        </>
    )
}

export default FeedbackCardModal