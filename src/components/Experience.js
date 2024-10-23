import React from 'react'

function Experience() {
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-500 to-black w-full h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl border-b-4 border-gray-500 font-bold text-white inline'>Experience</p>
            <p className='text-xl text-white py-6'>Here are the technologies i worked on</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0'>
            <div className='shadow-md hover:scale-105 duration-500'>
                <img src='https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?w=2000' alt="htmlcss"></img>
            </div>
            <div className='shadow-md hover:scale-105 duration-500 h-'>
                <img src='https://www.krishnakantyadav.com/blog/wp-content/uploads/2022/03/ReactJS-Everything-You-Should-Know-About-It.png' alt="htmlcss"></img>
            </div>
            <div className='shadow-md hover:scale-105 duration-500'>
                <img src='https://th.bing.com/th/id/R.3833d4b070ca7c198ebc5a2ba765a32e?rik=z7tex%2bOSycssNQ&riu=http%3a%2f%2fwww.techsors.com%2fwp-content%2fuploads%2f2016%2f02%2fJavascript.jpg&ehk=fkH4BtxJ97Ge0Aq%2fgaP4JpBqsY1Al2XSQxLVbl9UWUE%3d&risl=&pid=ImgRaw&r=0' alt="htmlcss"></img>
            </div>
            <div className='shadow-md hover:scale-105 duration-500'>
                <img src='https://www.wallpapertip.com/wmimgs/160-1606471_logo-java.png' alt="htmlcss"></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience