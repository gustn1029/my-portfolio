import { ChildrenProps } from '@/type'
import React from 'react'

const Contents = ({children}:ChildrenProps) => {
  return (
    <main className='pt-[50px]' id="home">{children}</main>
  )
}

export default Contents