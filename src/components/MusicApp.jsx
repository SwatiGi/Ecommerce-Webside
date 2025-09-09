import React from 'react'
import { Card,Button } from 'react-bootstrap'
const MusicApp = () => {
    

const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

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

}

]
  return (
      <>
          {productsArr.map((product) => (
<Card style={{ width: '18rem' ,margin:"20px"}}>
              <Card.Img variant='top' src={product.imageUrl} ></Card.Img>
              <Card.Body>
              <Card.Title>
             {product.title}
              </Card.Title>
              <Card.Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id explicabo sapiente ad in consequatur vero cupiditate minima dolorum adipisci?        </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                      <Button variant='success' style={{marginLeft:"10px"}}>${product.price}</Button>
              </Card.Body>
          </Card>
))}
      
      </>
  )
}

export default MusicApp

//  <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>