import React from 'react'

function Contact() {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg flex flex-col mx-auto p-4 justify-center w-full h-full text-white'>
        <div className='flex flex-col py-6'>
            <p className='text-4xl border-b-4 border-gray-500 inline font-bold'>Contact</p>
            <p className='m-2'>Get in touch with me</p>
            <form action='https://getform.io/f/bwnngmda' method='POST' className='max-w-screen-lg flex flex-col mx-auto p-4 justify-center w-full h-full text-white'>
            <input className='my-2 w-1/4 rounded-lg text-black' type="text" name='name' placeholder='Enter your name'></input>
            <input className='my-2 w-1/4 rounded-lg text-black'type="email" name='email' placeholder='Enter your mail'></input>
            <input className='my-2 w-1/2 h-24 rounded-lg text-black'type="text" name='message' placeholder='Enter your message'></input>
            <button className='text-white bg-cyan-500 rounded-full w-1/6'>Let's Talk</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact