import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
        <div className='w-full h-full  bg-black flex flex-col gap-10 justify-center items-center border fixed z-10'>
            <h1 className='font-bold text-8xl text-white'><span className='text-red-500'>Oops!</span> 404 Error</h1>
            <Link to={"/"} className='font-bold text-white text-5xl'>Go To Home</Link>
        </div>
  )
}
