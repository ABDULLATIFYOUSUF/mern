import React from 'react'
import { useContext } from 'react'
import { UserContext } from './../../context/userContext';


function Dashboard() {

    const {user} = useContext(UserContext)

  return (
    <div className='bg-slate-700 text-white'>
      <h1 className='flex justify-center items-center w-full h-[100vh] text-3xl underline'>
      Dashboard Page Under Contruction

      </h1>
    </div>
  )
}

export default Dashboard
