import ContactList from '@/components/contact/ContactList'
import React from 'react'

interface Props {
  param: {contactId: string}
}

const page = ({param: {contactId}}:Props) => {
  const id = contactId;
  return (
    <ContactList contactId={id} />
  )
}

export default page