import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import img8 from '../assets/new.png';



import { Link } from 'react-router-dom'
const Blogtext = () => {
  return (
    <div className='w-screen pt-10  flex justify-center items-center '>
        <div className='w-[950px]  '>
          <div className='flex flex-col  p-16  mx-auto mt-5 gap-y-8'>

        <Link to="/blog" className='flex w-40 h-12 border ml-28 sm:ml-0 md:ml-0  bg-zinc-200 text-black items-center justify-center gap-1'>
            
        <AiOutlineArrowLeft className=''/>
            
            <p className='text-black text-xs font-normal font-[poppins] uppercase leading-snug tracking-wide'>Return to Blogs</p>

          </Link>
            <h1 className=' text-black  md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-opacity-90 md:text-[40px] sm:text-[40px] text-[36px] font-bold font-[Poppins] leading-[50px]'>
            Dive deeper into Seed: An exclusive message from the Founding Director
              </h1>
        </div>
        
      

      <div className='w-[700px] flex gap-y-8  p-16  h-full  flex-col'>
      <img className='md:w-[700px]  w-full      md:m-0 px-20 md:p-0 sm:p-0 lg:p-0   mx-auto my-4' src={img8} alt='/' />
       <p className='text-neutral-700  text-[13px]  md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 font-normal font-[Poppins] leading-[29.60px]'>
       I am incredibly excited to launch this website for S.E.E.D Inc., it is filled with hope and promise.
       </p>
       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>
       
       My interest in service started at St. Mary’s Convent, Kanpur. My dad was very particular that my 3 sisters and I were educated at this reputed institution, an all-girls school. He believed this would help raise his daughters into educated, confident young women. The school played a significant role in shaping who I am today.
       
       </p>
       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>
      

       One of the subjects in this school was called S.U.P.W., which stood for ‘Socially Useful Productive Work.’ One of my most profound memories as a 14-year-old was going to volunteer at a place called “Sishu Bhavan,” which means a Home for Children. It was an orphanage run by Mother Teresa’s Sisters of The Poor. An an 8th grader, my volunteer hour was to hold infants in the nursery. The sisters explained to me that babies needed to be held and rocked, which helped nourish them as much as or more than milk and formula. I loved doing this 2-3 times every month.

       </p>

       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>
      



During one of my days there, I heard the bell near the front door ring. The sisters waited for a few minutes and then opened the door. A tiny, well-swaddled infant, only a few days old, was left at the door. The sisters explained to me that this was one way they got infants at Sishu Bhavan. If a mother or a family could not care for their child, they could leave the child with them without any questions being asked. They will care for the child. Many children from Sishu Bhavan get adopted. My 14 year old eyes were in awe. So began my interest in service. Of course, it was only later that I realized how blessed I was to have this opportunity to volunteer at a Future Nobel Peace prize winner’s organization.


       </p>

       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>
       S.E.E.D. Inc has been started to help anyone who will benefit from it. Let us wish it well to see its mission accomplished!

       </p>
       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>


       </p>
       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>
       Do you have a story to tell? Please write to us and we will publish it in our blog.

       </p>
       <p className='text-neutral-700 md:m-0 px-24 md:p-0 sm:p-0 lg:p-0 text-[13px] font-normal font-[Poppins] leading-[29.60px]'>

       Thank you,<br/>
With warm wishes,<br/>
Lorency
</p>
      </div>


        </div>
    </div>
  )
}

export default Blogtext