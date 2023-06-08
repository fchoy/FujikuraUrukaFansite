import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Container fluid="true" className='text-center footer-container col-12'>
      <p className="fs-5 d-sm-block d-none m-auto text-info">Developed by Felix Choy using React and Bootstrap. Images are property of Phase-Connect.</p>
      <p className="fs-6 d-sm-none m-auto text-info">Developed by Felix Choy using React and Bootstrap. <br/> Images are property of Phase-Connect.</p>
    </Container>
  )
}

export default Footer