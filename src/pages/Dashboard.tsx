import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UserCard from '../components/UserCard'
import Pagination from '../components/Pagination'
import SortBy from '../components/SortBy'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Dashboard = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#F8F8F8] container'>

      <Header />
      <div className='flex flex-row '>
     

        <Sidebar />

        <div className='px-[80px]'>
          <SortBy />

          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <Pagination />
        </div>
      </div>

    </div>
  )
}

export default Dashboard