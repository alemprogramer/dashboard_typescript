import React from 'react'
import Review from '../icon/Review'
import AddMore from '../icon/AddMore';



const UserCard = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-5'>
    <div className='flex w-[888px] items-center bg-[#EAECF0AD] px-4 rounded-lg py-3' >
      <img src='/img/img.png' className="w-[98px] h-[98px] rounded-full mx-6"/>
      <div className='text-justify'>
        <h3 className='text-xl font-medium'>Andi Lane</h3>
        <div className='flex py-2'>
          <h3 className='text-xl font-semibold'>$20/  </h3>
          <p className='text-[12px] font-semibold '>Hr</p>
          <div className='flex pl-[30px]'>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <p className='text-[13px] font-normal '>Hi My name’s Rene, i can help with anything related to care, all bio goes here</p>
      </div>
    </div>
    {/* on hover */}
    <div>
      {/* <AddMore /> */}
    </div>
  </div>
  )
}

export default UserCard