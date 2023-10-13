import React from 'react'
import Marker from '../../icon/Marker'


const BarInput = () => {
  return (
    <div className="relative">
        <input type="text"
          className="pl-4 py-2 w-full h-[38px] border border-[#9E77ED] text-base rounded-lg "
          placeholder="Texas, 70123 " />
        <div className="absolute inset-y-0 md:right-4  
                    flex items-center ">
          <Marker />
        </div>
      </div>
  )
}

export default BarInput