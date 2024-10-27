import React, { useRef, useState } from 'react'
import image from '../assets/jani.jpeg'
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'

function Home() {
  const tiltref = useRef(null)
  const [xval, setxval] = useState(0);
  const [yval, setyval] = useState(0);

  const mouseMoving=(e)=>{
    setxval(e.clientX/25)
    setyval(e.clientY/25)
    // console.log(e.clientX, e.clientY);
    tiltref.current.style.transform=`rotateX(${yval}deg) rotateY(${xval}deg)`
  }

  return (
  <div name="home" onMouseMove={(e)=>{
    mouseMoving(e)
  }
  } className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <Link to='contact' className='relative flex items-center justify-end top-64 right-5'>
        <button className='bg-black text-white border-4 rounded-full px-4 py-3'>Hire me</button>
        </Link>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pr-5 md:flex-row'>
      <div id='homein' className='flex flex-col justify-center h-full'>
        <div id='tiltdiv' ref={tiltref}>
        <h2 className='text-4xl sm:7xl font-bold text-white uppercase font-[anzo1]'>I'm a Full Stack <br></br><span className='text-5xl leading-snug'>Developer</span></h2>
        <h3 className='text-4xl text-white leading-snug font-[anzo1] uppercase'>To Hire</h3></div>
        <p className='text-gray-500 py-4 max-w-md'>I have 3 years of experience building web applications using react, tailwind css and Java</p>
      <div className='flex'>
      <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        Portfolio
        <span className='group-hover:rotate-90 duration-300'>
          <FaArrowRight size={25}/>
        </span>
      </Link>
      </div>
      </div>
      <motion.div
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 3
      }}
      >
        <img src={image} alt="my profile" className='rounded-2xl mx-auto w-64 h-64 object-cover md:w-full'></img>
      </motion.div>
      <div>
      </div>
      </div>
  </div>
  )
}

export default Home