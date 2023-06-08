import React from 'react'
import { Container, Card, Carousel, Stack, Button } from 'react-bootstrap'
import '../Components/MerchSlider.css'
import MerchObject from '../merchdata.js'

const CarouselCard = ({img, title, price, url}) => {
  return(
      <Carousel.Item className="">
        <Stack direction='horizontal' gap={3}>
          <Card className="text-center m-auto col-lg-3 col-5">
            <Card.Img variant="top" src={img} className='w-100 img-fluid' style={{objectFit: "fill"}}/>
            <Card.Body className="">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Button type="link" href={url} target="_blank" variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
        </Stack>
      </Carousel.Item>)
};

const Slider = () => {
  return (
    <Container fluid="true" className="d-flex flex-column align-items-center merch-container vh-100" style={{height : "auto"}}>

      <h1 className="mt-5 text-light" style={{fontFamily : "'Open Sans', sans-serif"}}>Merch</h1>

      <Carousel variant='light' interval={10000} className="w-sm-50 w-100 h-100 d-flex justify-content-cneter align-items-center">
        {
          MerchObject.map(CarouselCard) //create new array of carousel items based on number of indexes in MerchObject
        }
      </Carousel>

    </Container>
  )
}

export default Slider