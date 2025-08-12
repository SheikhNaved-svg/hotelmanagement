import React from 'react'
import { assets, cities } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col gap-4 items-start justify-center px-5 md:px-10 lg:px-24 pb-10  text-white bg-no-repeat bg-center bg-cover w-full lg:h-[740px] bg-[url("/src/assets/heroImage.png")]'>
        <p className='bg-[#49b9ff7c] px-5 rounded-3xl py-1 mt-28 md:mt-36 lg:mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-extrabold text-[40px] leading-[100%] md:text-[60px] font-playfair md:leading-[57px]'>Discover Your Perfect<br></br>
Getaway Destination</h1>
        <p className='leading-[100%]'>Unparalleled luxury and comfort await at the world's most exclusive
hotels and resorts. Start your journey today.</p>

         <form className='bg-white text-gray-500 w-full md:w-[300px]  lg:w-auto rounded-lg px-6 py-4  flex flex-col lg:flex-row max-md:items-start gap-4  mt-8'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt='icon' className='h-4' />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destinations'>
                    {cities.map((item,index)=><option key={index} value={item} />)}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                     <img src={assets.calenderIcon} alt='icon' className='h-4' />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                     <img src={assets.calenderIcon} alt='icon' className='h-4' />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero;
