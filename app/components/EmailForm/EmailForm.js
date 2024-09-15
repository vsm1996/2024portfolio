/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import { useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'

import styles from './EmailForm.module.css'

init('_hJ5jDJM8i0Pf1CvS')

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_e9qathj', 'template_u7s451w', form.current, '_hJ5jDJM8i0Pf1CvS')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    setName('')
    setEmail('')
    setMessage('')
  }

  const handleNameChange = (e) => {
    const { value } = e.target
    setName(value)
  }
  const handleEmailChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }
  const handleMessageChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

  return (
    <section className={styles.formSection} id='contact'>
      <h2>Questions? Email me!</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label className='w-1/2 border-none rounded-2xl mb-4' htmlFor='name'>
          Name
        </label>
        <input className='w-1/2 border-none rounded-2xl mb-4 text-black p-2' type='text' name='user_name' id='name' value={name} onChange={handleNameChange} />
        <label className='w-1/2 border-none rounded-2xl mb-4' htmlFor='email'>
          Email
        </label>
        <input className='w-1/2 border-none rounded-2xl mb-4 text-black p-2' type='email' name='user_email' id='email' value={email} onChange={handleEmailChange} />
        <label className='w-1/2 border-none rounded-2xl mb-4' htmlFor='message'>
          Message
        </label>
        <textarea className='w-1/2 border-none rounded-2xl mb-4 text-black p-2' name='message' value={message} id='message' onChange={handleMessageChange} />
        <input className='p-4 border hover:text-neutral-content hover:border-current hover:drop-shadow-lg w-1/2 rounded-2xl mt-4 inputsend' type='submit' value='Send' />
      </form>
    </section>
  )
}

export default ContactUs
