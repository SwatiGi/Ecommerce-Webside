import React, { useEffect, useState } from 'react'
import { UserService } from '../services/UserService'
import { Container,Row,Col, Table,Spinner } from 'react-bootstrap'

const UserList = () => {
    let [loading,setLoading] = useState(true)
    let [state, setState] = useState({
    users:[]
    })
    useEffect(() => {
        UserService.getAllUser().then((res) => {
            setState({
                ...state,
                users:res.data
            })
            setLoading(false)
        
        }).catch((err) => {
        console.log(err)
        })
    },[])
  return (
      <Container className='mt-3'>
          <Row>
              <Col>
                  <h3 className='text-primary'>User List</h3>
                  <p className='fst-italic'></p>
              </Col>
          </Row>
          {!loading? <Row>
              <Col>
                  <Table striped bordered hover className='shadow-lg text-center'>
                      <thead>
                          <tr>
                      <th>SNO</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Webside</th>
                      <th>Company</th>
                      <th>Location</th>
                      </tr>
                      </thead>
                      <tbody>
                          {state.users.map((user) => (
                                  <tr key={user.id}>
                                  
                              <td>{user.id}</td>
                                  <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.website}</td>
                              <td>{user.company.name}</td>
                              <td>{user.address.city}</td>
                             
                                  
                                  </tr>
                                  
))}
                      
                      </tbody>
                  
                  </Table>
              
              </Col>
          </Row> : <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
  <Spinner animation="grow" variant="primary" />
  <span className="ms-2">Loading...</span>
</div>
          }
         
      
      </Container>
  )
}

export default UserList