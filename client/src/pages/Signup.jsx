import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate()

const [data, setData] = useState({
  name: '',
  email: '',
  password: '',
})

  const registerUser = async(e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/Signup', {
        name, email, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success("Login Successful. Welcome!")
        navigate('/Login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-[100vh] bg-gray-600 pt-20 text-white'>
      <div className='flex flex-col w-[50%] mx-auto border-orange-600 border items-center'>
        <h1 className='text-3xl underline pt-10 pb-5'>SIGNUP</h1>
      <form className='flex flex-col w-full p-5 gap-5' onSubmit={registerUser}>
        <label>Name:</label>
        <input className='w-full p-2 text-gray-900' type="text" placeholder='Enter Your Full Name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>Email:</label>
        <input className='w-full p-2 text-gray-900' type="email" placeholder='Enter Your Email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password:</label>
        <input className='w-full p-2 text-gray-900' type="password" placeholder='Create Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button className='w-full p-2 bg-blue-700 text-xl hover:shadow-2xl cursor-pointer hover:bg-blue-900' type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Signup
