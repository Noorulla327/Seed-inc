import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img2  from "../assets/v2.png"

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header = () => {
    const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='h-[60px] fixed pt-4 mb-20 bg-white w-screen flex justify-between text-black border font-semibold items-center col-span-3 '>
        <div className='col-span-1 sm:ml-10 '> 
        <img     
        className='w-[150px] h-[60px] lg:ml-12 mb-4'
        src={img2} alt="" />
        </div>


        < div className='col-span-2 md:flex hidden justify-between '>
            <p className='text-black mb-4
text-opacity-90
text-[10px]
font-semibold
font-[Montserrat]
uppercase
leading-none flex justify-center items-center lg:mr-12'>
                <Link className='px-3 hover:text-blue-700' to="/">HOme</Link>
                < Link className='px-3 hover:text-blue-700' to="/about"> about us</Link>
                <Link className='px-3 hover:text-blue-700' to="/">ACtivities</Link>

                <Link className='px-3 hover:text-blue-700' to="/blog">blog</Link>
                <Link className='px-3 hover:text-blue-700' to="/contact">Contact</Link>

                <Link className='px-3 hover:text-blue-700'to="/donate">donate</Link>
            </p>
            <h1 className='flex flex-col h-[60px] w-[260px] p-5 justify-center items-center  text-white 
            font-medium
            font-[Space
            Grotesk]
            pb-8
            leading-4 bg-blue-700 mb-[16px] '>



                <div className=' flex w-full items-center mt-3  gap-x-3'>
                <p className=' text-[11px] m gap-3 '>E-mail   </p>
                <p className='text-[11px]'>Seedinc12021@gmail.com </p>
                </div>

                <div className='flex w-full  gap-x-6 items-center'>
                <p className='text-[11px]'>TEL. </p>
                <p className='text-[11px]'>+1 - (571) 306 1408 </p>
                </div>
            

            </h1>
        </div>
        <div onClick={handleNav} className='block mr-5 md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 h-[400px]  bg-white w-[40%]  rounded-md bg- ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      
      <div className='col-span-1'> 
        <img     className='w-[150px] h-[86px]'src={img2} alt="" />
        </div>
      <p className='uppercase flex gap-y-6 flex-col '>
                <Link 
            className='px-4 hover:text-blue-700'
                
                to="/">HOme</Link>
                < Link className='px-4 hover:text-blue-700'to="/about"> about us</Link>
                < Link className='px-4 hover:text-blue-700'to="/about"> Activities</Link>
                <Link className='px-4 hover:text-blue-700' to="/contact">Contact us</Link>


<Link 
            className='px-4 hover:text-blue-700'
                
                to="/blog">blog</Link>
                
                <Link
            className='px-4 hover:text-blue-700'
                
                to="/donate">donate</Link>
                
            </p>

      </div>

    </div>
  )
}

export default Header