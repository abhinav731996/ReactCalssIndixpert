import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const login = localStorage.getItem("login");
  return (
    <div>
      return login === "true" ? <Outlet /> : <Navigate to="/auth/signin" />;
    </div>
  )
}

export default ProtectedRoute
