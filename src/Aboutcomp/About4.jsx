import React from 'react';
import img14 from '../assets/sk2.png';

const About4 = () => {
  return (
    <div className='w-screen flex justify-center items-center bg-neutral-200  pb-8 bg-transparent '>
      
      <div className='w-screen  md:justify-center items-center grid gap-16 sm:grid-cols-2'>
        <img className='  ' src={img14} alt='/' />
        <div className='flex   items-center justify-center'>
          <p className='text-black 
md:text-[32px]
text-[25px]
font-medium
font-[Montserrat]
uppercase
leading-0>
'>
          If you believe in our mission,<br/> <span className= 'text-blue-700 text-[27px] md:text-[36px] font-bold'>Please Support</span><br/>our organization. <br/>Your contributions are tax deductible and a receipt<br/> will be provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About4;