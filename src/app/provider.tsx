// app/providers.tsx
'use client'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { GlobalAuthContextProvider } from '@/contexts/AuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        colors: {
          'darkBlue': ['#0353A4', '#0353A4', '#0353A4', '#0353A4', '#0353A4', '#0353A4', '#0353A4', '#0353A4', '#0353A4', '#0353A4'],
        },
      }}>
      <GlobalAuthContextProvider>
        {children}
      </GlobalAuthContextProvider>
    </MantineProvider>
  )
}