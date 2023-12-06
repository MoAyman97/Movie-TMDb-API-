import  { useState , useEffect } from 'react'
// import axios from 'axios'
import instance from '../../AxiosConfig/axiosConfig';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


const List = ()=> {
  const [products, setProducts]=useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    instance.get("products").then((res)=>{
      console.log(res.data.products);
      setProducts(res.data.products)
    }).catch((err)=>{
      console.log(err);
    });
  });
  
  return (
    <>
    
     <Row xs={1} md={2} lg={3} className="g-4 my-3">
      {products.map((prd) => (
        <Col key={prd.id}>
          <Card>
            <Card.Img style={{height:"250px"}} variant="top" src={prd.images[0]}/>
            <Card.Body>
              <Card.Title>{prd.title}</Card.Title>
              <Card.Text style={{height:"100px"}}>{prd.description}</Card.Text>
              <button className='btn btn-dark' onClick={()=>{navigate(`/details/${prd.id}`)}}>Details</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}
export default List
