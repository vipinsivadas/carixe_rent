import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form['email'].value
        const password = form['password'].value


        axios.post('http://localhost:3000/users/login',{email, password}, {withCredentials: true})
        .then(data =>{
            const user=(data.data.user)
            console.log(user)
            dispatch(addUser(user))
            navigate('/carmodel')
           
        })
        .catch(err =>{
            console.log(err)
            toast.error("Login failed");
        })
    }
    return (
        <main className='h-screen mt-16'>
            <section className='h-full flex flex-col items-center justify-center '>
                <div className='shadow-lg border border-yellow-300 p-16 shadow-black/60  '>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <h2 className='mb-8 p-8 text-xl font-bold py-4'>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input className='border-0 border-b-2 border-gray-300 outline-none mt-2' placeholder='email' type="email" name='email' id='email' />
                    <label htmlFor="password">Password</label>
                    <input className='border-0 border-b-2 border-gray-300 outline-none mt-2' placeholder='password' type="password" name='password' id='password' />
                    <button className='py-1 px-4 bg-green-400 text-white rounded-sm mt-4 hover:bg-red-600 transition-colors' type='submit' >Login</button>
                    <ToastContainer
                    autoClose={1000}
                    />
                </form>
                <span>Dont have acoount?</span>
                 <Link className='text-red-600' to='signup'>Signup</Link>
                </div>
            </section>

        </main>
    );
}

export default Login;