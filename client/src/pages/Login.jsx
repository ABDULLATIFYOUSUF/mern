import React, { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
  })
  
  
  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const { data } = await axios.post('/Login', {
        email,
        password
      });
      
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }
  return (
    <div className='w-full h-[100vh] pt-20 bg-slate-700 text-white'>
   <div className='flex flex-col w-[50%] items-center mx-auto border border-orange-600 py-10'>
   <h1 className='flex justify-center text-3xl underline pb-5'>LOGIN</h1>
      <form onSubmit={loginUser}>
      <input className='w-full p-2 text-gray-900 mb-10' type="email" placeholder='Enter Your Email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <input className='w-full p-2 text-gray-900' type="password" placeholder='Create Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button className='w-full p-2 bg-blue-700 mt-10 text-xl hover:shadow-2xl cursor-pointer hover:bg-blue-900' type='submit'>Login</button>
      </form>
    </div>   
      </div>
  )
}

export default Login
