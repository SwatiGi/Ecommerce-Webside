import React, { useContext } from 'react'
import { MyContext } from '../store/ContextApi'
import "./CardData.css"
import { Table } from 'react-bootstrap'
const CardData = () => {
    let { data,show,setShow } = useContext(MyContext)
    console.log(data)
  return (
      <div className='overlay'>
     
          
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Price</th>
          <th>Color</th>
          <th>Username</th>
        </tr>
      </thead>
              <tbody>
                  {data.length > 0 && data.map((el,i) => <tr key={el.title}>
                      <td>{i+1}</td>
                      <td>{el.price}</td>
                      <td>{el.title}</td>
                      <td>{el.title}</td>
                  
                  </tr>)}
                 
              </tbody>
              
          </Table>
          
          <button onClick={()=>setShow(!show)}>X</button>
          
          
         
      </div>
  )
}

export default CardData