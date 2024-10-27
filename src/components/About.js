import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
    </div>
    <p className='text-xl mt-20'>
    I am a passionate Full Stack Developer with over 2.5 years of experience in creating dynamic and user-friendly web applications. 
    My expertise lies in Java, React.js, JavaScript, HTML, and CSS, allowing me to build robust front-end interfaces and seamless
    back-end functionalities.
    I thrive on challenges and enjoy problem-solving, always eager to learn new technologies and improve my skills.
     My approach is detail-oriented, and I take pride in delivering high-quality code that enhances user experience.
    </p>
    <br>
    </br>
    <p className='text-xl'>
    In my projects, I focus on collaboration and communication, ensuring that I understand client requirements 
    and translate them into effective solutions. I believe in the power of technology to drive innovation and am
    excited to contribute to impactful projects in the ever-evolving tech landscape.
    When I’m not coding, you can find me exploring new tech trends, contributing to open-source projects,
    or enjoying a good book.
    </p>
    </div>
    </div>
  )
}

export default About