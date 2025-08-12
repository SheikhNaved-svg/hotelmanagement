import React from 'react'
import { testimonials } from '../assets/assets';
import TestimonialsCard from './TestimonialsCard';
const Testimonials = () => {
  return (
    <div className='bg-[#E4EEF84F] w-full flex justify-center px-5 md:px-10 lg:px-[50px] py-10 md:py-16 lg:py-[100px]'>
        <div className='w-full max-w-7xl'>
            <h1 className='text-[#252525] text-[32px]  lg:text-[40px] font-medium leading-[57px] md:text-center'>What Our Guests Say</h1>
            <p className='md:text-center text-[#6B7280E5] mt-3'>Discover why discerning travelers choose QuickStay for their luxury accommodations<br className='hidden md:block'></br> around the world.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:mt-14 lg:mt-20'>
                {testimonials.map((item,index)=>
                <TestimonialsCard item={item} key={index} />)}
            </div>
        </div>
    </div>
  )
}

export default Testimonials;
