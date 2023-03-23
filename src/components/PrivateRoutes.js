import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import isAuthenticated from '../utils/isAuthenticated'

const PrivateRoutes = () => {
  const authenticated = isAuthenticated()

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}

export default PrivateRoutes;
