import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-full text-xl bg-blue-600 text-white justify-center gap-5 p-2'>
      <Link className='hover:text-orange-300 hover:underline' to='/'>Home</Link>
      <Link className='hover:text-orange-300 hover:underline' to='/Signup'>Signup</Link>
      <Link to='/Login'>Login</Link>
    </div>
  )
}

export default Navbar
