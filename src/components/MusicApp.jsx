import React, { useContext, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import "./MusicApp.css"
import { MyContext } from '../store/ContextApi'
const MusicApp = () => {
    let {data,setData} = useContext(MyContext)
 const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
  {
    title: 'Red Premium T-Shirt',
    price: 120,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
  },
  

]

  let handleAdd = (product) => {
    let isExist = data.find((item) => item.title === product.title);
    if (isExist) {
      alert('Product is added already')
      return
    }
      setData((pre) => [...pre, product])
      console.log(product)
        console.log(data)
    }
  return (
    <Container className="card" >
      <Row className="justify-content-center">
        {productsArr.map((product) => (
          <Col key={product.title} md={8} lg={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" className='img' src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id explicabo sapiente ad in consequatur vero cupiditate minima dolorum adipisci?
                </Card.Text>
                <Button variant="success" style={{ marginLeft: "10px" }}>
                  ${product.price}
                </Button>
                <Button variant="primary" onClick={()=>handleAdd(product)} style={{marginLeft:"10px"}}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MusicApp

