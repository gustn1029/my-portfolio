import Contents from '@/components/layout/contents/Contents'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { ChildrenProps } from '@/type'
import React from 'react'

const layout = ({children}:ChildrenProps) => {
  return (
    <div className='grid gap-y-[50px]'>
        <Header />
        <Contents>{children}</Contents>
        <Footer />
    </div>
  )
}

export default layout