import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown, Image} from 'react-bootstrap'
import UrukaIcon from '../Images/uruka-icon-nobg.png'
import '../Components/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar id="top-navbar" bg="none" variant="dark" expand="sm" className="text-light vh-100 header-navbar">
      <Container className="d-flex flex-lg-row flex-column align-items-center justify-content-center col-md-6 col-9 m-auto" fluid="true">

        <Navbar.Brand href="/home" className="col-auto m-auto me-lg-5 mb-lg-0 mb-md-5">
          <a href="https://phase-connect.com/" rel="noreferrer" target='_blank'><Image
            alt=""
            src={UrukaIcon}
            width="150"
            height="150"
            className="col-md-auto"
          /></a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggle" className="mt-3 mb-3 mt-md-0 mb-md-0"/>

        {/*For each button, translateY(n times 100vh)*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-light fs-4 d-flex flex-lg-row flex-column justify-content-evenly col-lg-12 col-auto mb-3">
            <Nav.Link id="info-button" className="text-light text-center fs-2 navbar-link" onClick={() => window.scrollBy(0, 1*window.innerHeight)}>Info</Nav.Link>
            <Nav.Link id="lastest-stream-button" className="text-light navbar-link text-center fs-2 navbar-link" onClick={() => window.scrollBy(0, 2*window.innerHeight)}>Latest Stream</Nav.Link>
            <Nav.Link id="merch-button" className="text-light navbar-link text-center col-auto fs-2 navbar-link" onClick={() => window.scrollBy(0, 3*window.innerHeight)}>Merch</Nav.Link>
            <Nav.Link id="contact-button" className="text-light navbar-link text-center col-auto fs-2 navbar-link" onClick={() => window.scrollBy(0, 4*window.innerHeight)}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default Header