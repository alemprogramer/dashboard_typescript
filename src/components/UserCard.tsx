import React from 'react'
import Review from '../assets/icon/Review'
import AddMore from '../assets/icon/AddMore'



const UserCard = () => {
  return (
    <div>
    <div>
      <img src='' />
      <div>
        <h3>Andi Lane</h3>
        <div>
          <h3>$20/Hr  </h3>
          <div>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </div>
    {/* on hover */}
    <div>
      <AddMore />
    </div>
  </div>
  )
}

export default UserCard