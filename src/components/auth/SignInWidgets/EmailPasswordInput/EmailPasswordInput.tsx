'use client'

import { Button, Input } from '@nextui-org/react'
import React from 'react'
import styles from './EmailPasswordInput.module.css'

const EmailPasswordInput = () => {
  return (
    <div className={styles.main}>
        <div>Welcome</div>
        <Input type="email" label="Email" radius='sm'/>
        <Input type="password" label="Password" radius='sm'/>
        <Button></Button>
    </div>
  )
}

export default EmailPasswordInput