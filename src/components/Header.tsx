import React, { FC, useState } from 'react'
import Chat from '../icon/Chat'
import Notification from '../icon/Notification'
import Logo from '../icon/Logo'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'




const Header: FC = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#FFFFFF] w-full px-7 py-4 md:py-0 flex items-center justify-between '>

      <Logo />

      {
        toggle ?
          <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block ' />
          :
          <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block ' />

      }
{/* Desktop  */}

      <div className='hidden md:flex text-[#475467] font-bold text-base gap-5 lg:gap-8 py-7 '>
        <a href='/' className='hover:text-[#7F56D9]'>Home</a>
        <a href='/' className='hover:text-[#7F56D9]'>My visits</a>
        <a href='/' className='hover:text-[#7F56D9]'>My favorites</a>
      </div>

      <div className='hidden md:flex lg:gap-5 gap-1'>
        <Chat />

        <Notification />

        <button onClick={() => { }} type='button' className='flex gap-3 justify-start items-center'>
          <img className="w-[32px] h-[32px] rounded-full" src={'/img/img.png'} alt=" avatar" />
          <div className='flex flex-col justify-start items-start text-[#000000]'>
            <h4 className=' font-semibold text-sm'>Client Rhye</h4>
            <p className='text-xs text-[#475467]' >test@caredirect.com</p>
          </div>
        </button>
      </div>


      {/* Responsive */}

      <div className={`duration-500 md:hidden z-50 fixed bg-white top-[70px] w-150 h-screen 
        ${toggle ?
          'right-[0]'
          :
          'right-[-100%]'
          }
        `}>
       

        <div className='flex p-5 gap-5 '>
          {/* <Chat />

          <Notification /> */}

          <button onClick={() => { }} type='button' className='flex gap-3 justify-start items-center'>
            <img className="w-[32px] h-[32px] rounded-full" src={'/img/img.png'} alt=" avatar" />
            <div className='flex flex-col justify-start items-start text-[#000000]'>
              <h4 className=' font-semibold text-sm'>Client Rhye</h4>
              <p className='text-xs text-[#475467]' >test@caredirect.com</p>
            </div>
          </button>
        </div>

        <div className='flex flex-col pl-5 text-[#475467] font-bold text-base gap-8 py-2 '>
          <a href='/' className='hover:text-[#7F56D9]'>Home</a>
          <a href='/' className='hover:text-[#7F56D9]'>My visits</a>
          <a href='/' className='hover:text-[#7F56D9]'>My favorites</a>
        </div>
      </div>


    </div>
  )
}

export default Header