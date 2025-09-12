import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import singer from "../../assets/singer.jpeg";  
import "./About.css"
import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";
const About = () => {
    return (
      <>
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "300px",background:"#777777", }}>
      <Row className="w-100 text-center">
        <Col>
              <h1 className="text-white" style={{
                marginTop:'150px',
                fontSize: "90px", fontFamily: "popins", fontWeight: "900", height: "300px"
              }}>
            The Generics
                      </h1>
                    
        </Col>
      </Row>
            </Container>
            <h1 style={{textAlign:"center",fontFamily:"Tagesschrift, system-ui",fontWeight:"700",marginTop:"10px"}}>ABOUT</h1>
        <div className="text-container">
          <div className='image-box'> <img src={singer} alt="singer-img" className='singer-img' /></div>
          
          <p className='text'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in fugit beatae culpa dignissimos. Unde omnis, tenetur dignissimos molestias, quam ipsum sequi ipsam ab ut non numquam obcaecati facilis velit corporis ex neque voluptatibus ratione sit. Dolorum incidunt consectetur reiciendis veniam quaerat minus enim aspernatur neque, perferendis unde, laborum, a eaque magni nemo eos labore consequuntur! Iste et libero rem enim repudiandae! Est itaque harum sed libero blanditiis, asperiores doloribus inventore, ab quam neque in omnis sequi reprehenderit rerum eveniet? Consequuntur quibusdam dignissimos, repudiandae deleniti ratione, delectus commodi repellendus id fuga laborum illum reiciendis laboriosam sequi, dolore neque iure quo nulla dolorum provident reprehenderit voluptatem esse unde. Rerum veniam corrupti soluta tenetur iusto nemo, unde totam optio consequuntur. Corporis quisquam enim totam veritatis at sint neque. Debitis labore ex ut adipisci vitae quae veniam repellendus, corrupti sint iste accusamus temporibus aspernatur cupiditate incidunt illo error dolor maxime modi autem facilis rerum velit similique saepe. Incidunt possimus ullam exercitationem nobis. Facere soluta debitis ad beatae officiis reprehenderit id repudiandae? Magni soluta expedita libero, quidem incidunt iste laborum accusantium porro accusamus ab a praesentium. Odio deserunt eaque voluptates dolore rem facere sapiente, sint necessitatibus deleniti quaerat recusandae id nostrum rerum. Commodi amet, fuga eum ad cumque beatae minima libero, necessitatibus architecto a porro eaque, quos molestiae quod provident. Quo illo tempore omnis rerum amet. Explicabo expedita magnam cumque deserunt rem placeat. A adipisci iusto vitae? 
          </p>
         </div>
      
   


    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "150px", background: "skyblue" }}
    >
      <Row className="w-100">
        <Col className="d-flex justify-content-center align-items-center gap-4">
          <h1
            className="text-white m-0"
            style={{ fontSize: "50px", display: "inline-block" }}
          >
            The Generics
          </h1>

          <div className="d-flex align-items-center gap-4">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={34} color="red" />
            </a>
            <a
              href="https://www.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify size={32} color="green" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} color="blue" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>


     
</>
  )
}

export default About

 