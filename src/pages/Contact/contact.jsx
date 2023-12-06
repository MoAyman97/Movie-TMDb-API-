// import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = ()=> {
  const navigate= useNavigate();

  const handleNavigate=()=>{
    navigate("/about");
  }
  return (
    <>
    <div>Contact</div>
    <div className="btn btn-primary" onClick={()=>{handleNavigate()}}>Navigate</div>
    </>
    
  )
}
export default Contact
