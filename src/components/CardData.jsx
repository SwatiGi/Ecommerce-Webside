import React, { useContext, useState,useEffect } from 'react'
import { MyContext } from '../store/ContextApi'
import "./CardData.css"
import { Table } from 'react-bootstrap'
const CardData = () => {
  let { data, show, setShow } = useContext(MyContext)
    let [total, setTotal] = useState(0)

  // Jab bhi data change ho, total ko update karo
  useEffect(() => {
    let sum = data.reduce((acc, el) => acc + el.price, 0)
    setTotal(sum)
  }, [data])
    let handleCart = () => {
        setShow(!show)
    }
  return (
      <div className='overlay'>
     
      <div className='data-container'> 
        
        {data.length > 0 ? data.map((el, i) => {
          return <div key={el.title} style={{background:"white",padding:"20px",border:"1px solid",margin:"20px",boxShadow:"0px 0px 10px ",borderRadius:"10px"}}>
                      <p><b>Price : </b>${el.price}</p>
                      <p><b>Title</b>{el.title}</p>
                  
                  </div>
        }):<h1>Item is not present</h1>}
        <h1><img src="https://img.icons8.com/?size=100&id=67439&format=png&color=000000" alt="" /> Total:{total}</h1>
               <button onClick={handleCart} className='cross-btn'>X</button>
           </div>
          
          
          
         
      </div>
  )
}

export default CardData