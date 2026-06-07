import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react"
import{
  BsRobot,
  BsMic,
  BsClock,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi"

function Home() {
  const {userData} = useSelector((state)=>state.user)
  return (
    <div className='min-h-screen bg-[#f3f3f3] flex flex-col'>
      <Navbar/>
      <div className='flex-1 px-6 py-20'>
        <div className='flex justify-center mb-6'>
          <div className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
