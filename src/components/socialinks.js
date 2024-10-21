import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram, FaLinkedin} from 'react-icons/fa'


function Socialinks() {
    const links=[
        {
            id:1,
            child:(
                <>
                inkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                inkedIn <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com'
        },
        {
            id:3,
            child:(
                <>
                inkedIn <FaInstagram size={30}/>
                </>
            ),
            href: 'https://instagram.com',
            style: 'rounded-br-md'
        }
    ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
    {
        links.map(({id,child,href,style})=>(
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'+' '+style}>
            <a href={href} target='blank'className='flex justify-between items-center w-full text-white'>
                {child} 
            </a>
        </li>
        )
    )}
    <ul>
    </ul>
    </div>
  )
}

export default Socialinks