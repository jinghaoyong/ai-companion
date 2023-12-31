import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import React from 'react'

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='h-full'>
      <main className='md:pl-20 pt-16 h-full'>
        {children}
      </main>
      <div>hah</div>
    </div>
  )
}

export default RootLayout