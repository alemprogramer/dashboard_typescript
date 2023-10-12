import React from 'react'
import ArrowDownColor from '../../icon/ArrowDownColor'
import MarkerPin from '../../icon/MarkerPin'

const BarItemOnSelect = () => {
  return (
    <div className='flex items-center justify-between bg-white   mb-[12px] '>
    <div className='flex'>
      <div className='pr-3'>
        <MarkerPin />

      </div>

      <p className='text-base font-semibold text-[#9E77ED]'>Care Location</p>
    </div>
    <div className='flex items-center'>
      <p className='text-[12px] font-medium text-[#9E77ED]'>Clear(1)</p>
      <div className='px-[8px]'>
        <ArrowDownColor />

      </div>
    </div>
  </div>
  )
}

export default BarItemOnSelect