import React from 'react'
import './AllUsers.css';
import UserCard from './Components/UserCard/UserCard';

const AllUsers = ({allUsers}) => {
  return (
    <div className='all-users'>
      {allUsers.map(user => <UserCard key={user.id} data={user}  />)}
    </div>
  )
}

export default AllUsers