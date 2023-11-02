
import img13 from "../assets/img12.png";

import React from 'react';

const About2 = () => {
  return (
    <div className='w-full  hover:text-white flex justify-center items-center bg-white py-16 px-2'>
      <div className='max-w-[830px] md:gap-10 md:mx-auto p-2 grid sm:grid-cols-2'>
        <div className='flex flex-col gap-8 justify-center'>
          
        <p 
className='
text-black
text-opacity-90
md:text-[13px]
text-[12px]
font-normal
font-[Montserrat]
leading-7

'
          >
            Welcome to <span className="font-semibold font-[montserrat]">SEED</span> Inc! We are a non-profit organization that stands  for <span className="font-semibold font-[montserrat]">Support, Educate, Empower, Discover</span>. The primary mission of this organization is to support and educate underprivileged children and families in every way possible to empower them and to help discover their potential.

          </p>
          <p 
className='
text-black
text-opacity-90
md:text-[13px]
text-[12px]
font-normal
font-[Montserrat]
leading-7

'
          >
Additionally, we strive to educate the community about mental health to improve emotional well being; to remove stigma surrounding mental health issues, remove stigma, and encourage seeking guidance and treatment.
          </p>






        </div>
        <img className='md:w-[340px] shadow-lg  w-full mx-auto my-4' src={img13} alt='/' />

      </div>
    </div>
  );
};





          

export default About2

