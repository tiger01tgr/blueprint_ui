'use client'
import React, { useState, useCallback, useEffect } from 'react'
import WebcamRecorder from './WebcamRecorder/WebcamRecorder'
import styles from './InterviewSet.module.css'

interface InterviewSetProps {
  questionSet: QuestionSet
}

function InterviewSet({ questionSet }: InterviewSetProps) {
  const questions = questionSet.questions
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[currentIndex])

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex])
  }, [currentIndex])

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      console.log('hooray!')
    }
  }

  const isLastQuestion = currentIndex === questions.length - 1

  const renderQuestion = useCallback(() => (
    <div className={styles.liner}>
      <div className={styles.bodySection}>
        <div className={styles.leftSection}>
          <div className={styles.totalProgress}>
            Question {currentIndex + 1} of {questions.length}
          </div>
          <div className={styles.questionText}>
            {currentQuestion.text}
          </div>
        </div>
        <div className={styles.rightSection}>
          <WebcamRecorder questionSize={questions.length} currentQuestion={currentIndex + 1} handleNextQuestion={handleNextQuestion}/>
        </div>
      </div>
    </div>
  ), [currentQuestion])

  return (
    <div className={styles.liner}>
      {renderQuestion()}
    </div>
  )
}

export default InterviewSet