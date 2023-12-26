import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cartElements } from './data/data';

const Store = () => {
    return (
        <>
            <div className='d-flex justify-content-center gap-4 mt-4'>

                {cartElements.map((ele) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.imageUrl} />
                        <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Text>
                                {ele.price}
                            </Card.Text>
                            <Button variant="primary" >Add To Cart</Button>
                        </Card.Body>
                    </Card>
                ))
                }
            </div>

        </>
    )
}

export default Store