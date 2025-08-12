import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='bg-[#E4EEF84F] w-full flex justify-center px-5 md:px-10 lg:px-[50px] py-10 '>
        <div>
        <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 border-[#6B728033] '>
            {/*one*/}
            <div>
                <img src={assets.blacklogo} alt='logo' />
                <p className='text-[#6B7280] text-sm font-medium mt-4'>Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
                <div className='flex gap-2 mt-4'>
                     <img className='w-[21px]' src={assets.instagramIcon} alt='logo' />
                      <img className='w-[21px]' src={assets.facebookIcon} alt='logo' />
                       <img  className='w-[21px]' src={assets.twitterIcon} alt='logo' />
                        <img className='w-[21px]' src={assets.linkendinIcon} alt='logo' />
                </div>
            </div>
            {/*two*/}
            <div className='flex justify-between'>
                <div>
                    <div className='text-[#6B7280]'>COMPANY</div>
                     <div className='flex flex-col gap-2 mt-3'>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Careers</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Press</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Blog</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer' >Partners</p>
                    <p className='text-[#6B7280] text-[12px] font-medium  cursor-pointer'>About</p>
                    </div>
                </div>
                 <div >
                    <div className='text-[#6B7280]'>SUPPORT</div>
                    <div className='flex flex-col gap-2'>
                    <p className='text-[#6B7280] text-[12px] font-medium mt-3 cursor-pointer'>Help Center</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Safety Information</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Cancellation Options</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Contact Us</p>
                    <p className='text-[#6B7280] text-[12px] font-medium cursor-pointer'>Accessibility</p>
                    </div>
                </div>
                
            </div>

            {/*three*/}
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#6B7280]'>STAY UPDATED</h1>
                <p className='text-[#6B7280] text-[12px] font-medium'>Subscribe to our newsletter for travel inspiration and special offers.</p>
                <div className='flex '>
                    <input className='border-[#D9D9D9] border rounded-l-[4px] placeholder:text-[#6B7280]  placeholder:text-[12px] bg-white focus:outline-0 px-3 py-1 w-full' type='email' placeholder='Your email' />
                    <button className='rounded-r-[4px] bg-[#111827] px-2 py-2  '><img className='w-[13px] ' src={assets.arrowwhite} alt='icon'/></button>
                </div>
            </div>


        </div>

        <div className='border-t border-[#6B728033] mt-7 pt-5 flex justify-between'>
            <p className='text-[#6B7280] text-[12px] font-medium'>© 2025 QuickStay. All rights reserved.</p>
            <div className='flex gap-7'>
                <p className='text-[#6B7280] text-[12px] font-medium'>Privacy</p>
                <p className='text-[#6B7280] text-[12px] font-medium'>Terms</p>
                <p className='text-[#6B7280] text-[12px] font-medium'>Sitemap</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;
