import React from 'react'

const Profiles = async ({ params }) => {
  const{ profiles } = await(params)
  return (

    <div>
      <div className='relative'>
      <div id='bg-cover' className='h-[65vh]'>
        <video  className="w-full h-full object-cover" autoPlay loop muted  >
          <source src="https://v1.pinimg.com/videos/mc/720p/0f/3a/40/0f3a40f8053cb24b8599b44bf7db1693.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
    
            </video>
          </div>
          <div id='profile-img' className='absolute inset-0 top-11/12 flex items-center justify-center pointer-events-none' >
            <img src="https://avatars.githubusercontent.com/u/175535857?v=4" width={90} alt="" className="" />
          </div>
          </div>
      <div id='info' className='text-center mt-10 text-white '>
           <h1 className='text-3xl'>@{profiles}</h1>
          <div className='text-slate-500'>I am a lazy coder</div>
          <div>18,732 members • 99 Posts • $18,270/release</div>
        </div>
        <div className='flex justify-center mt-3'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Follow</button>
          <button className='bg-gray-300 text-black px-4 py-2 rounded-lg ml-4 hover:bg-gray-400'>Message</button>
        </div>
      </div>
      )
}

      export default Profiles