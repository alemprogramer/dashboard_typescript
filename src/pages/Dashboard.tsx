import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UserCard from '../components/UserCard'
import Pagination from '../components/Pagination'
import SortBy from '../components/SortBy'


const Dashboard = () => {
  return (
    <div className='bg-[#F8F8F8] container'>
  
        <Header />
        <div className='grid grid-cols-2'>
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