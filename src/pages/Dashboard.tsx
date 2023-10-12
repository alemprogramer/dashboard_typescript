import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UserCard from '../components/UserCard'
import Pagination from '../components/Pagination'
import SortBy from '../components/SortBy'


const Dashboard = () => {
  return (
    <div className='bg-[#F8F8F8] max-w-[1440px] mx-auto'>
    <div className=''>
        <Header />
        <div className='grid grid-cols-2'>
            <Sidebar />
            <div className=''>
                <SortBy />
                <UserCard />
                <Pagination />
            </div>
        </div>
    </div>
</div>
  )
}

export default Dashboard