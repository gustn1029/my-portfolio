import ContactList from '@/components/contact/ContactList'
import React from 'react'

interface ContactProps {
  params: {contactId: string}
}

const page = ({params: {contactId}}:ContactProps) => {
  const id = contactId;
  return (
    <ContactList contactId={id} />
  )
}

export default page