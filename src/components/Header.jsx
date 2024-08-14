import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { RxHamburgerMenu } from "react-icons/rx";
// import Events from './Events';
import { Link } from 'react-router-dom'
// import Login from '../pages/Login'
import Logo from '../assets/opino.webp'

const Header = () => {
    const [openLogin, setOpenLogin] = useState(false)

    return (
        <header className='sticky top-0 z-50'>
            <div className='flex drop-shadow-md justify-center items-center p-4 bg-white'>
                <div className='hover:bg-slate-100 hover:rounded-full h-10 w-10 flex justify-center items-center'>
                    <div className='text-2xl '>
                        <RxHamburgerMenu />
                    </div>
                </div>

                <div className='bg-white mx-auto'>
                    <img src={Logo} alt="Probo" className="h-10 " />
                </div>
                <div className=''>
                    <button onClick={()=>setOpenLogin(true)} type="button" class="text-white bg-[#44579b] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">

                        Login/Signup
                    </button>


                </div>
            </div>
            {/* {
                openLogin && (
                    <Login openLogin={()=>setOpenLogin(false)}/>
                )
            } */}
            {/* <Events /> */}
        </header>
    )
}

export default Header