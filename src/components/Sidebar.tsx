import React from 'react'
import { useState } from "react";
import RangeSlider from "react-range-slider-input";

import 'react-range-slider-input/dist/style.css';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import BarItems from './sidebarCommon/BarItems'
import BarInput from './sidebarCommon/BarInput'
import Search from '../icon/Search'
import Filter from '../icon/Filter'
import Close from '../icon/Close'
import MarkerPin from '../icon/MarkerPin'
import Care from '../icon/Care'
import ArrowDown from '../icon/ArrowDown'
import ArrowDownColor from '../icon/ArrowDownColor'
import BarItemOnSelect from './sidebarCommon/BarItemOnSelect'





const Sidebar = () => {


  const [value, setValue] = useState([30, 60]);

  return (

    <>
      <div className='flex md:hidden h-fit bg-white px-[16px] py-[10px] border border-[#D0D5DD] rounded-lg'>
        <Filter />
        <p className='text-sm font-semibold pl-2'>Filters</p>
      </div>


      <div className='bg-[#9E77ED08] hidden md:flex flex-col max-w-[389px] mx-auto p-[18px] '>

        {/* search */}
        <div className="relative">
          <input type="text" id='SearchBox'
            className="pl-10 pr-4 py-2 w-[354px] h-[44px] border border-[#D0D5DD] text-base rounded-lg "
            placeholder="Search" />
          <label htmlFor='SearchBox' className="absolute inset-y-0 left-0 pl-3 flex items-center ">
            <Search />
          </label>
        </div>

        {/* filter & Clear */}

        <div className='flex justify-between py-[20px]'>
          <div className='flex bg-white px-[16px] py-[10px] border border-[#D0D5DD] rounded-lg'>
            <Filter />
            <p className='text-sm font-semibold pl-2'>Filters</p>
          </div>

          <div className='flex bg-white px-[16px] py-[10px] border border-[#D0D5DD] rounded-lg'>
            <p className='text-sm font-semibold pr-2'>Clear All</p>
            <Close />
          </div>
        </div>


        {/* Care Type */}
        <BarItems />

        {/* Care Frequency */}
        <BarItems />

        <div className='flex items-center justify-between bg-white w-[354px] h-[50px] mb-[12px] rounded-lg'>
          <div className='flex'>
            <div className='px-[15px]'>
              <Care />
            </div>

            <p className='text-base font-semibold text-[#344054]'>Care Type</p>
          </div>

          <div className='px-[15px]'>
            <ArrowDown />

          </div>


        </div>


        {/* Care Location */}




        <div className='bg-white px-3 py-5 rounded-lg'>
          <BarItemOnSelect />

          <div className='text-justify'>
            <p className='text-[12px] pb-2  font-medium text-[#6D6D6D]'>Location</p>
            <BarInput />
          </div>

        </div>

        {/* Care Schedule */}

        <div className='bg-white px-3 py-5 rounded-lg my-3'>
          <BarItemOnSelect />

          <div className='text-justify'>
            <p className='text-[12px] pb-2 font-medium text-[#6D6D6D]'>Dates</p>
            <div className='mb-2'>
              <BarInput />
            </div>

            <BarInput />
          </div>

          <div className='text-justify'>
            <p className='text-[12px] py-2 font-medium text-[#6D6D6D]'>Times</p>
            <RangeSlider className='bg-black' />
          </div>

        </div>

        {/* Care Pricing */}
        <BarItems />

        {/* Care Seeking */}
        <BarItems />




      </div>
    </>





  )
}

export default Sidebar