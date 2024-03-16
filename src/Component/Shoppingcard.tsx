import React from 'react'
import { Button, Card } from 'react-bootstrap';
interface card {
    item :{
        image:string;
        name:string;
        price:string;
        Description:string;
    }
    
}


const Shoppingcard : React.FC <card> = ({item}) => {
  return (
    <div className='cards'>
    <div className='cards'>
         <Card  style={{  margin:'20px' }} id="carte">
         <Card.Img variant="top" src={item.image} className="img" />
         <Card.Body>
         <Card.Title className='title'>{item.name}</Card.Title>
         <Card.Text className='text'>{item.price}</Card.Text>
         <Button variant="primary" className='btn'>Add to card </Button>
         </Card.Body>
         </Card>
         
   </div>
</div>
  )
}

export default Shoppingcard