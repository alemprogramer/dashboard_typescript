import React from 'react'
import Chat from '../assets/icon/Chat'
import Notification from '../assets/icon/Notification'
import Logo from '../assets/icon/Logo'

//import Avatar from '../assets/img/Avatar.png'


const Header = () => {
  return (
    <div className='bg-[#FFFFFF] max-w-[1440px] flex items-center  h-[76px] mx-auto'>
      <div className='pl-[26px]'>
      <Logo />
      </div>
      
      <div className='px-[200px]'>
        <ul className='flex text-[#475467] font-bold text-base gap-8'>
          <li className='hover:text-[#7F56D9]'>Home</li>
          <li className='hover:text-[#7F56D9]'>My visits</li>
          <li className='hover:text-[#7F56D9]'>My favorites</li>

        </ul>

      </div>

      <div className='flex pl-[180px]'>
        <Chat />
        <div className='px-4'>
          <Notification />

        </div>

        <div className='flex items-center'>
          {/* <img src={Avatar} /> */}

          <img className="w-[32px] h-[32px] rounded-full" src="/src/assets/img/Avatar.png" alt=" avatar" />



          <div className='text-justify pl-5'>
            <h4 className='text-[#000000] font-bold text-sm'>Client Rhye</h4>
            <p>test@caredirect.com</p>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Header