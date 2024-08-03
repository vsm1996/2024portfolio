import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-transparent flex items-center justify-between py-2 px-12 md:px-24 border border-t-0 border-l-0 border-r-0 border-b-1'>
      <div>
        <span>Logo</span>
      </div>
      <ul className='w-fit flex items-center p-5'>
        <li
          className='text-base-300 cursor-pointer ml-3 hover:text-base-100'
        >
          About
        </li>
        <li
          className='text-base-300 cursor-pointer ml-3 hover:text-base-100'
        >
          Projects
        </li>
        <li
          className='text-base-300 cursor-pointer ml-3 hover:text-base-100'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <p className='hidden md:inline-block'>Contact Me</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
