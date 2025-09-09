import React,{useState} from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
    const [state, setState] = useState({ count: 0 })
    console.log(state.count)
    let Increament = () => {
        setState({count:state.count+1})
        console.log(state.count)
    }
    let decrement = () => {
               setState({count:state.count-1})

    
    }
  return (
      <Container className='mt-3'>
          
          <Row>
              <Col xs={4}>
                  <Card className='shadow-lg'>
                      <Card.Body>
                      <p className='display-2'>{state.count}</p>
                          <Button variant="primary" onClick={()=>Increament()}  className='mt-3 mb-3'>Increament</Button>
                          <Button variant='success' onClick={()=>decrement()} >Decrement</Button>
                      </Card.Body>
                  
                  </Card>
                  
              
              </Col>

          
          </Row>
      
      </Container>
  )
}

export default Counter