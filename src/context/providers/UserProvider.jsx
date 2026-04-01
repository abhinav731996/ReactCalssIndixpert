import React from 'react'
import { UserContext } from '../Context'

const UserProvider = ({children}) => {
    const username = "sam"
  return (
    <div>
        <UserContext.Provider value={{username}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider
