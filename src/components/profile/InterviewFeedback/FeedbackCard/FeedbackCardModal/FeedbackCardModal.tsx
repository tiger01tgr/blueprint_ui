'use client'
import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import styles from './FeedbackCardModal.module.css'
import QuestionFeedbackCard from './QuestionFeedbackCard/QuestionFeedbackCard'
import { FeedbackSet } from '@/utils/types/feedback'

interface Props {
    feedbackSet: FeedbackSet;
}

const FeedbackCardModal = ({ feedbackSet }: Props) => {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <Modal opened={opened} onClose={close} title={<div className={styles.title}>Feedback for {feedbackSet.interviewSetName}</div>} size={700}>
                <div className={styles.liner}>
                    <div className={styles.feedbackSection}>
                        {feedbackSet.feedback.map((feedback, index) => (
                            <QuestionFeedbackCard key={index} feedback={feedback} index={index+1} totalQuestions={feedbackSet.feedback.length} />
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