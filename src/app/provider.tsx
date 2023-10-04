// app/providers.tsx
'use client'
import '@mantine/core/styles.css';
import { NextUIProvider } from '@nextui-org/react'
import { MantineProvider } from '@mantine/core';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </MantineProvider>
  )
}