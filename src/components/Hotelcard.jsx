import React from 'react'
import {Link} from 'react-router-dom';
import { assets } from '../assets/assets';
const Hotelcard = ({room,index}) => {
  return (
    <Link onClick={()=>scrollTo(0,0)} className='relative shadow bg-white rounded-[12px]' to={'/rooms/' + room._id}>
      <img className='rounded-t-[12px]' src={room.images[0]} alt='image' />
      { index % 2 === 0 && <div className='absolute top-3 left-3 text-[#1F2937] text-[12px] font-medium bg-white rounded-[33px] px-3 py-1'>best seller</div>}
      <div className='px-3 py-7'>
      <div className='flex justify-between'>
        <p>{room.hotel}</p>
        <div className='flex'><img src={assets.starIconFilled} alt='icon'/><span className='pl-1'>4.9</span></div>
      </div>

      <div className='flex mt-1 gap-1'>
        <img src={assets.locationIcon} alt='icon' />
        <p className='text-[#6B7280E3] font-medium text-[14px]'>Maldives</p>
      </div>

      <div className='flex items-center justify-between mt-3'>
      <div className='text-[20px]'>
        ${room.pricePerNight}<span className='text-[#6B7280E3] text-[14px] pl-1'>/ night</span>
      </div>
      <button className='border-[#D9D9D9] border rounded-[4px] px-3 py-2 hover:bg-gray-50'>View Details</button>
      </div>


      </div>

    </Link>
  )
}

export default Hotelcard;
