
// import { useState } from 'react'
// import { Container, Nav, Navbar, Button } from 'react-bootstrap'
// import { Link, animateScroll as scroll, Element } from 'react-scroll'

// export default function NavBar() {
//   return (
//     <Navbar expand="lg" >
//       <Container className='nav'>
//         <Navbar.Brand href="/">

//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           Click for more
//         </Navbar.Toggle>

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Link as={Link} to="about" smooth={true} duration={500}>About</Link>
//             <Link as={Link} to="projects" smooth={true} duration={500}>Projects</Link>
//             <Link as={Link} to="music" smooth={true} duration={500}>Music</Link>
//             <Link as={Link} to="contact" smooth={true} duration={500}>Contact</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

import { useState } from 'react'
import { Container, Navbar, Nav, Modal, Button } from 'react-bootstrap'
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
      <Navbar className="d-md-none fixed-navbar" expand="lg">
        <Navbar.Toggle className="full-width-btn" onClick={() => setShowModal(true)}>Menu</Navbar.Toggle>
      </Navbar>



      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body className="nav-menu">
          <Link as={Link} to="about" smooth={true} duration={500} onClick={() => setShowModal(false)}>About</Link>
          <Link as={Link} to="projects" smooth={true} duration={500} onClick={() => setShowModal(false)}>Projects</Link>
          <Link as={Link} to="music" smooth={true} duration={500} onClick={() => setShowModal(false)}>Music</Link>
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

