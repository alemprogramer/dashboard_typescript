import React from 'react'


const SortBy = () => {
  return (
    <div className='flex justify-end items-center mt-[18px] mb-[80px]'>
      <p className='font-bold text-lg pr-6'>Sort By</p>
      <div className="w-[130px] h-[40px] bg-white pt-2 border border-[#D0D5DD] rounded-lg">
        <select data-te-select-init>
          <option value="1">Relevance</option>
          <option value="2">Relevance</option>
          <option value="3">Relevance</option>
        </select>
      </div>
    </div>
  )
}

export default SortBy