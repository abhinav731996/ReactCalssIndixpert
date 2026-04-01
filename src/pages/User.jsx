import React from 'react'
import UserComponentA from '../components/UserComponentA'
const User = () => {
    const username = 'Abhinav'
  return (
    <div>
      This is user page 
      <hr />
      This is main / parent component [username : {username}]
      <hr />
      <UserComponentA username = {username}/>
    </div>
  )
}

export default User
