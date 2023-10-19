'use client'
import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import McDonalds from '../../../../public/mcdonaldsapp.png'
import styles from './page.module.css'
import { usePathname } from 'next/navigation'
import InterviewSet from '@/components/practice/Interviews/InterviewSet'
import usePractice from '@/hooks/practice/usePractice'
import { QuestionSet, QuestionSetWithQuestions } from '@/utils/types/question'
import Loading from '@/components/loading/Loading'
import useAuth from '@/hooks/auth/useAuth'
import RegisterForm from '@/components/auth/RegisterForm/RegisterForm'

export default function InterviewPage() {
  const id = usePathname().replace("/practice/", "").replace(/\//g, "")
  const [questionSet, setQuestionSet] = useState<QuestionSetWithQuestions>()
  const [width, setWidth] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true)
  const { getQuestionSetWithQuestions } = usePractice()
  const { authObj, getBearerToken } = useAuth()


  useEffect(() => {
    const fetchData = async () => {
      const token = await getBearerToken()
      if (!token) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
      }
      const questionSet = await getQuestionSetWithQuestions(id)
      if (questionSet) {
        setQuestionSet(questionSet)
      }
      setWidth(window.innerWidth)
    }
    fetchData()
  }, [authObj])

  if (!questionSet) {
    return <Loading />
  }

  return (
    <div className={styles.liner}>
      <div className={styles.liner}>
        {loggedIn ? (
          width >= 1024 ? (
            <InterviewSet questionSet={questionSet} />
          ) : (
            <div className={styles.getOffMobile}>
              <Image alt='mcdonalds app' src={McDonalds} height={500} />
              you&apos;re about to mock interview on mobile!?! move to desktop for a better experience
            </div>
          )
        ) : (
          <div className={styles.form}>
            <RegisterForm redirectToProfile={false} />
          </div>
        )}
      </div>
    </div>
  )
}