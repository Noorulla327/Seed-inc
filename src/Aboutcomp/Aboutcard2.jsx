import React from 'react'
import g12 from "../assets/B3.png"

const Aboutcard2 = () => {
  return (
    <div className='w-screen m-4 flex flex-col mb-20 pr-[30px] sm:pr-0 justify-center items-center'>

<div className='sm:w-[240px]  w-full flex flex-col justify-center items-center rounded-lg shadow'>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g12} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3 h-[35vh] md:h-[30vh] '>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-black text-[33px] sm:text-[16px] font-bold'>
                    Asha Maran
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-green-500 <- green-500
'>
                Member
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[11px] flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">Asha is a recent college graduate from </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">University of Virginia working in software</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">engineering. She works hard to help others</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">in times of need.</div>
                </div>
                     </div>
            </div>
    </div>
  )
}

export default Aboutcard2