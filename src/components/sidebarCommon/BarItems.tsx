import React from 'react'
import ArrowDown from '../../assets/icon/ArrowDown'
import Care from '../../assets/icon/Care'



const BarItems = () => {
  return (
    <div className='flex items-center justify-between bg-white w-[354px] h-[50px] mb-[12px] rounded-lg'>
      <div className='flex'>
          {/* <img src='' className=''/> */}
          <div className='px-[15px]'>
          <Care />  
          </div>
        
        <p className='text-base font-semibold text-[#344054]'>Care Type</p>
      </div>

      <div className='px-[15px]'>
      <ArrowDown />

      </div>
      

    </div>
  )
}

export default BarItems