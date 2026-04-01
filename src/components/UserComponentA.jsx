import React, { useContext } from 'react'
import UserComponentB from './UserComponentB'
import { UserContext } from '../context/Context'

const UserComponentA = () => {
      const {username} = useContext(UserContext)
  
  return (
    <div>
      usercomponent A [username : {username}]
      <hr />
      <UserComponentB username = {username}/>

    </div>
  )
}

export default UserComponentA
