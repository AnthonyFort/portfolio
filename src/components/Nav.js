import { useState } from 'react'
import { Navbar, Nav, Modal, Button } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function NavBar() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="sidebar d-none d-md-block">
        <Nav className="flex-column">
          <Link as={Link} to="about" smooth={true} duration={500}>About</Link>
          <Link as={Link} to="projects" smooth={true} duration={500}>Projects</Link>
          <Link as={Link} to="music" smooth={true} duration={500}>Music</Link>
          <Link as={Link} to="contact" smooth={true} duration={500}>Contact</Link>
        </Nav>
      </div>
      <Navbar className="d-md-none nav-button" expand="lg">
        <Navbar.Toggle className="nav-button" onClick={() => setShowModal(true)}>Menu</Navbar.Toggle>
      </Navbar>



      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body className="nav-menu">
          <Link as={Link} to="about" smooth={true} duration={500} onClick={() => setShowModal(false)}>About</Link>
          <Link as={Link} to="projects" smooth={true} duration={500} onClick={() => setShowModal(false)}>Projects</Link>
          <Link as={Link} to="music" smooth={true} duration={500} onClick={() => setShowModal(false)}>Life Before Coding</Link>
          <Link as={Link} to="contact" smooth={true} duration={500} onClick={() => setShowModal(false)}>Contact</Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

