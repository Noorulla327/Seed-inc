import React from 'react';

import img8 from '../assets/new.png';

import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from "react-icons/ai"
const Blog1 = () => {
  return (
    <div className='w-screen bg-white mb-16 text-[#00000099] flex items-center justify-center  px-4  '>
      <div className='w-[840px] md:justify-center justify-center md:pl-10   gap-x-10  md:items-center grid sm:grid-cols-2'>
        <div className='flex flex-col col-span-1 mb-4   gap-y-4 justify-center'>
          <p className='md:text-[17px]    text-black
text-opacity-70
text-[16px]
font-bold
font-[Poppins]
leading-[23px]'>Dive deeper into Seed: An exclusive<br/> message from the Founding Director</p>
         <div className='flex w-72 gap-x-2'>
         <p className='flex justify-center items-center gap-x-2'> 
            
              <p className='font-[Poppins]  text-black text-[11px]'>BY </p>
              <p className='text-[11px] text-zinc-500

font-normal
font-[Poppins]
uppercase
leading-none
tracking-wide'>Lorency</p>
            </p>
            <p className='flex justify-center items-center gap-x-2'> 
              <p className='font-[Poppins] text-black text-[11px] '>ON</p>
              <p className=' text-zinc-500
text-[11px]
font-normal
font-[Poppins]
uppercase
leading-none
tracking-wide'>October 28, 2023</p>
            </p>
            
         </div>
          <p className='  text-black 
text-opacity-50
text-[12px]
font-normal
font-[Poppins]
leading-4'>

I am incredibly excited to launch this website for S.E.E.D Inc., it is filled with hope and promise. My interest in service started at St. Mary’s Convent, Kanpur...
          </p>

          < div className='h-20 '>

          <Link to="/blogtext" className='flex w-40 h-12 mb-4 items-center gap-1'>
            <p className="text-blue-700 font-semibold text-[12px]">Continue Reading</p>
            <AiOutlineArrowRight clssName='mt-1'/>

          </Link>
          </div>

        </div>
        <img className='md:w-[370px] w-[450px] md:h-[270px]  col-span-1  mx-auto my-4' src={img8} alt='/' />

      </div>
    </div>
  );
};

export default Blog1;