import { ChildrenProps } from '@/type'
import React from 'react'

const Section = ({children}:ChildrenProps) => {
  return (
    <section className="py-[10%] px-[30px] section-bg">{children}</section>
  )
}

export default Section