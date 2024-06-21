import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../features/auth/authSlice';

function SignUp(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const firstname = form['firstname'].value
        const lastname = form['lastname'].value
        const email = form['email'].value
        const password = form['password'].value


        axios.post('http://localhost:3000/users/signup', { firstname, lastname, email, password }, { withCredentials: true })
            .then(data => {
                const user = (data.data.user)
                console.log(user)
                dispatch(addUser(user))
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <main className='h-screen mt-16'>
            <section className='h-full flex flex-col items-center justify-center ' >
                <div className='shadow-lg p-16 py-8 border border-teal-900 shadow-black/60 bg-yellow-300'>
                    <form className='flex flex-col ' onSubmit={handleSignUp}>
                        <h2 className='mb-8 text-xl font-bold'>Registration</h2>
                        <label htmlFor="firstname">First Name</label>
                        <input className='border-0 border-b-2 border-gray-300 outline-none ' type="text" name='firstname' id='firstname' />
                        <label htmlFor="lastname">Last Name</label>
                        <input className=' border-0 border-b-2 border-gray-300 outline-none' type="text" name='lastname' id='lastname' />
                        <label htmlFor="email">Email</label>
                        <input className='border-0 border-b-2 border-gray-300 outline-none' type="email" name='email' id='email' />
                        <label htmlFor="password">Password</label>
                        <input className='border-0 border-b-2 border-gray-300 outline-none' type="password" name='password' id='password' />
                        <button className='py-1 px-4 bg-fuchsia-600 text-white rounded-sm mt-4' type='submit'>Signup</button>
                    </form>
                </div>

            </section>

        </main>
    );
}

export default SignUp;