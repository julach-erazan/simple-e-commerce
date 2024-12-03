import React from 'react'
import notFoundImg from '../../assests/images/404-page-not-found.png'

const NotFound = () => {
  return (
    <div className='w-full min-h-[500px] flex flex-col justify-center items-center'>
      <img src={notFoundImg} alt="page-not-found" className='w-[70%] max-w-[400px]'/>
      <div className='p-[10px]'>
        <h1 className='text-[50px] font-bold text-center'>Page Not Found</h1>
        <p className='text-[#999] text-center'>
          Ooops! We couldn't find page that you're looking for.
        </p>
      </div>
    </div>
  )
}

export default NotFound
