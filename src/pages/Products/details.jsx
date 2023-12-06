// import React from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios';
import instance from '../../AxiosConfig/axiosConfig';
import  {useEffect, useState}  from 'react';
import { Container , Row ,Col} from 'react-bootstrap';
const Details = ()=> {
  let {id}= useParams();
  const [product , setProduct]=useState({});
  useEffect(()=>{
    async function showDetails(){
      try {
        const res =await instance.get(`/products/${id}`)
        setProduct(res.data)
      }catch (error){
        console.log(error);
      }
    }
    showDetails()
  },[])
  return (
    <>
    <Container>
    <Row >
    <Col>
      <img src={product.images[0]}/>
    </Col>
    <Col>
       <h1>{product.title}</h1>
        <h5>{product.title}</h5>
    </Col>
    </Row>
    </Container>
    </>
  )
}
export default Details
