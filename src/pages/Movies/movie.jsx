// import React from 'react';
import { useEffect ,useState } from "react";
import instance from "../../AxiosConfig/axiosConfig";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const Movie = ()=> {
    const [movie , setMovie]=useState([]);
    let [page, setPage] = useState(1);
    const navigate = useNavigate();
    const next = () => {
        setPage(++page);
    };
    const prev = () => {
        if (page !== 1) {
            setPage(--page);
        }
    };
    useEffect(()=>{
    async function getMovies(){
      try {
        const res =await instance.get("movie/popular", { params: { page } })
        setMovie(res.data.results)
        console.log(res.data.results);
      }catch (error){
        console.log(error);
      }
    }
    getMovies()
  },[page])

  

    return(
        <>
        <Row xs={1} md={3} lg={4} className="g-4 my-3">
        {movie.map((movie) => (
          <Col key={movie.id}>
            <Card style={{height:"400px"}} className="bg-dark text-light border border-none">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path }`} style={{height:"250px"}} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Language: {movie.original_language}</Card.Text>
                <Card.Text>Date: {movie.release_date}</Card.Text>
                <button className='btn btn-light' onClick={()=>{navigate(`/details/${movie.id}`)}}>Details</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
                <div className="d-flex m-3 justify-content-center">
                <Button className='m-3' variant="primary" disabled={page == 1} onClick={()=>{prev()}}>Previous</Button>
                <Button className='m-3' variant="primary" onClick={()=>{next()}}>Next</Button>
            </div> 
            </Row>
        </>
    )
}
export default Movie