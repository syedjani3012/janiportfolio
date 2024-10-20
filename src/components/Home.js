import React from 'react'
import image from '../assets/jani.jpeg'
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
  <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pr-5 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:7xl font-bold text-white'>I'm a Full Stack <br></br>Developer</h2>
        <p className='text-gray-500 py-4 max-w-md'>I have 3 years of experience building web applications using react, tailwind css and Java</p>
      <div className='flex'>
      <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        Portfolio
        <span className='group-hover:rotate-90 duration-300'>
          <FaArrowRight size={25}/>
        </span>
      </button>
      </div>
      </div>
      <div>
        <img src={image} alt="my profile" className='rounded-2xl mx-auto w-64 h-64 object-cover md:w-full'></img>
      </div>
      <div>
      </div>
      </div>
  </div>
  )
}

export default Home