import React from 'react'
import { BsRobot} from 'react-icons/bs'
import { HiSparkles } from "react-icons/hi2";

function Auth() {
  return (
    
    <div className='w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20'>
      <div className='w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200'>

        <div className='flex items-center justify-center gap-3 mb-6'>
          <div className='bg-black text-white p-2 rounded-lg'>
            <BsRobot size={18}/>
          </div>
            <h2 className='font-semibold text-lg'>Intervu.AI</h2>
        </div>

        <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
          Continue with
          <span className='bg-green-10p text-green-600 px-3 py-1 rounded-full inline-lex items-center gap-2'>
             <HiSparkles size={28}/>
          </span>
        </h1>
      </div>

    </div>
  )
}

export default Auth               
