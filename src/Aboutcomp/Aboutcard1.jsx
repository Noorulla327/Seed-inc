

import React from 'react'
import g11 from "../assets/B1.png"
import g13 from "../assets/B2.png"
import g131 from "../assets/B4.png"

const Aboutcard = () => {
  return (
    <div className="w-screen m-4 flex justify-center items-center  pr-[30px] sm:pr-0 mb-5">

        <div className="lg:w-[870px] w-full grid grid-cols-1 col-span-3 gap-3 sm:px-4 sm:grid-cols-3 gap-x-2  lg:px-10 ">

        

        
        <div className='sm:w-[240px]  w-full flex flex-col justify-center items-center border rounded-lg shadow '>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g11} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3 h-[35vh] md:h-[30vh]'>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-teal-900  text-[28px] sm:text-[16px] font-bold'>
                    Priya Foster
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-[#27C871] <- green-500
'>
    Member
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[11px] flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]"> Priya is a licensed professional counselor</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]"> (LPC), aka a therapist. She works with </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">teens and adults and is passionate about</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">mental health education for all. </div>
                </div>
                     </div>
            </div>





            <div className='sm:w-[240px]  w-full flex flex-col justify-center items-center rounded-lg shadow '>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g13} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3  h-[35vh] md:h-[30vh]'>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-black  text-[28px] sm:text-[16px] font-bold'>
                    Deepa Subramaniam
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-green-500 <- green-500
'>
            Member
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[11px]  flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[15px]">Deepa is an oncologist, researcher and</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">teacher who is passionate about science.</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">She has spent over two decades mentoring </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">children and young adults interested iN</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]"> STEM field</div>
                </div>
                     </div>
            </div>


            




            
            <div className='sm:w-[240px]  w-full flex flex-col justify-center items-center rounded-lg shadow '>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g131} alt="" />
               <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3 h-[35vh] md:h-[30vh] '>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-black text-[28px] sm:text-[16px] font-bold'>
                    Arun Maran
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-green-500 <- green-500
'>
                Member
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[11px] flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">Arun graduated from the University of</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">Maryland in 2020 is currently a full stack</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">software engineer in New York City. He has </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">been a tutor in STEM subjects since age 14.</div>
                </div>
                     </div>
            </div>




            


            




            
    </div>
    </div>
  )
}

export default Aboutcard