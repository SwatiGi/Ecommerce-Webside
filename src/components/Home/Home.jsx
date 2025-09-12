import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {FaPlay} from "react-icons/fa"
import "./Home.css"
const Home = () => {
    const concerts = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
    action: "BUY TICKETS"
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
    action: "BUY TICKETS"
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
    action: "BUY TICKETS"
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
    action: "BUY TICKETS"
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
    action: "BUY TICKETS"
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
    action: "BUY TICKETS"
  }
];

    return (
      <>
       <Container fluid className=" d-flex justify-content-center align-items-center" style={{ height: "300px",background:"#777777" }}>
      <Row className="w-100 text-center">
        <Col>
          <h1 className="text-white" style={{ fontSize: "95px",fontFamily:"popins" ,fontWeight:"900",marginTop:"30px" }}>
            The Generics
                      </h1>
                      <button className='gen-btn'
                          bg="none"
                          variant="outline-info">Get our Latest Album</button>
                        <div
                      style={{
                          margin: "auto",
                          marginTop:"20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",       // round shape
        border: "2px solid skyblue", // border
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
                      <FaPlay size={24} color='skyblue' />       
                      
    </div>
        </Col>
      </Row>
            </Container>
            <h1 className='tour-heading'>TOURS</h1>
            <div className='main-container'>
            
                {concerts.map((data,i) => {
                    return <div className='contant-container' key={i}>
                        <b>{data.date}</b>
                        <p>{data.city}
                        </p>
                        <p>{data.venue}</p>
                        <button className='buy-btn'>{data.action}</button>
                        <hr />
                    </div>
                })}
            </div>
              <Container fluid className=" d-flex justify-content-center align-items-center" style={{ height: "150px",background:"#56ccf2" }}>
      <Row className="w-100 text-center">
        <Col>
          <h1 className="text-white" style={{ fontSize: "50px" ,marginTop:"30px" }}>
            The Generics
                        </h1>
                        </Col>
                        </Row>
                        </Container>
            
</>
      
  )
}

export default Home