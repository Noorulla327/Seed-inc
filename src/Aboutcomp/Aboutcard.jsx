

import React from 'react'
import g11 from "../assets/A1.png"
import g12 from "../assets/A2.png"
import g13 from "../assets/A3.png"
const Aboutcard = () => {
  return (
    <div className="w-screen  flex m-4 justify-center items-center pr-[30px] sm:pr-0 mb-5">

        <div className="lg:w-[870px] w-full grid grid-cols-1 col-span-3 gap-3 sm:px-4 sm:grid-cols-3 gap-x-2  lg:px-10 ">

        

        
        <div className='sm:w-[240px] w-full flex flex-col justify-center items-center rounded-lg shadow '>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g11} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3 h-[35vh] md:h-[30vh] '>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-black  text-[28px] sm:text-[16px] font-bold'>
                    Lorency Fernando M.D.
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-green-500 <- green-500
'>
                        Founding Director
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[12px] sm:text-[10px] flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[16px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">Lorency is a physician by training and </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">practice General, Child and Adolescent</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]"> Psychiatry in Fairfax, Virginia</div>
                </div>
                     </div>
            </div>





            <div className='sm:w-[240px]  w-full flex flex-col justify-center items-center rounded-lg shadow'>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g13} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3 h-[35vh] md:h-[30vh] '>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-black  text-[28px] sm:text-[16px] font-bold'>
                    Ajitha Ratnam
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-green-500 <- green-500
'>
                        Member
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[11px] flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">Ajitha is a business entrepreneur with a </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">passion for action. She has 30 years </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">experience in the service industry in India</div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">and USA,</div>
                </div>
                     </div>
            </div>


            




            
        <div className='sm:w-[240px]  w-full flex flex-col justify-center items-center  rounded-lg shadow'>
                <img className='sm:w-[240px] rounded-t-lg sm:h-[190px] w-full' src={g12} alt="" />
                <div className='sm:w-[230px] w-full mt-4 flex flex-col gap-y-3  h-[35vh] md:h-[30vh] '>
                <div class="text-black w-full md:text-[16px] flex flex-col justify-center items-center text-[16px] font-semibold font-['Poppins'] leading-2">
                    <h1 className='text-black  text-[28px] sm:text-[16px] font-bold'>
                    Jyothi Raghavan
                    </h1>
                    <p className='text-[20px] sm:text-[12px] font-normal text-green-500 <- green-500
'>
                        Member
                    </p>
                </div>
                <div class=" text-black w-full text-opacity-50 text-[11px] flex flex-col justify-center items-center font-normal font-['Poppins'] leading-normal">
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">Jyothi is a retired IT professional who is </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">focused on patient advocacy for the brain </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">tumor community and the pediatric </div>
                <div class="w-[359px] text-center text-neutral-500 text-[15px] sm:text-[10px] font-normal font-['DM Sans'] leading-[20px]">cancer community.</div>
                </div>
                     </div>
            </div>



            


            




            
    </div>
    </div>
  )
}

export default Aboutcard