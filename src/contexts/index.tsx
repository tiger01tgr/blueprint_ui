'use client'
import { useContext } from 'react'

import { GlobalAuthContext } from './AuthContext'

export const useGlobalAuthContext = () => useContext(GlobalAuthContext);