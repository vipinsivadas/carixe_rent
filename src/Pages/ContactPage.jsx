import axios from 'axios';
import React from 'react';


function ContactPage(props) {

    const Contactsubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const yourname = form['yourname'].value
        const email = form['email'].value
        const phone = form['phone'].value
        const message = form['message'].value

        axios.post('http://localhost:3000/contact', { email, phone, message, yourname})
            .then(data => {
                const details = (data)
                console.log(details)
            })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        <main className='h-screen=full mt-16'>
            <div className='bg-cover bg-center h-70 ' style={{ backgroundImage: "url('image/Contact.jpg')" }}>
                <h1 className='text-white flex flex-row justify-center items-center p-24 text-3xl font-bold'>CONTACT US</h1>
            </div>

            <div className='h-2/3 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-20 gap-6 -mt-28 '>

                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16 ' src="/icons/mail_icon.png" alt="" />
                    <h1 className='mt-4'>Email Us</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16' src="/icons/location-icon.png" alt="" />
                    <h1 className='mt-4'>Our address</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16' src="/icons/time_icon.png" alt="" />
                    <h1 className='mt-4'>opening Hours</h1>
                </div>
                <div className='shadow-md p-4 shadow-black/50 bg-gray-200 hover:bg-yellow-300 w-55 h-60 rounded-xl'>
                    <img className='w-16' src="/icons/call_icon.png" alt="" />
                    <h1 className='mt-4'>Call Us</h1>
                </div>

            </div>

            <section className='h-3/5 '>
                    
                        <div className='grid justify-center'>
                            <h1 className='justify-center text-2xl'>Contact Us</h1>
                            <p className='text-lg underline'>Fill the form</p>
                        </div>
                        <form className='grid justify-center gap-8' onSubmit={Contactsubmit}>
                        <input className='border mt-4 shadow-lg rounded-md p-2' type="text" name='yourname' id='yourname' placeholder='your name'/>
                        <input className='border shadow-lg rounded-md p-2' type="text" name='email' id='email' placeholder='email'/>
                        <input className='border shadow-lg rounded-md p-2' type="text" name='phone' id='phone' placeholder='phone'/>
                        <textarea className='border px-28 py-12 shadow-md'  id='message' placeholder='type your message'></textarea>
                        <button className='bg-yellow-300 hover:bg-blue-950 hover:text-white mb-4 p-2 rounded-2xl text-xl' type='submit'>send</button>


                    </form>
              
            </section>




        </main>
    );
}

export default ContactPage;