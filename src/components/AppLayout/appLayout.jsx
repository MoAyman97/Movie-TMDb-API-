// import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './../Navbar/navbar';
 const AppLayout=()=> {
  return (
    <>
    <Header/>
    <div className="container"><Outlet/></div>
    </>
  )
}
export default AppLayout