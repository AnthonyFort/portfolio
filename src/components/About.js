import { Container, Row, Col } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'



export default function About() {
  return (
    <Container name='about' className='about-container' >
      <Row className='about-row'>
        <Col xs={11} sm={8} md={7} lg={6} xl={6}>
          <h2 style={{ color: 'white' }}>.</h2>
          <p>I am currently on a government-funded <strong>Cloud Engineering</strong> bootcamp with AI Core. Previously, I completed 420 hours of <strong>Software Engineering</strong> training at General Assembly. </p>
          <p>I am open for work, so please feel free to <Link as={Link} to="contact" smooth={true} duration={500} className='link-text'>get in touch</Link>.</p>
        </Col>
      </Row>
    </Container>
  )
}


