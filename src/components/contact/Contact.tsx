import React from 'react'

export interface ContactOption {
  title: string;
  email: string;
  content: string;
}

const Contact = ({title, email, content}:ContactOption) => {
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