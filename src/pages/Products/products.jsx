// import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = ()=> {
  return (
    <div>Products
    <Link to="/products/add" className="mx-3">Add</Link>
    <Link to="/products" >List</Link>
    <Outlet/>
    </div>
  )
}
export default Products
