'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import styles from './SignInWidget.module.css'
import { Google } from './SocialIcons/SocialIconConfig'

const buttons = [
    Google,
]

const SignInWidgets = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.h1}>Sign In</h1>
        {buttons.map((provider) => (
            <Button key={provider.id} 
                aria-label={provider.aria} 
                startContent={provider.icon} 
                className={styles.button} 
                variant="shadow" 
                radius="sm"
                onClick={provider.signIn}>
                {provider.text}
            </Button>
        ))}
    </div>
  )
}

export default SignInWidgets