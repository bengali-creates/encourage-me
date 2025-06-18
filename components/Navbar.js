import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full flex justify-between items-center p-3 text-white backdrop-blur-xs shadow-indigo-300 shadow-lg/55'>
      <div className='text-2xl font-bold logo'>
        Encourage Me
      </div>
      <ul className='flex space-x-4'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/project">Project</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar