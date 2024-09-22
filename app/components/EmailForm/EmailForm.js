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
    // border border-t-2 border-l-2 border-r-2 border-b-0 rounded-xl rounded-b-none 
    // style={{ clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0 100%)' }}
    <section className='w-full mx-auto mt-14 flex flex-col items-center text-white pt-40 pb-16 bg-gradient-to-b from-accent-content to-primary-content' id='contact' style={{ clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0 100%)' }}>
      <h2 className='w-2/4 text-2xl text-center text-balance mb-10'>
        I&apos;m always excited to collaborate on new projects or discuss opportunities.
         Feel free to reach out!
      </h2>
      <form ref={form} onSubmit={sendEmail} className='w-1/3 mt-4 mx-0 mb-8 p-8 flex flex-col items-center justify-center rounded-xl bg-neutral-content/10 hover:bg-neutral-content/20 hover:transition-all ease-in-out duration-300'>
        <label className='w-4/5  xl:w-3/5 border-none rounded-2xl mb-4' htmlFor='name'>
          Name
        </label>
        <input className='w-4/5  xl:w-3/5 border-none rounded-2xl mb-4 text-black p-2' type='text' name='user_name' id='name' value={name} onChange={handleNameChange} />
        <label className='w-4/5  xl:w-3/5 border-none rounded-2xl mb-4' htmlFor='email'>
          Email
        </label>
        <input className='w-4/5  xl:w-3/5 border-none rounded-2xl mb-4 text-black p-2' type='email' name='user_email' id='email' value={email} onChange={handleEmailChange} />
        <label className='w-4/5  xl:w-3/5 border-none rounded-2xl mb-4' htmlFor='message'>
          Message
        </label>
        <textarea className='w-4/5  xl:w-3/5 border-none rounded-2xl mb-4 text-black p-2' name='message' value={message} id='message' onChange={handleMessageChange} />
        <input className='p-4 border hover:text-accent-content hover:bg-white hover:border-current hover:drop-shadow-lg w-4/5  xl:w-3/5 rounded-2xl mt-4 inputsend hover:transition-all ease-in-out duration-300' type='submit' value='Send' />
      </form>
    </section>
  )
}

export default ContactUs
