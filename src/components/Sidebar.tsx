import React from 'react'
import BarItems from './sidebarCommon/BarItems'
import BarInput from './sidebarCommon/BarInput'
import Search from '../assets/icon/Search'
import Filter from '../assets/icon/Filter'
import Close from '../assets/icon/Close'
import MarkerPin from '../assets/icon/MarkerPin'



const Sidebar = () => {
  return (
    <div className='bg-[#F8F8F8] max-w-[389px] mx-auto'>
      <div className="relative">
        <input type="text"
          className="pl-10 pr-4 py-2 border rounded-lg"
          placeholder="Enter your email" />
        <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none">
          <Search />
        </div>
      </div>
      <div className=''>
        <Search />
        <input type='text' className='text-[#667085]' placeholder='Search' />

      </div>

      <div>
        <div>
          <Filter />
          <p>Filters</p>
        </div>
        <div>
          <p>Clear All</p>
          <Close />
        </div>
      </div>
      {/* Care Type */}
      <BarItems />

      {/* Care Frequency */}
      <BarItems />


      {/* Care Location */}

      <div>
        <div>
          <div>
            <MarkerPin />
            <p>Care Location</p>
          </div>
          <div>
            <p>Clear(1)</p>
          </div>
        </div>

        <div>
          <p>Location</p>
          <BarInput />
        </div>

      </div>

      {/* Care Schedule */}

      <div>
        <div>
          <div>
            <MarkerPin />
            <p>Care Schedule</p>
          </div>
          <div>
            <p>Clear(3)</p>
          </div>
        </div>

        <div>
          <p>Dates</p>
          <BarInput />
          <BarInput />
        </div>

        <div>
          <p>Times</p>
          Time Bar
        </div>

      </div>

      {/* Care Pricing */}
      <BarItems />

      {/* Care Seeking */}
      <BarItems />




    </div>
  )
}

export default Sidebar