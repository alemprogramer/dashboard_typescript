import React, { FC, useState } from 'react'
import Dotted from '../icon/Dotted'

let pageNumbers:string[] =[
  '1',
  '2',
  '3',
  '...',
  '8',
  '9',
  '10',

]

const Pagination = () => {
  const [pageIndex, setPageIndex] = useState<string>('1')

  return (
    
    <div className='flex w-full items-center border-0 border-t justify-center gap-1 py-5 mt-[48px]'>
        {
          pageNumbers.map((index)=>(

            <button onClick={()=>{
              setPageIndex(index)
            }} className={`py-3 px-4 rounded-lg border border-transparent transition hover:border-[#9E77ED] hover:shadow-md hover:shadow-[#9E77ED]/30 ${pageIndex === index ? 'bg-[#9E77ED] text-white':'bg-transparent text-[#475467]'}`} type='button'>{index}</button>
          ))
        }
      

  </div>

  )
}

export default Pagination