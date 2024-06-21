import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <main className='h-full'>
            <div className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('image/hero.jpg')" }}>
                <div className='flex  text-white'>
                    <div className='p-32 mt-8'>
                        <h1 className=' text-7xl font-bold'>Easy And Fast Way </h1>
                        <h1 className=' text-7xl font-bold mt-6'>To Rent Your Car</h1>
                        <div className=' '>

                            <Link to={'/login/signup'}><button className='mt-8 p-2 px-6 border border-white '>Rent now</button></Link>

                        </div>

                    </div>
                </div>
            </div>

            <h1 className='flex flex-row justify-center items-center mt-16 text-5xl'>HOW IT WORKS</h1>

            <div className='h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-20 gap-8 mt-12'>

                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-20 ml-12 -mt-12 ' src="/icons/Date_icon.png" alt="" />
                    <h1 className='mt-4 ml-8'>SELECT DATE</h1>
                    <p className='ml-6 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque</p>

                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-20 ml-12 -mt-12 ' src="/icons/hero-icon.png" alt="" />
                    <h1 className='mt-4 ml-6'>Book A CAR</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-20 ml-12 -mt-12 ' src="/icons/payment_icon.png" alt="" />
                    <h1 className='mt-4 ml-6'>PAYMENT</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-20 ml-12 -mt-12 ' src="/icons/smile_icon.png" alt="" />
                    <h1 className='mt-4 ml-6'>ENJOY THE CAR</h1>
                    <h3></h3>
                </div>

            </div>
            <section className='h-60'>
             <h1 className='text-3xl font-bold flex justify-center items-center'>Explore Most Popular Car</h1>
             <p className='flex justify-center items-center text-1xl mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus corrupti quisquam asperi</p>
             <div className='flex justify-center items-center mt-8 gap-6 '>
                <h1 className='bg-yellow-300 p-2 px-4'>Maruti Suzuki</h1>
                <h1 className='bg-yellow-300 p-2 px-8'>Toyota</h1>
                <h1 className='bg-yellow-300 p-2 px-8'>Honda</h1>
                <h1 className='bg-yellow-300 p-2 px-8'>Hyundai</h1>
                <h1 className='bg-yellow-300 p-2 px-8'>Tata Motors</h1>
             </div>
            </section>



            <div className='bg-cover bg-center h-96' style={{ backgroundImage: "url('image/bmw.jpg')" }}>
                <div className='flex text-white justify-center items-center'>
                    <h1 className='mt-14 text-3xl ml-20 font-bold'>CAR RENTAL</h1>
                </div>
                <div className='text-white flex justify-center items-center ml-72'>
                    <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Natus velit laborum, id nam excepturi veniam magnam</p>

                </div>
                <div className='text-white flex justify-center items-center'>
                    <button className='ml-8 mt-4 bg-yellow-300 p-2 px-4'>READ MORE</button>
                </div>

            </div>

            <section className='mt-8 grid sm:grid-cols-2'>
                <div>
                    <img className='w-full h-96 p-2' src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/148477/thar-right-front-three-quarter-5.jpeg?isig=0&q=80" alt="" />
                </div>
                <div className='p-16'>
                    <h1 className='text-3xl font-extrabold'>Fell The Best Experience With Our<br />Rental Deal</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta quod itaque magnam distinctio? Minus ipsa veniam error quaerat temporibus consectetur tempora nobis mollitia dolorum, eligendi dolore est sequi blanditiis.</p>
                    <div className='mt-6 flex gap-6'>
                        <img className='w-8' src="/icons/Rix_icon.png" alt="" />
                        <h2>Deal for every Budget</h2>
                    </div>
                    <div className='mt-6 flex gap-6'>
                        <img className='w-8' src="/icons/bg_icon.png" alt="" />
                        <h2>Best price guaranteed</h2>
                    </div>
                    <div className='mt-6 flex gap-6'>
                        <img className='w-8' src="/icons/gear_icon.png" alt="" />
                        <h2 className=''>Support 24/7</h2>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;