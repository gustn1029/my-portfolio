import React from 'react'

interface TitleProps {
    text: string;
    desc?: string;
}

const SectionTItle = ({text, desc = ""}:TitleProps) => {
  return (
    <div className='pb-[40px]'>
        <h3 className='font-bold text-[4rem] leading-[1] pb-[10px]'>{text}</h3>
        <p className='text-[1.3rem] text-gray-500'>{desc}</p>
    </div>
  )
}

export default SectionTItle