import React from 'react'
import { assets } from '../assets/assets';

const TestimonialsCard = ({item}) => {
  return (
    <div>
        <div className='flex gap-4 items-center'>
                <img className='rounded-full w-12' src={item.image} alt='image' />
                <div>
                    <h1 className='font-medium text-[#374151]'>{item.name}</h1>
                    <p className='text-[#374151A1] text-[10px] font-medium'>{item.address}</p>
                </div>
        </div>
        <img className='mt-3' src={assets.fivestart} alt='image' />
        <p className='text-[#374151A1] text-[14px] mt-5'>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
    </div>
  )
}

export default TestimonialsCard;
