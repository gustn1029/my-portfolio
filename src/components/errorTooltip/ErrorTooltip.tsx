import React from 'react'

interface Props {
    message: string;
}

const ErrorTooltip = ({message}:Props) => {
  return (
    <div>
        <p className="absolute left-0 bottom-0 text-[0.8rem] text-red-500 translate-y-[25px]">{message}</p>
    </div>
  )
}

export default ErrorTooltip