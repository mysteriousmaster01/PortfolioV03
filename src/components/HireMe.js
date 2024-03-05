import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
        <Link href='/contact' className='flex items-center justify-center absolute bg-light text-dark shadow-md  w-20 h-20 rounded-full font-semibold hover:bg-dark hover:text-light dark:text-light dark:bg-dark'> Connect</Link>
      </div>
    </div>
  )
}

export default HireMe
