'use client'
import React, { useState, useEffect } from 'react'
import WebcamRecorder from './WebcamRecorder/WebcamRecorder'
import styles from './InterviewSet.module.css'
import { QuestionSetWithQuestions, Question } from '@/utils/types/question'
import useSessions from '@/hooks/session/useSessions'
import { findIndex } from '@/utils/findIndex'
import { Session } from '@/utils/types/session'

interface InterviewSetProps {
  questionSet: QuestionSetWithQuestions
  token: string
}

function InterviewSet({ questionSet, token }: InterviewSetProps) {
  const questions = questionSet.questions
  const { getSession, createSession } = useSessions()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[currentIndex])
  const [currentSession, setCurrentSession] = useState<Session | null>(null)

  useEffect(() => {
    async function fetchData() {
      let currentSession = await getSession(token, questionSet.id)
      if (!currentSession) {
        await createSession(token, questionSet.id)
        currentSession = await getSession(token, questionSet.id)
        setCurrentSession(currentSession)
      } else {
        if (currentSession.currentQuestionId === 0) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(findIndex(questions, currentSession.lastAnsweredQuestionId + 1))
        }
        setCurrentSession(currentSession)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex])
  }, [currentIndex])

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      location.href = '/practice/end'
    }
  }

  const isLastQuestion = currentIndex === questions.length - 1

  return (
    <div className={styles.liner}>
            <div className={styles.bodySection}>
        <div className={styles.topSection}>
          <div className={styles.totalProgress}>
            Question {currentIndex + 1} of {questions.length}
          </div>
          <div className={styles.questionText}>
            {currentQuestion.text}
          </div>
        </div>
        <div className={styles.bottomSection}>
          <WebcamRecorder
              isLastQuestion={isLastQuestion}
              currentQuestion={currentQuestion}
              handleNextQuestion={handleNextQuestion}
              currentSession={currentSession}
              token={token}
              questionSetId={questionSet.id}
          />
        </div>
      </div>
    </div>
  )
}

export default InterviewSet