import React from 'react'

interface Props {
  type: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  style?:number;
}

export enum ButtonStye {
  PRIMARY,
  NOMAL,
  DANGER
}

const buttonStye = [
  "text-white w-full bg-purple-500",
  "w-full bg-white-500 text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white",
  "text-white w-full bg-red-500",
]

const Button = ({type = "button", onClick, style, children}:Props) => {
  return (
    <button type={type} onClick={onClick} className={`block text-center p-[10px] ${style ? buttonStye[style] : buttonStye[0]}  rounded-lg focus:outline-none transition-all duration-300`}>
      {children}
    </button>
  )
}

export default Button