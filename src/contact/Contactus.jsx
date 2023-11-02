import React, { useState } from 'react'
import g55 from "../assets/g55.png"

const Contactus = () => {

    const [formData, setFormData] = useState({
        portal_name: 'Akscel',
        requested_demo_for_product_name: 'Akscel portal',
        first_name: '',
        last_name: '',
        organization_email: '',
        organization_name: '',
        message: '',
        phoneNumber: '',
        checkbox: false,
      });
    
      const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
    
        setFormData({
          ...formData,
          [name]: fieldValue,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform the API request here using the fetch() function
        fetch('https://1q627prxn8.execute-api.us-east-1.amazonaws.com/dev/akscel-demo-service/akscel_demo_model/create', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response or show a success message
            console.log(data);
          })
          .catch((error) => {
            // Handle API errors
            console.error(error);
          });
      };
    
  return (
    <div className='w-screen   flex justify-center items-center'>

        <div className='w-screen grid  md:grid-cols-2 lg:grid-cols-2 gap-4 '>

    <form onSubmit={handleSubmit}>

            <div className='w-full  flex sm:justify-center sm:items-center mt-20 gap-y-6 p-4 flex-col'>
               <div className='sm:w-[500px] w-full sm:pl-16 '> <h1 className='text-black w-full
sm:text-4xl
text-2xl
font-semibold
font-[Poppins]
leading-[60px]'>Contact Us</h1>
<p className='text-black mt-2
text-opacity-50
sm:text-[13px]
text-[11px]
font-normal
font-[Poppins]
'>Get in touch with us by filling this form.</p>
</div>
             <input className='text-black border w-full sm:w-[370px]  h-[40px] flex  px-4
text-opacity-60
sm:text-[14px]
text-[12px]
font-normal

font-[Poppins]
leading-normal' name="first_name"
value={formData.first_name}
onChange={handleInputChange} type="text" placeholder='Name'  />
             <input className='text-black border w-full sm:w-[370px] h-[40px] flex justify-center px-4
            
text-opacity-60
sm:text-[14px]
text-[12px]

font-normal
font-[Poppins]
' type="email" name="organization_email"
value={formData.organization_email}
onChange={handleInputChange} placeholder='Email'  id="" />
             < input className='text-black border w-full sm:w-[370px] h-[40px] flex justify-center px-4
text-opacity-60
sm:text-[14px]
text-[12px]

font-normal
font-[Poppins]
' type="text" name="phoneNumber"
value={formData.phoneNumber}
onChange={handleInputChange} placeholder='Phone Number' id="" />

            < textarea className='text-black border w-full sm:w-[370px] h-[100px] flex  px-4 
text-opacity-60
sm:text-[14px]
text-[12px]
justify-start
font-normal
font-[Poppins]
'name="message"
value={formData.message}
onChange={handleInputChange} placeholder='Type your question' id="" />
            <label className='w-full sm:w-[370px] h-[40px] flex   sm:gap-2
' htmlFor="">
            < input className='text-black 
text-opacity-60
sm:text-[14px]
text-[12px]
mb-6
font-normal
font-[Satoshi]
leading-snug
' type="checkbox" name="checkbox" id="" />
           < p className='// By clicking on “Send message” you agree with our Terms<br/>and Conditions, meaning you agree to get back in touch<br/>with you based on provided infomations based filling your<br/>forms.
text-black
text-opacity-60
sm:text-[12px]
text-[9px]
font-normal
font-[poppins]
w-[370px]
mx-auto
leading-snug'> By clicking on “Send message” you agree with our Terms and Conditions,
 meaning you agree to get back in touch with you based on provided infomations based filling your. </p>

            </label>
            <div className=' w-full flex mr-72 mb-10 sm:justify-center sm:items-center pt-14 '>


            <button className='text-black  w-28 h-10 hover:bg-lime-400 bg-lime-300 rounded-full justify-start items-center
text-opacity-60
text-[10px]
font-semibold
font-[Poppins]
ml-4'

            
type="submit">SEND MASSEGE</button>
            </div>

            </div>
            </form>
            <div className='flex w-full justify-center items-center'>
            < img  src={g55} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Contactus






































