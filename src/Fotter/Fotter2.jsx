import React from 'react'
import img2 from "../assets/v2.png"
import { Link } from 'react-router-dom'

const Fotter2 = () => {
  return (
    <div className='flex justify-center items-center pt-8  md:hidden hover:bg-slate-950 text-white w-screen bg-black '>
        <div className='flex flex-col gap-10 w-full  pt-8 justify-center items-center'>
            <div className='flex gap-16 '>

                <div className='flex flex-col gap-y-3'>


                <div class="text-justify text-white text-opacity-90   text-[15px] font-bold font-['Montserrat'] ">Sitemap</div>


                <Link to="/" class="text-justify
hover:text-blue-500
            
            text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Home</Link>
            <Link to="/about" class="text-justify
hover:text-blue-500
            
            text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">About us</Link>
            
            <Link to="/about" class="text-justify hover:text-blue-500 text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Activities</Link>
            
            <Link to="/blog" class="text-justify
hover:text-blue-700
            
            text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Blogs</Link>
            
            
            <Link to="/contact" class="text-justify hover:text-blue-500 text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Contact</Link>
            
            <Link to="/donate" class="text-justify
hover:text-blue-500
            
            text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] ">Donate</Link>
                       
                    
                </div>


                <div className='flex flex-col leading-16 gap-y-4'>
            <div class="text-justify text-white text-opacity-90 text-[15px] font-bold font-['Montserrat'] leading-[18.70px]">Contact Us</div>
            
            <div class="text-justify text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] leading-[18.70px]">seedincl2021@gmail.com</div>
            <div class="text-justify text-white text-opacity-90 text-[14px] font-normal font-['Montserrat'] leading-[18.70px]">+1 - (123) 456 789</div>
</div>


            </div>


            <div className='w-96 h-[1px] bg-white'></div>



            <div className='w-[350px]  flex flex-col gap-y-8'>
            <img className='w-[150px] h-[60px] ' src={img2} alt="" />
            
           <p className='text-white
text-opacity-90
text-[13px]
font-normal
font-[Montserrat]

 mb-4
hover:text-blue-700
'>
           “Empowering Underprivileged Children<br/>and Families through Support & Education”
           </p>

         </div>
        </div>
    </div>
  )
}

export default Fotter2