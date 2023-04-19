import React from 'react'

const PrivateRoute = ({ children, auth}) => {
  return (
    <>
      {
        auth ? children : <h2>No access</h2>
      }
    </>
  )
}

export default PrivateRoute