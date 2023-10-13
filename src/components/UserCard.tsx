import React from 'react'
import Review from '../icon/Review'
import AddMore from '../icon/AddMore';
import { Rating } from "@material-tailwind/react";



const UserCard = () => {
  return (
    <div className='flex flex-col md:items-start md:justify-start gap-5'>
      <div className='flex md:flex-row flex-col md:w-[400px] lg:w-[585px] xl:w-[730px] 2xl:w-[888px] w-full items-center bg-[#EAECF0AD] hover:bg-[#D6BBFB45] px-4 rounded-lg py-3 hover:border border-[#7F56D9]' >

        <img src='/img/img.png' className="w-[98px] h-[98px] rounded-full xl:mx-6 md:mx-0 my-2" />

        <div className='md:text-start text-center'>
          <h3 className='text-xl font-medium'>Andi Lane</h3>

          <div className='flex md:flex-row flex-col md:py-2 '>
            <h3 className='text-xl py-1 md:py-0 font-semibold'>$20/Hr  </h3>
            <div className='flex justify-center md:pl-[30px]'>
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
          </div>

          <p className='text-[13px] py-1 md:py-0 font-normal '>Hi My name’s Rene, i can help with anything related to care, all bio goes here</p>
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