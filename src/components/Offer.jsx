import React from 'react'
import { assets } from '../assets/assets';
import { exclusiveOffers } from '../assets/assets';
const Offer = () => {
  return (
    <div className='flex justify-center px-5 md:px-10 lg:px-[50px] py-10 lg:py-[100px] w-full'>
        <div className='w-full max-w-7xl'>
            <div className='flex-col flex md:flex-row  justify-between items-start'>
                    <div>
                        <h1 className='text-[32px] font-medium text-[#252525]'>Exclusive Offers</h1>
                        <p className='text-[#6B7280E5] mt-3'>Take advantage of our limited-time offers and special<br className='hidden md:block lg:hidden'></br> packages to enhance your <br className='hidden lg:block'></br>stay and create unforgettable memories.</p>
                    </div>

                    <button className='text-[14px] text-[#374151] flex gap-2 group cursor-pointer mt-5 lg:mt-0'>View All Offer <img className='group-hover:translate-x-1 duration-100 ease-in' src={assets.arrowIcon} alt='icon' /></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-20'>
                {exclusiveOffers.map((item,index)=>
                <div className='relative group cursor-pointer' key={item.id}>
                    <img className='rounded-[12px] h-[250px] w-full' src={item.image} alt='image' />
                    <div className='absolute top-0 px-5 py-5 flex flex-col justify-between gap-1 h-full  items-start'>
                        <div className='text-[#1F2937] text-[12px] font-medium bg-white rounded-[33px] px-2 py-1 inline'>{item.priceOff}% OFF</div>
                        
                        <div className='flex flex-col gap-[3px]'>
                        <h1 className='text-white text-[20px]'>{item.title}</h1>
                        <p className='text-white text-[14px]'>{item.description}</p>
                        <p className='text-[12px] text-white opacity-[70%]'>{item.expiryDate}</p>
                        </div>

                        <button className='text-[14px] text-white font-medium flex gap-2 cursor-pointer '>View Offers <img className='text-white group-hover:translate-x-1 duration-100 ease-in w-[13px]' src={assets.arrowwhite} alt='image' /></button>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Offer;
