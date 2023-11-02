import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tab1 from '../assets/tab1.png';
import tab2 from '../assets/tab2.png';
import tab3 from '../assets/tab3.png';
import tab4 from '../assets/tab4.png';
import a from '../assets/r123.png';


const Block = () => {


  return (
    <div className='w-screen  bg-neutral-100

    flex justify-center text-[#000000DE] px-4 items-center'>
        <Tabs className="">
    <TabList className="flex justify-center items-center font-normal sm:gap-x-8 lg:gap-x-0 mt-14 md:mr p-4   ">
      <Tab className="sm:w-36 w-24 shadow-lg border-slate-300 bg-white sm:h-14 h-10 flex justify-center text-[13px] sm:text-[16px] items-center hover:text-white hover:bg-blue-700 border text-center">
        Support</Tab>
        < div className='sm:w-[76px] shadow-lg lg:flex hidden h-[1px] bg-slate-300'></div>

        <Tab className="

transition duration-400 ease-in-out
        
        sm:w-36 w-24 shadow-lg border-slate-300  bg-white sm:h-14 hover:bg-blue-700  h-10 flex justify-center text-[13px] sm:text-[16px] items-center hover:text-white border text-center">
      Educate</Tab>
      < div className='w-[76px] lg:flex hidden h-[1px] bg-slate-300'></div>

      <Tab className="sm:w-36  w-24 bg-white shadow-lg border-slate-300  sm:h-14 h-10 flex justify-center text-[13px] sm:text-[16px] items-center hover:text-white hover:bg-blue-700 border text-center">
      
      Empower</Tab>
      < div className='w-[76px] h-[1px] lg:flex hidden bg-slate-300'></div>

      <Tab className="sm:w-36 w-24 border-slate-300 border shadow-lg bg-white sm:h-14 h-10 flex justify-center text-[13px] sm:text-[16px] items-center hover:text-white hover:bg-blue-700  text-center">
      
      Discover</Tab>

    </TabList>










    <TabPanel>

<div className='w-full  justify-center flex items-center  px-4  py-16 '>

<div className='max-w-[900px] mx-auto  md:justify-center  md:items-center gap-x-5 grid sm:grid-cols-2'>

  
    <img className='md:w-[350px] shadow-2xl flex justify-center items-center  mx-auto my-4' src={tab1} alt='/' />
    <div className='flex flex-col gap-2 md:gap-y-5 w-full justify-center'>
      <p className='text-[33px]  text-black

font-bold
font-[Poppins]
leading-[40px]
'>Support<br/> underprivileged<br/> individuals</p>
      <p className=' text-black 
      
text-opacity-60
sm:text-[14px]
text-[12px]
font-normal
font-[Montserrat]
leading-[25px]'>
  From the year it was founded, we at Seed decided we did not want to do things the old way. We wanted a change, and small steps were going to get us there.
      </p>
      <div className='  flex  text-blue-700
sm:text-[11px]
text-[11px]
font-medium
font-[Montserrat]
leading-
md:gap-y-4
gap-2 '> 
    <img src={a} className='w-5 h-5' alt="" />

    <p>Empowering the underprivileged to build a<br/> brighter future</p>
      </div>
    </div>
  </div>
</div>
</TabPanel>












<TabPanel>

    <div className='w-full  justify-center flex items-center  px-4 py-16'>
    
    <div className='max-w-[900px] mx-auto  md:justify-center  md:items-center gap-x-5 grid sm:grid-cols-2'>
      
        <img className='md:w-[350px] shadow-2xl flex justify-center items-center  mx-auto my-4' src={tab2} alt='/' />
        <div className='flex flex-col gap-2 md:gap-y-5 w-full justify-center'>
          <p className='md:text-[33px]  text-black
text-[28px]
font-bold
font-[Poppins]
leading-[40px]'>Educate people about Mental Health</p>
          <p className=' text-black 
text-opacity-60
sm:text-[15px]
text-[12px]
font-normal
font-[Montserrat]
leading-[25px]'>
  Spread awareness regarding mental health with goal of children, adolescents, young adults and parents to talk openly about mental health and remove the stigma surrounding mental health issues.
          </p>
          <div className='  gap-y-2 flex flex-col  text-blue-700
sm:text-[11px]
text-[11px]
font-medium
font-[Montserrat]
leading-4 '>
  

  <div className='flex gap-2 '>
  <img src={a} className='h-5 w-5' alt="" />

  <p>Through our educational initiatives, we aim to empower individuals to prioritize their mental health</p>

  </div>

  <div className='flex gap-2 '>
  <img src={a} className='h-5 w-5' alt="" />

  
<p>Conducting awareness campaigns and workshops to challenge misconceptions and promote empathy and compassion</p>
  </div>
  


          </div>
        </div>
      </div>
    </div>
    </TabPanel>






    <TabPanel>

    <div className='w-full  justify-center flex items-center  py-16 px-4'>
    
    <div className='max-w-[900px]  md:justify-center  md:items-center gap-x-5 grid sm:grid-cols-2'>
      
        <img className='md:w-[350px] shadow-2xl  flex justify-center items-center  mx-auto my-4' src={tab3} alt='/' />
        <div className='flex flex-col gap-y-5 w-full justify-center'>
          <p className='text-[33px]  text-black

font-bold
font-[Poppins]
leading-[40px]'>Empower through Education</p>
          <p className=' text-black 
text-opacity-60
sm:text-[15px]
text-[11px]
font-normal
font-[Montserrat]
leading-[25px]'>
  Empowering individuals through education is at the heart of SEED's mission. By focusing on education, we aim to break barriers and create a society where education is a fundamental right for all.
          </p>
          <div className='  gap-2 flex   text-blue-700
sm:text-[11px]
text-[11px]
font-medium
font-[Montserrat]
leading-4 '>
    <img src={a} className='h-5 w-5' alt="" />
  
        <p>Equipping individuals with the skills, knowledge, <br></br>and confidence they need to thrive.</p>
          </div>
        </div>
      </div>
    </div>
    </TabPanel>









    <TabPanel>

    <div className='w-full  justify-center flex items-centerpy-16 '>
    
    <div className='max-w-[950px] mx-auto p-4 md:justify-center  md:items-center gap-x-5 grid sm:grid-cols-2'>
      
        <img className='md:w-[350px] shadow-2xl flex justify-center items-center  mx-auto my-4' src={tab4} alt='/' />
        <div className='flex flex-col gap-y-5 w-full  justify-center'>
          <p className='text-[33px]  text-black

font-bold
font-[Poppins]
leading-[40px]'>Discover people’s potential</p>
          <p className=' text-black 
text-opacity-60
sm:text-[15px]
text-[11px]
font-normal
font-[Montserrat]
leading-[25px]'>
          We firmly believe that every individual possesses unique talents and untapped potential waiting to be unleashed. We provide people access to resources, mentorship, and pathways to success.
          </p>
          <div className='  gap-2 flex   text-blue-700
sm:text-[11px]
text-[11px]
font-medium
font-[Montserrat]
leading-4 '>
    <img src={a} className='h-5 w-5' alt="" />
  
        <p>Mentorship and guidance to help individuals navigate<br/> their personal and professional journeys.</p>
          </div>
        </div>
      </div>
    </div>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Block
