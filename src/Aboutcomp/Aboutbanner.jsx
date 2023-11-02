import React from 'react'

const Aboutbanner = () => {
  const backgroundImageUrl="https://alpakawolken.de/wp-content/uploads/2023/05/Solarpunk-10things.jpg"
  
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  
  };
  return (
    <div className='flex flex-col w-screen h-screen justify-end items-center pb-32 pr-14 text-white' style={containerStyle}>


      <div className='sm:w-[700px] w-full sm:pl-0 pl-8'>
        <h1 className='-8
text-lime-300
text-[14px]
font-semibold
font-[Montserrat]
uppercase
leading-tight'>who we are</h1>
        <h1 className='text-5xl font-bold'>About us</h1>
      </div>

    </div>
  )
}

export default Aboutbanner