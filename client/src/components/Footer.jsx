import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <h1 className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent text-xl font-bold'>CutMagic-AI</h1>
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All Rights Reserved by Anil Sonawane</p>
        <div className='flex gap-1'>
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.google_plus_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer