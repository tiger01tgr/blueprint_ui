// app/providers.tsx
'use client'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { GlobalAuthContextProvider } from '@/contexts/AuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <GlobalAuthContextProvider>
        {children}
      </GlobalAuthContextProvider>
    </MantineProvider>
  )
}