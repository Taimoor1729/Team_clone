import React from 'react'
import {Outlet, Navigate } from 'react-router-dom'

const PrivateCompo = () => {
const auth = localStorage.getItem("")


  // return auth ? <Outlet /> : <Navigate to="/modal" /> ;


 }

export default PrivateCompo