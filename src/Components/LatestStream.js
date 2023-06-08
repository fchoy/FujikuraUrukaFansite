import React from 'react'
import { Container } from 'react-bootstrap'
import './LatestStream.css'

const LatestStream = () => {
  return (
    <Container fluid="true" className= "col-lg-12 latest-stream-container vh-100 d-flex justify-content-center"> 

      <Container className="col-lg-6 d-flex flex-column align-items-center">

        <h1 className="mt-5 text-light h-auto" style={{fontFamily : "'Open Sans', sans-serif"}}>Latest Stream</h1>

        <iframe className='mt-5 mb-5  mt-md-auto mb-md-auto ratio ratio-16x9 col-auto col-sm-12' width="800" height="450" src="https://www.youtube.com/embed/aCWzhVKbSTY" 
        title="Trying to use cheap electronics I bought on Temu" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>

      </Container> 

    </Container>
  )
}

export default LatestStream