import React from 'react'

interface Props {
  type: "button" | "submit";
  onClick?: () => void;
  text: string;
}

const Button = ({type = "button", onClick, text}:Props) => {
  return (
    <button type={type} onClick={onClick} className='block p-[10px] text-white w-full bg-purple-500 rounded-lg focus:outline-none'>
      {text}
    </button>
  )
}

export default Button