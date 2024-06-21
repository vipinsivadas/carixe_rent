import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineWhatsApp} from 'react-icons/ai';



function Root(props) {

    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });

    const user = useSelector(state => state.auth.user)
    const [drawerVisible, setdrawerVisible] = useState(false)
   

   const location = useLocation();

    return (
        <div className='relative'>
            <div className={`fixed top-16 right-0 w-9/12 h-full transition-all duration-300 ${drawerVisible?'translate-x-0':'translate-x-full'} bg-white shadow-2xl flex  justify-center items-center`}>
                <button className='absolute top-6 right-6' onClick={()=>{setdrawerVisible(false)}}>
                    <img src="icons/close_icon.png" alt="" />
                </button>
                <nav>
                    <ul className='flex flex-col items-center '>
                        <li className='p-2 text-yellow-300'  >
                            <Link className='hover:text-red-600 transition-colors ' to="/">Home</Link>
                        </li>
                        <li className='p-2 text-yellow-300' >
                            <Link className='hover:text-red-600 transition-colors' to='carmodel'>Car Model</Link>
                        </li>
                        <li className='p-2 text-yellow-300'  >
                            <Link className='hover:text-red-600 transition-colors' to='service'>Service</Link>
                        </li>
                        <li className='p-2 text-yellow-300'>
                            <Link className='hover:text-red-600 transition-colors' to='Booking'>Booking</Link>
                        </li>
                        <li className='p-2 text-yellow-300' >
                            <Link className='hover:text-red-600 transition-colors' to='Contact'>Contact</Link>
                        </li>
                        <li className='p-2 text-yellow-300' >
                            <Link to='Login'><button className='bg-red-400 w-16 rounded-2xl ' >Login</button></Link>
                        </li>
                    </ul>
                </nav>

            </div>

           <div className='fixed z-10 top-0 w-full'>
            <header className='bg-white shadow-md  '>
                <div className='flex justify-around p-4 '>
                    <div className='flex items-center gap-2'>
                        <img className='w-12' src='/icons/Car-icon.png' alt='' />
                        <h1 className='text-lg text-black font-bold'><span className='text-blue-900'>CA</span><span className='text-orange-400'>RIXE</span></h1>
                    </div>
                    <nav className='flex justify-center items-center hidden lg:block mt-4'>
                        <ul className=' flex flex-row justify-center gap-6 items-center font-medium text-black'>
                            <li>
                                <Link className={`hover:text-orange-400 transition-colors text-xl ${location.pathname === '/' ?'border-b-2 border-yellow-300' : ''} `} onClick={scrollTo} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className={`hover:text-orange-400 transition-colors text-xl ${location.pathname === '/carmodel' ?'border-b-2 border-yellow-300' : ''} `}onClick={scrollTo} to='carmodel'>Car Model</Link>
                            </li>
                            <li>
                                <Link className={`hover:text-orange-400 transition-colors text-xl ${location.pathname === '/Service' ?'border-b-2 border-yellow-300' : ''}`}onClick={scrollTo} to='Service' >Service</Link>
                            </li>
                            <li>
                                <Link className={`hover:text-orange-400 transition-colors text-xl ${location.pathname === '/Booking' ?'border-b-2 border-yellow-300' : ''}`}onClick={scrollTo} to='Booking'>Booking</Link>
                            </li>
                            <li>
                                <Link className={`hover:text-orange-400 transition-colors text-xl ${location.pathname === '/Contact' ?'border-b-2 border-yellow-300' : ''}`}onClick={scrollTo} to='Contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex items-center font-medium gap-4'>
                        {user ? <span className=' w-10 h-10  rounded-full bg-gray-400 flex flex-row justify-center items-center text-xl'>{user.firstname.charAt(0)}</span> : <Link to='login'><button className='bg-orange-400 w-16 rounded-sm '>Login</button></Link>}
                        <button className='md:hidden'onClick={()=>{setdrawerVisible(true)}}>
                            <img src="/icons/menu_icon.png" alt="" />
                        </button>
                    </div>
                </div>

            </header>
            </div>
            <Outlet />
           <footer className='bg-blue-950	 relative text-white'>
            <div className='grid lg:grid-cols-4 md-grid-cols-2 grid-cols-1 p-16 gap-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-3xl text-white'><span className='text-green-400'>CA</span>RIXE</h2>
                    <h4>Car Rent Services</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                     <div className='gap-6'>
                     <h3 className=''>HEAD OFFICE</h3>
                     <p></p>
                     <p>Phone:8075879991</p>
                     <p>Carixeofficial@gmail.com</p>
                     </div>
                   

                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-3xl text-white'>OUR TERMS</h2>
                    <ul>
                        <li>Daily Car Rental</li>
                    </ul>

                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-3xl text-white '>Quick Links</h2>
                    <ul>
                    <li className='py-2'>
                            <Link className='uppercase  hover:text-yellow-400 duration-100 cursor-pointer' to='carmodel'>Car Models</Link>
                        </li>
                        <li className='py-2'>
                        <Link className='uppercase  hover:text-yellow-400 cursor-pointer' to='service'>Service</Link>
                        </li>
                       
                        <li className='py-2'>
                            <Link className='uppercase  hover:text-yellow-400 cursor-pointer' to='booking'>Booking</Link>
                        </li>
                        <li className='py-2'>

                            <Link className='uppercase  hover:text-yellow-400 cursor-pointer' to='contact'>Contact</Link>
                        </li>
                        
                    </ul>

                </div>
                <div className='flex flex-col gap-5'>
                <h2 className='text-3xl text-white'>FOLLOW US</h2>
                   <div className=''>
                      <ul className='flex flex-row gap-4 text-black'>
                        <a className='py-2 ' href=""><AiFillFacebook className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/></a>
                        <a className='py-2' href=""><AiFillTwitterCircle className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/></a>
                        <a className='py-2' href=""><AiOutlineWhatsApp className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-green-400'/></a>
                        <a className='py-2' href=""><AiFillYoutube className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-red-600'/></a>
                        <a className='py-2' href=""><AiFillInstagram className='bg-slate-200 box-content px-1 py-1 rounded-lg shadow-lg shadow-black/30 hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-pink-600'/></a>
                      </ul>
                      <input className='' type="text" placeholder='Email'/>
                   </div>


                </div>
            </div>
           </footer>
            <footer className='bg-stone-800 text-white flex justify-center items-center p-2'>
                <span>@2024 CARIXE |Car Rental|All right reserved</span>
                
            </footer>
        </div>
    );
}

export default Root;