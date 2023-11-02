import React from 'react'
import ff from "../assets/Logo.png"
import f1 from "../assets/m1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"

const About6 = () => {
  return (
    < div className='flex justify-center items-center w-screen bg-blue-700'>
      <div className='grid grid-cols-1 sm:grid-cols-2  gap-16 m-6 mb-28 w-[850px]'>


      <div className='flex  flex-col  justify-center sm:pl-6 w-[420px]'>
            <div className='flex flex-col w-full gap-1 ml-4'>
              <img src={ff} className='w-8 ' alt="" />
          <div className='bg-white w-[260px] opacity-20 h-[1px]'></div>

            </div>
      
          <div className='flex text-white flex-col  m-4' >
            <h1 className='// Scholarship Funds text-white mb-2
text-[20px]
font-medium

font-[Poppins]
leading-[50px]'>
            Scholarship Funds
            </h1>
            <p className='text-white text-opacity-60 sm:text-[12px] text-[15px]
font-normal
font-[Poppins]
'>
            For student education in higher studies,<br/> tutoring, technical, vocational, trade school <br/> education as well as life skills and other post<br/> secondary programs.
            </p>
          </div>
          </div>











          <div className='flex  flex-col sm:pl-6  w-[420px]'>
            <div className='flex flex-col w-full gap-1 ml-4'>
              <img src={f3} className='w-8 ' alt="" />
          <div className='bg-white w-[260px] opacity-20 h-[1px]'></div>

            </div>
      
          <div className='flex text-white flex-col  m-4' >
            <h1 className='// Scholarship Funds text-white mb-2
text-[20px]
font-medium
font-[Poppins]
leading-[50px]'>
            Sports Funds
            </h1>
            <p className='text-white  sm:text-[12px] text-[15px]
text-opacity-60

font-normal
font-[Poppins]
'>

For student involvement in sports and other<br/> extra-curricular organizations.
            </p>
          </div>
          </div>





          <div className='flex  flex-col sm:pl-6  w-[420px]'>
            <div className='flex flex-col w-full gap-1 ml-4'>
              <img src={f2} className='w-8 ' alt="" />
          <div className='bg-white w-[260px] opacity-20 h-[1px]'></div>

            </div>
      
          <div className='flex text-white flex-col  m-4' >
            <h1 className='// Scholarship Funds text-white mb-2
text-[20px]
font-medium
font-[Poppins]
leading-[50px]'>
            Health Support Funds
            </h1>
            <p className='text-white text-opacity-60 sm:text-[12px] text-[15px]
font-normal
font-[Poppins]
'>

For developmental delay related speech,<br/>occupational and physical therapy that is not <br/>covered by insurance.
            </p>
          </div>
          </div>









          <div className='flex  flex-col sm:pl-6  w-[420px]'>
            <div className='flex flex-col w-full gap-1 ml-4'>
              <img src={f1} className='w-8 ' alt="" />
          <div className='bg-white w-[260px] opacity-20 h-[1px]'></div>

            </div>
      
          <div className='flex text-white flex-col  m-4' >
            <h1 className='// Scholarship Funds text-white 
text-[20px]
font-medium
mb-2
font-[Poppins]
leading-[50px]'>
            Mental Health Education Funds
            </h1>
            <p className='text-white text-opacity-60 sm:text-[12px] text-[15px]
font-normal
font-[Poppins]
'>
This organization will hold regular brief<br/> discussions as well as
informal one-on-one<br/> and small group meetings focused on<br/> various mental health-related topics.

            </p>
          </div>
          </div>
 


      </div>
    </div>
  )
}

export default About6