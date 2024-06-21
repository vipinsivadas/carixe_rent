import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader() {
    const res = await axios.get('http://localhost:3000/carlist')
    const data = res.data
    return { data }
}

function Carmodel(props) {
    const { data } = useLoaderData()
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = data.filter(carlist =>
        carlist.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    console.log(data)
    useEffect(() => {
        axios.post('http://localhost:3000/users/verify', {}, { withCredentials: true })

            .then((data) => {
                console.log("loggen in")
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <main className='h-full-screen mt-32'>


            <section>
                <div className='flex justify-center items-center p-8'>
                    <img className='flex absolute ml-72 mr-8 rounded-md w-8' src="/icons/search_icon.png" alt="search" />
                    <input className='border border-green-200 text-sm px-32 py-2 pl-2 rounded-md' type="text" name='search' id='search' placeholder='Search here' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>
                <ul className=' mt-4  items-center gap-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 container mx-auto px-24 py-8'>
                    {
                     filteredData.map((carlist, index) => {

                            return <li className='mt-4 shadow-lg p-4 shadow-black/30' key={carlist._id}>
                                <Link to={'/carmodel/' + carlist._id}>
                                    <img className='w-60 h-52 cursor-pointer border-orange-200 rounded-sm' src={carlist.image} alt={carlist.name + "thumbnail"} />
                                    <h1 className='flex justify-center items-center text-xl'>{carlist.name}</h1>
                                    <h2 className='py-2'>{carlist.Discription}</h2>
                                    <div className='flex flex-row justify-between'>
                                        <h3 className=''>Model {carlist.model}</h3>
                                        <h3 className=''>{carlist.fuel}</h3>
                                    </div>
                                    <div className='flex flex-row justify-between'>
                                        <h2 className='text-orange-600 font-bold mt-2'><span className='text-orange-600'>Rs.</span>{carlist.price}</h2>
                                        <button className='bg-orange-400 p-2 text-black' type=''>Rent Now</button>
                                    </div>

                                </Link>
                            </li>

                        })
                    }
                </ul>
            </section>
        </main>
    );
}

export default Carmodel;