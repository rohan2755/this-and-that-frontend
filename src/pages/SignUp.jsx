import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
// import imageLogin from '../assets/image.png'
import SummaryApi from '../common/index'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import game from "../assets/game.jpg"

const SignUp = () => {

  const [questions, setQuestions] = useState([]);
  const[user, setUser] = useState([])

    const [data, setData] = useState({
        number: "",
        name: ""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        console.log("submit")
        e.preventDefault()


        const dataResponse = await fetch(SummaryApi.signUp.url, {
            method: SummaryApi.signUp.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        console.log(dataApi.data)



        if (dataApi.success) {
            toast.success(dataApi.message)
            localStorage.setItem("userid", dataApi.data._id)
            navigate('/events')
        }

        if (dataApi.error) {
            toast.error(dataApi.message)
        }
    }

    return (


        // <div className="min-h-screen bg-pink-950 flex flex-col items-center py-10 fixed top-0 bottom-0 left-0 right-0 w-full h-full z-1000 justify-between bg-white-800 bg-opacity-50 ">
        //     <img src={game} alt="" className='absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-lg opacity-90' />
        //     <div className='relative z-10 w-full max-w-xl rounded-lg p-8'>
        //         <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-1000  flex justify-between items-center bg-gray-800 bg-opacity-70'>
        //             <div className='mx-auto bg-white shadow-lg px-0 rounded-lg'>
        //                 <div className='flex justify-center items-center'>
        //                     <div className=''>
        //                         {/* <img src={imageLogin} alt="" /> */}
        //                     </div>
        //                     <div className='mt-4 h-[352px] w-[400px] px-5 text-lg'>
        //                         <button className='block ml-auto'>
        //                             <IoMdClose />
        //                         </button>
        //                         <div className=''>
        //                             <p className='text-2xl font-semibold'>Enter your mobile number</p>
        //                             <p className='text-slate-400 text-sm mt-3'>We'll send you an OTP</p>
        //                         </div>
        //                         <div className='mt-5'>


        //                             <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        //                                 <div class="mb-5">
        //                                     <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
        //                                     <input type="text" id="name" name='name' value={data.name} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
        //                                 </div>
        //                                 <div class="mb-5">
        //                                     <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your number</label>
        //                                     <input type="number" name='number' value={data.number} onChange={handleOnChange} id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        //                                 </div>
        //                                 <div class="flex items-start mb-5">
        //                                 </div>
        //                                 <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        //                             </form>


        //                         </div>
        //                         {/* <div>
        //                     <p className='text-slate-400 text-sm mt-3'>By continuing, you accept that you are 18+ years of age & agree to the <a className='text-blue-600 cursor-pointer'>Terms and Conditions</a> </p>
        //                 </div>
        //                 <div className='mt-5'>
        //                     <button type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        //                 </div> */}
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>

        <div className="min-h-screen bg-gradient-to-br from-pink-700 via-purple-800 to-blue-900 flex flex-col items-center justify-center py-10 fixed inset-0 z-50">
  {/* Blurred Background Image */}
  <img 
    src={game} 
    alt="" 
    className="absolute inset-0 w-full h-full object-cover filter blur-lg opacity-80 z-0" 
  />

  {/* Overlay for Darkening Background */}
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-0"></div>

  {/* Centered Form Container */}
  <div className="relative z-10 w-full max-w-md mx-auto bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 backdrop-blur-lg">
    {/* <button className="block ml-auto text-gray-500 hover:text-gray-700">
      <IoMdClose className="w-6 h-6"/>
    </button> */}
    
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Enter your mobile number</h2>
      <p className="text-gray-500 text-sm mt-2">We'll send you an OTP</p>
    </div>

    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label 
          htmlFor="name" 
          className="block mb-1 text-sm font-medium text-gray-700">
          Your name
        </label>
        <input 
          type="text" 
          id="name" 
          name='name' 
          value={data.name} 
          onChange={handleOnChange} 
          className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Name" 
          required 
        />
      </div>

      <div>
        <label 
          htmlFor="number" 
          className="block mb-1 text-sm font-medium text-gray-700">
          Your number
        </label>
        <input 
          type="number" 
          name='number' 
          value={data.number} 
          onChange={handleOnChange} 
          id="number" 
          className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Mobile Number" 
          required 
        />
      </div>

      <button 
        type="submit" 
        className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
        Submit
      </button>
    </form>
  </div>
</div>
    )
}

export default SignUp