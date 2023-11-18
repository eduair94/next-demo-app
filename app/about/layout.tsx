import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import type { Metadata } from 'next'
import { type ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Test About Page'
}

export default function ClientLayout ({
  children
}: {
  children: React.ReactNode
}): ReactNode {
  return (
    <MainLayout>
      <DarkLayout>{children}</DarkLayout>
    </MainLayout>
  )
}
