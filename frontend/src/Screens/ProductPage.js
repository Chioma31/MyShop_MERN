import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Image, ListGroup, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductPage = () => {
  const params =   useParams()
  // const product = products.find((p) => p._id === params.id)

  const [product, setProduct] = useState({})


  useEffect(() =>{
    const fetchProduct = async() =>{
      const { data } = await axios.get(`/api/products/${params.id}`)
      
      setProduct(data)
    }
    fetchProduct()
  }, [params.id])

  return (
    <>
    <Button type='button' variant='light'className='my-3 p-3 rounded'><Link to='/'>Go Back</Link></Button>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col className='my-6' md={3}>
      <h3>{product.name}</h3>
        <ListGroup variant='flush'>
          <ListGroup.Item className='my-3 p-3 rounded'><Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroup.Item>
          <ListGroup.Item className='my-3 p-9 rounded'> Price: ${product.price} </ListGroup.Item>
          <ListGroup.Item>Description: {product.description} </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                Price:
                </Col>
                <Col><strong>${product.price}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? 'In Stock': 'Out Of Stock'} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled= {product.countInStock === 0}><strong>Add TO Cart</strong></Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ProductPage
