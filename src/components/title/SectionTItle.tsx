import React from 'react'

interface TitleProps {
    text: string;
    desc?: string;
}

const SectionTItle = ({text, desc = ""}:TitleProps) => {
  return (
    <div className='pb-[40px]'>
        <h3 className='font-bold text-[4rem]'>{text}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default SectionTItle