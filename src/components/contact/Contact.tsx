import React from 'react'

interface Props {
  title: string;
  email: string;
  content: string;
}

const Contact = ({title, email, content}:Props) => {
  return (
    <li className='section-bg'>
        <div>
          <strong>{title}</strong>
          <div>
            <p>{email}</p>
            <p>{content}</p>
          </div>
        </div>
    </li>
  )
}

export default Contact