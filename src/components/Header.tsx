import React, { FC } from 'react'
import Chat from '../icon/Chat'
import Notification from '../icon/Notification'
import Logo from '../icon/Logo'

//import Avatar from '../assets/img/Avatar.png'


const Header:FC = () => {
  return (
    <div className='bg-[#FFFFFF] w-full px-7 flex items-center justify-between'>

      <Logo />

      <div className='flex text-[#475467] font-bold text-base gap-8 py-7 '>
        <a href='/' className='hover:text-[#7F56D9]'>Home</a>
        <a href='/' className='hover:text-[#7F56D9]'>My visits</a>
        <a href='/' className='hover:text-[#7F56D9]'>My favorites</a>
      </div>

      <div className='flex gap-5 '>
        <Chat />

        <Notification />

        <button onClick={()=>{}} type='button' className='flex gap-3 justify-start items-center'>
          {/* <img src={Avatar} /> */}

          <img className="w-[32px] h-[32px] rounded-full" src={'/img/img.png'} alt=" avatar" />
          <div className='flex flex-col justify-start items-start text-[#000000]'>
            <h4 className=' font-semibold text-sm'>Client Rhye</h4>
            <p className='text-xs text-[#475467]' >test@caredirect.com</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header