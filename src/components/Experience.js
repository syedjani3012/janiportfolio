import React from 'react'
import {motion} from 'framer-motion'

function Experience() {
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-500 to-black w-full h-screen'>
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl border-b-4 border-gray-500 font-bold text-white inline'>Experience</p>
            <p className='text-xl text-white py-6'>Here are the technologies i worked on</p>
        </div>
        <div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-6 px-12 sm:px-0'>
            <motion.div className='shadow-md hover:scale-105 duration-500'
            animate={{x:[0,100,0]}}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
            }}
            >
                <img src='https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?w=2000' alt="htmlcss"></img>
            </motion.div>
            <motion.div className='shadow-md duration-500'
            animate={{x:[0,100,0]}}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
            }}
            >
                <img src='https://th.bing.com/th/id/OIP.ZnuW5bRhVtcJyDceW3EN6wHaF-?w=620&h=500&rs=1&pid=ImgDetMain' alt="react" className='hover:scale-120'></img>
            </motion.div>
            <motion.div className='shadow-md hover:scale-105 duration-500'
            animate={{x:[0,100,0]}}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
            }}
            >
                <img src='https://th.bing.com/th/id/R.3833d4b070ca7c198ebc5a2ba765a32e?rik=z7tex%2bOSycssNQ&riu=http%3a%2f%2fwww.techsors.com%2fwp-content%2fuploads%2f2016%2f02%2fJavascript.jpg&ehk=fkH4BtxJ97Ge0Aq%2fgaP4JpBqsY1Al2XSQxLVbl9UWUE%3d&risl=&pid=ImgRaw&r=0' alt="javascript"></img>
            </motion.div>
            <motion.div className='shadow-md hover:scale-105 duration-500'
            animate={{x:[0,100,0]}}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
            }}
            >
                <img src='https://www.wallpapertip.com/wmimgs/160-1606471_logo-java.png' alt="java"></img>
            </motion.div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience