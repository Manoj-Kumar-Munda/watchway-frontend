import React from 'react'
import { Outlet } from 'react-router-dom'

const Channel = () => {
  return (
    <div>
      Channel
      <Outlet />
    </div>
  )
}

export default Channel