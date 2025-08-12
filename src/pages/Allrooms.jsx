import React from 'react'
import { assets, roomsDummyData } from '../assets/assets';

const Allrooms = () => {
  return (
    <div className='w-full flex justify-center pt-[100px] pb-[100px] px-5 md:px-10 lg:px-[50px]'>
        <div className='w-full max-w-7xl '>
            <h1 className='text-[40px] text-[#252525] font-medium'>Hotel Rooms</h1>
            <p className='text-[#6B7280E5] font-medium mt-5'>Take advantage of our limited-time offers and special packages to enhance<br></br> your stay and create unforgettable memories.</p>
            <div>
                {roomsDummyData.map((item,index)=><div key={item._id} className='flex py-14 gap-10 border-b border-[#6B72804D]'>
                    <img className='w-[412px] h-[260px] rounded-[15px]' src={item.images[0]} alt='image' />
                    <div>
                        <p className='text-[#838383] text-[14px] font-medium'>New York</p>
                        <h1 className='text-[#343434] text-[26px] '>{item.hotel}</h1>
                        <div className='flex items-center gap-2'><img src={assets.fivestart} alt='star' /> <span>200+ reviews</span>  </div>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Allrooms;
