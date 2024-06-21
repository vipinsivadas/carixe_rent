import React from 'react';
import { Link } from 'react-router-dom';

function Service(props) {
    return (
        <main className='h-screen-full mt-16'>
            <div className='bg-cover bg-center h-80' style={{ backgroundImage: "url('image/Contact.jpg')" }}>
                <h1 className='text-white flex flex-row justify-center items-center p-24 text-4xl font-bold'>__Welcome To OUR  SERVICESS__</h1>
            </div>
           
                <h1 className='flex justify-center p-4 text-white'>Why Choose Us</h1>
                <div className='grid  sm:grid-cols-2 lg:grid-cols-3 p-20 gap-16'>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <img className='w-16 ' src="/icons/hero-icon.png" alt="" />
                        <h1>Veriety Of Car Brands</h1>
                        <p></p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <img className='w-16' src="/icons/hero-icon.png" alt="" />
                        <h1>Veriety Of Car Brands</h1>
                        <p></p>
                    </div>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <img className='w-16' src="/icons/hero-icon.png" alt="" />
                        <h1>Veriety Of Car Brands</h1>
                        <p></p>
                    </div>
                </div>
           
            <section className='mt-4 grid sm:grid-cols-2'>
                <div>
                    <img className='w-full h-96 p-2' src="/image/service.jpg" alt="" />
                </div>
                <div className='p-16'>
                    <h1 className='text-2xl font-bold'>Car Rental</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi quam voluptate temporibus nostrum, totam optio error voluptatibus ipsam, exercitationem nobis culpa quisquam iure eaque pariatur officiis consectetur corporis natus.</p>
                    <Link to='/carmodel'><button className='bg-yellow-300 mt-6 p-2' type='submit'>View Plan& price</button></Link>
                </div>
                <div className='p-16'>
                    <h1 className='text-2xl font-bold'>Carixe Servicess</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi quam voluptate temporibus nostrum, totam optio error voluptatibus ipsam, exercitationem nobis culpa quisquam iure eaque pariatur officiis consectetur corporis natus.</p>
                    <Link to='/carmodel'><button className='bg-yellow-300 mt-6 p-2' type='submit'>View Plan& price</button></Link>
                </div>
                <div>
                    <img className='w-full h-96 p-2' src="/image/service-img.jpg" alt="" />
                </div>
            </section>



            <h1 className='flex justify-center items-center text-3xl font-bold mt-12'>Servicess</h1>
            <section className='grid sm:grid-cols-2 lg:grid-cols-3 grid p-16 gap-6'>
                <div className='shadow-md p-2 shadow-black/50 bg-gray-200 h-48 w-55 rounded-2xl'>
                    <h1 className='p-8 text-lg font-bold'>Daily Car Rental</h1>
                    <p className='p-8 -mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, saepe?  </p>
                </div>
                <div className='shadow-md p-2 shadow-black/50 bg-gray-200 h-48 w-55 rounded-2xl'>
                    <h1 className='p-8 text-lg font-bold'>Monthly Car Rental</h1>
                    <p className='p-8 -mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia deleniti velit maiores </p>
                </div>
                <div className='shadow-md p-2 shadow-black/50 bg-gray-200 h-48 w-55 rounded-2xl'>
                    <h1 className='p-8 text-lg font-bold'>Annuel Car Rental</h1>
                    <p className='p-8 -mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia deleniti velit maiores</p>
                </div>
            </section>

            <div className='bg-yellow-300 p-12'>
                <h1 className='text-3xl flex justify-center items-center'>Need help to renting a car <span className='font-bold '>(+40)74333241</span></h1>
            </div>

        </main>
    );
}

export default Service;