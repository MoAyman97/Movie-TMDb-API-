import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container , Row ,Col} from 'react-bootstrap';
import instance from '../../AxiosConfig/axiosConfig';
const Details = () => {

    const {id}=useParams()
    const[movie,setMovie]=useState({})

    useEffect(()=>{
        instance.get(`/movie/${id}`)
        .then((res)=>{
            console.log(res);
            setMovie(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <>
    <Container>
    <Row className='my-4 bg-dark text-light p-5'style={{height:"100%"}} >
    <Col>
      <img  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path }`} className='rounded'/>
    </Col>
    <Col>
       <h2 className='mt-1'>{movie.original_title}</h2>
       <h6 className='mt-5 text-secondary'>{movie.overview}</h6>
    </Col>
    </Row>
    </Container>
        </>
        
    );
}

export default Details;
