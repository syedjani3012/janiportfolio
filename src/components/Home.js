import React from 'react'
import image from '../assets/jani.jpeg'
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
  <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pr-5 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:7xl font-bold text-white'>I'm a Full Stack Developer</h2>
        <p className='text-gray-500 py-4 max-w-md'>I have 3 years of experience building web applications using react, tailwind css and Java</p>
      <div>
      <button>Portfolio</button>
      </div>
      </div>
      <div>
      <img src={image} className='rounded-2xl mx-auto h-1/2 w-2/3 md:w-full'></img>
      </div>
      </div>
  </div>
  )
}

export default Home