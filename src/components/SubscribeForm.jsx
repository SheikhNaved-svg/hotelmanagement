import React from 'react'
import { assets } from '../assets/assets'

const SubscribeForm = () => {
  return (
    <div className='w-full flex justify-center px-5 md:px-10 lg:px-[50px] xl:px-[110px] py-10 md:py-12 lg:py-[100px] '>
        <div className='w-full max-w-7xl bg-[#111827] py-14 rounded-2xl px-5'>
            <h1 className='text-[32px] lg:text-[40px] font-medium text-white lg:text-center'>Stay Inspired</h1>
            <p className='text-[#FFFFFFB2] lg:text-center mt-3'>
                Join our newsletter and be the first to discover new destinations, exclusive offers, and travel<br className='hidden lg:block'></br> inspiration.
            </p>
            <div className='flex flex-col lg:flex-row gap-3 justify-center mt-8'>
                <input className='bg-[#FFFFFF33]  lg:w-[264px]  focus:outline-0 text-white border-white placeholder:text-[#FFFFFFB2] rounded px-5 py-2' type='email' placeholder='Enter your email '/>
                <button className='text-white bg-[#000000] px-5 rounded flex gap-2 items-center group hover:text-gray-50 w-[130px] py-2'>Subscribe <img className='w-3 group-hover:translate-x-1 ' src={assets.arrowwhite} alt='icon' /></button>
            </div>
            <p className='lg:text-center text-[#FFFFFF80] text-sm mt-5'>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
        </div>
      
    </div>
  )
}

export default SubscribeForm
