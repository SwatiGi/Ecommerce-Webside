import React,{useState} from 'react'
import { Col, Container, Row,Card,Form, Button } from 'react-bootstrap'

const RegistrationForm = () => {
    const [state, setState] = useState({user: {
        name: "",
        email: "",
        password:"",
    }
    })
    let updateInput = (e) => {
        setState({
            ...state, user: {
                ...state.user,
                [e.target.name]:e.target.value,
            }
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.user.name)
    }
  return (
      <Container className='mt-3'>
          <Row>
              <Col xs={4}>
                  <Card className='shadow-lg'>
                      <Card.Header className='p-3' style={{backgroundColor:"orange"}}>
                      
                      <h4>Registration</h4>
                      </Card.Header>
                      <Card.Body>
                          <Form onSubmit={handleSubmit}>
                              <Form.Group className='mb-3'>
                                  <Form.Control
                                      type='text'
                                      name='name'
                                      onChange={updateInput}
                                      placeholder='User name...'
                                  >
                                  
                                  </Form.Control>
                              
                              </Form.Group>
                                <Form.Group  className='mb-3'>
                                  <Form.Control type='password' placeholder='User Password...'
                                   name='password'
                                      onChange={updateInput}
                                  >
                                  
                                  </Form.Control>
                              
                              </Form.Group>
                              <Form.Group  className='mb-3'>
                                  <Form.Control type='email' placeholder='User Email...'
                                   name='email'
                                      onChange={updateInput}
                                  >
                                  
                                  </Form.Control>
                              
                              </Form.Group><Form.Group  className='mb-3'>
                                <Button variant='primary' type='submit'>Registration</Button>
                              
                              </Form.Group>
                          
                          </Form>
                      </Card.Body>
                  </Card>
              
              </Col>
          
          </Row>
      </Container>
  )
}

export default RegistrationForm