import React from 'react'
import img2  from "../assets/img21.png"

import { Link } from 'react-router-dom'

const Fotter1 = () => {
  return (
<div className='w-screen 
hover:text-blue-700


bg-black hidden md:flex  justify-center items-center '>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-10 mt-10 gap-x-20 pt-20 pb-10 w-[780px]   '>
         
<div className='w-full flex justify-center items-center'>
         <div className='w-[350px] mb-16  flex flex-col gap-y-8'>
         <img className='w-[150px] h-[60px] ' src={img2} alt="" />

           <p className='text-white
text-opacity-90
text-[13px]
font-normal
font-[Montserrat] mb-4
hover:text-blue-700
'>
           “Empowering Underprivileged Children<br/>and Families through Support & Education”
           </p>

         </div>
         </div>
<div className='flex w-full justify-center items-center'>
<div className='flex w-full justify-center items-center'>
         <div className='w-full  gap-10 flex gap-x-3'>

            <div className='h-38 w-[400px border] md:ml-10 flex flex-col gap-y-[14px]'>
            <div class="text-justify text-white text-opacity-90   text-[15px] font-bold font-['Montserrat'] ">Sitemap</div>

            <Link to="/" class="text-justify
hover:text-blue-700
            
            text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Home</Link>

            <Link to="/about" class="text-justify hover:text-blue-700 text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">About us</Link>

            <Link to="/about" class="text-justify hover:text-blue-700 text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Activities</Link>

            <Link to="/blog" class="text-justify hover:text-blue-700  text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Blogs</Link>
            <Link to="/contact" class="text-justify hover:text-blue-700  text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Contact</Link>
            
            <Link to="/donate" class="text-justify
hover:text-blue-700
            
            text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Donate</Link>
                       
            </div>

            <div className='w-full h-[1px] bg-black md:flex hidden  '></div>


            <div className='flex flex-col leading-16 gap-y-4'>
            <div class="text-justify text-white text-opacity-90 text-[15px] font-bold font-['Montserrat'] leading-[18.70px]">Contact Us</div>
            
            <div class="text-justify text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] leading-[18.70px]">seedincl2021@gmail.com</div>
            <div class="text-justify text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] leading-[18.70px]">+1 - (571) 306 1408</div>
</div>
</div>
</div>

         </div>

        </div>

    </div>
  )
}

export default Fotter1
