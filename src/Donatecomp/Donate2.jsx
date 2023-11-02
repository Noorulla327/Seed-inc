

import React from 'react'
import g11 from "../assets/S2.png"
import g12 from "../assets/g11.png"
import g13 from "../assets/S11.png"
const Donate2 = () => {
  return (
    <div className="w-screen  flex justify-center items-center mb-5">

        <div className="lg:w-[870px] w-full grid grid-cols-1 col-span-3 gap-3 px-4 sm:grid-cols-3 gap-x-2  lg:px-10 ">

        

        <div className='sm:w-[240px]  w-full flex flex-col justify-center items-center  '>
                <img className='sm:w-[240px] sm:h-[260px] w-full' src={g11} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3  '>
                <div class="text-black w-full md:text-[16px] text-[16px] font-semibold font-['Poppins'] leading-10">Donate</div>
                <div class=" text-black w-full text-opacity-50 text-[11px]  font-normal font-['Poppins'] leading-normal">Your contribution today, a better world tomorrow.
</div>
                 <div className='w-[300px] flex mb-10 gap-4'>
                <a href="https://www.paypal.com/donate/?hosted_button_id=5ZWDHTUJX5LBW" className='w-20 h-8 flex justify-center items-center text-[11px]  font-normal font-[Poppins]  rounded-full text-white text-center bg-blue-700'> Paypal</a>
                <a href="seedincl2021@gmail.com" className='w-20 h-8 flex justify-center items-center rounded-full text-[11px]  font-normal font-[Poppins] leading-normal text-white text-center bg-violet-700'> Zelle</a>

                 </div>
                     </div>
            </div>







            <div className='sm:w-[240px] boder w-full flex flex-col justify-center items-center '>
                <img className='sm:w-[240px] sm:h-[260px] w-full' src={g12} alt="" />
                <div className='sm:w-[230px] mt-4  w-full flex flex-col gap-y-3'>
                <div class="text-black  text-[16px] font-semibold font-['Poppins'] leading-10">Sponsor an event</div>
                <div class=" text-black text-opacity-50 text-[11px]  font-normal font-['Poppins'] leading-normal">Be the catalyst for positive change – sponsor our mission.
</div>
                 <div className='w-[230px] mb-10 flex gap-4'>
                <a href="https://www.paypal.com/donate/?hosted_button_id=5ZWDHTUJX5LBW" className='w-20 h-8 flex justify-center text-[11px]  font-normal font-[Poppins] leading-normal items-center rounded-full text-white text-center bg-blue-700'> Paypal</a>
                <a href="seedincl2021@gmail.com" className='w-20 h-8 flex justify-center items-center rounded-full text-[11px]  font-normal font-[Poppins] leading-normal text-white text-center bg-violet-700'> Zelle</a>

                 </div>
                     </div>
            </div>




            <div className='sm:w-[240px] w-full flex flex-col justify-center items-center '>
                <img className='sm:w-[240px]  sm:h-[260px] w-full' src={g13} alt="" />
                <div className='sm:w-[240px] mt-4 w-full flex flex-col gap-y-3'>
                <div class="text-black  text-[16px] font-semibold font-['Poppins'] leading-10">Volunteer</div>
                <div class=" text-black text-opacity-50 text-[11px]  font-normal font-['Poppins'] leading-normal">Join us in making a difference, one selfless act at a time.
</div>
                 <div className='w-[300px] mb-10 flex gap-4'>
                <a href="https://www.paypal.com/donate/?hosted_button_id=5ZWDHTUJX5LBW" className='w-20 h-8 flex justify-center text-[11px]  font-normal font-[Poppins] leading-normal items-center rounded-full text-white text-center bg-blue-700'> Paypal</a>
                <a href="seedincl2021@gmail.com" className='w-20 h-8 flex justify-center items-center rounded-full text-[11px]  font-normal font-[Poppins] leading-normal text-white text-center bg-violet-700'> Zelle</a>

                 </div>
                     </div>
            </div>




            


            




            
    </div>
    </div>
  )
}

export default Donate2