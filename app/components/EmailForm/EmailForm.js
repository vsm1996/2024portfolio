/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
'use client';
import { useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'

import { useIntersectionObserver } from '@/app/utlis/hooks/useIntersectionObserver'

import styles from './EmailForm.module.css'
import Footer from '../footer';

init('_hJ5jDJM8i0Pf1CvS')

const ContactUs = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    if(message.name < 2) setAlert('Must add name')
    if(message.email < 2) setAlert('Must add email')
    if(message.length < 3) setAlert('Must add message')

    emailjs.sendForm('service_e9qathj', 'template_u7s451w', form.current, '_hJ5jDJM8i0Pf1CvS')
      .then((result) => {
        console.log(result.text)
        setAlert('Thank you!')
        setTimeout(()=>{
          setAlert('')
        }, 5000)
      }, (error) => {
        console.log(error.text)
        setAlert(error.error)
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
    <section 
      ref={sectionRef} 
      className={`w-full opacity-0 mx-auto mt-14 flex flex-col items-center text-white pt-64 pb-16 bg-gradient-to-b from-accent-content to-primary-content
        ${isVisible ? `motion-safe:animate-fadeInUp` : ''}
        `} 
      id='contact' 
      style={{ clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <h2 className='w-full md:w-2/4 text-2xl text-center text-balance mb-16 hover:text-gold-base hover:motion-safe:animate-wiggle'>
        I&apos;m always excited to collaborate on new projects or discuss opportunities.
         Feel free to reach out!
      </h2>
      <form ref={form} onSubmit={sendEmail} className='w-10/12 md:w-6/12 xl:w-5/12 mt-4 mx-0 mb-8 p-8 
      flex flex-col items-center justify-center rounded-xl bg-neutral-content/10 
      hover:bg-neutral-content/20 hover:drop-shadow-lg hover:transition-all ease-in-out duration-300'
      >
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
        <input className='cursor-pointer p-4 border hover:text-accent-content hover:bg-white hover:drop-shadow-lg w-4/5  xl:w-3/5 rounded-2xl mt-4 inputsend hover:transition-all active:scale-95 ease-in-out duration-300' type='submit' value='Send' />
      </form>
      <Footer />
    </section>
  )
}

export default ContactUs
