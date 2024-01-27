import React from 'react'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser'

function Dashboard() {
useRedirectLoggedOutUser("/login")
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard