
import { useState } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link, animateScroll as scroll, Element } from 'react-scroll'

export default function NavBar() {
  return (
    <Navbar 
      expand="lg"
    >
      <Container className='nav'>
        <Navbar.Brand href="/">

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          Click for more
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link> 
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link> 
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="music" smooth={true} duration={500}>Music</Nav.Link> 
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
