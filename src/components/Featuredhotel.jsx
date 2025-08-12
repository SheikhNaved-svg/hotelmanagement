import React from 'react'
import Hotelcard from './Hotelcard';
import { roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Featuredhotel = () => {
  const navigate=useNavigate();
  return (
    <div className='w-full bg-[#E4EEF84F] px-5 md:px-10 lg:px-[50px] flex justify-center py-[50px] md:py-[70px] lg:py-[100px]'>
        <div className='w-full max-w-7xl'>
            <h1 className='text-[#252525] font-medium text-[40px] leading-[57px] md:text-center'>Featured Hotels</h1>
            <p className='text-[#6B7280E5] md:text-center mt-5 mb-5'>Discover our handpicked selection of exceptional properties around the world, offering<br className='hidden lg:block '></br> unparalleled luxury and unforgettable experiences</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-14 lg:mt-18'>
            {
              roomsDummyData.slice(0,4).map((room ,index)=>
                <Hotelcard key={room._id} room={room} index={index} />
              )
            }
            </div>
            <div className='flex justify-center pt-10 lg:pt-20'>
            <button onClick={()=>{navigate('/rooms/'); scrollTo(0,0)}} className='text-[#6B7280] hover:bg-gray-50 duration-300 ease-in-out cursor-pointer text-[14px] font-medium rounded-[4px] shadow px-5 py-2 bg-white'>View All Hotels</button>
            </div>
        </div>
      
    </div> 
  )
}

export default Featuredhotel;
