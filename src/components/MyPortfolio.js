import React from 'react'
import pass from '../assets/passgen.jpg'
import back from '../assets/backgr.png'

function MyPortfolio() {

  const sourcecode=()=>{
    proj.map(({id,href})=>{
    window.open(href)
  })
  }
  const proj=[
    {
      id:1,
      src: pass,
      href:"https://github.com/syedjani3012/PassGenerate"
    },
    {
      id:2,
      src:back,
      href:"https://github.com/syedjani3012/ReactBGchange"
    }
  ];
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-500 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl text-white font-bold border-b-4 inline border-gray-500'>Portfolio</p>
          <p className='text-xl text-white py-6'>check out some of my work right here</p>
        </div>
    
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12 gap-8 sm:px-0'>
        {
          proj.map(({id,src,href})=>(
            <div key={id} className='shadow-md shadow-gray-400 rounded-lg duration-200 hover:scale-105'>
            <img src={src} alt=''></img>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200'>Demo</button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200' onClick={sourcecode}>Code</button>
            </div>
            </div>
          ))
        }
          </div>
        </div>
      </div>
  )
}
export default MyPortfolio