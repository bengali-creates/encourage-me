import React from 'react'

const Fotter = () => {
  return (
    <footer className='flex justify-center items-center p-3 text-white shadow-indigo-300 shadow-lg/55'>
      <div className='text-sm'>
        &copy; {new Date().getFullYear()} Encourage Me. All rights reserved.
      </div>
    </footer>
  )
}

export default Fotter