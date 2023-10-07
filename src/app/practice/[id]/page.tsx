'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { usePathname } from 'next/navigation'
import InterviewSet from '@/components/practice/Interviews/InterviewSet'

async function getQuestionSetData(setName: string) {
  if (!setName) { return null }
  const questionSet: QuestionSet = {
    id: 'MS23T',
    employerId: 'MS',
    role: 'Analyst',
    interviewType: 'Technical',
    questions: [
      {
        id: '001123',
        text: 'Create a DCF for Exxon Mobil',
        timeLimit: '300'
      },
      {
        id: '001124',
        text: 'Talk about a recent deal that you find interesting',
        timeLimit: '300'
      },
      {
        id: '001125',
        text: 'What is a merger that you think should happen',
        timeLimit: '300'
      },
      {
        id: '001126',
        text: 'What are financial indicators you would look to for a trucking company',
        timeLimit: '300'
      }
    ]
  }
  return questionSet
}

export default function InterviewPage() {
  const pathname = usePathname()
  const setName = pathname.replace("/practice/", "")
  const [questionSet, setQuestionSet] = useState<QuestionSet>()

  useEffect(() => {
    async function fetchData() {
      const questionSet = await getQuestionSetData(setName)
      if (questionSet) {
        setQuestionSet(questionSet)
      }
    }
    fetchData()
  })


  if (!questionSet) {
    return <div>loading...</div>
  }

  return (
    <div className={styles.liner}>
      <InterviewSet questionSet={questionSet}/>
    </div>
  )
}