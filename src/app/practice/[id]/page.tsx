'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import McDonalds from '../../../../public/mcdonaldsapp.png'
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
        text: 'Create a DCF for Exxon Mobil. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        timeLimit: '300'
      },
      {
        id: '001124',
        text: 'Talk about a recent deal that you find interesting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        timeLimit: '300'
      },
      {
        id: '001125',
        text: 'What is a merger that you think should happen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        timeLimit: '300'
      },
      {
        id: '001126',
        text: 'What are financial indicators you would look to for a trucking company. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
      <div className={styles.hideInterview}>
        <InterviewSet questionSet={questionSet}/>
      </div>
      <div className={styles.getOffMobile}>
        <Image alt='mcdonalds app' src={McDonalds} height={500}/>
        no way you&apos;re about to mock interview on mobile!?! move to desktop for a better experience
      </div>
    </div>
  )
}