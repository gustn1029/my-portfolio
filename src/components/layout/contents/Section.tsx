import React from 'react'

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const Section = ({children, id="", className=""}:SectionProps) => {
  return (
    <section id={id} className={`py-[10%] px-[30px] section-bg ${className}`}>{children}</section>
  )
}

export default Section