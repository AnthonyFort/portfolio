import { Container, Row, Col } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'



export default function About() {
  return (
    <Container name='about' className='about-container' >
      <Row className='about-row'>
        <Col xs={11} sm={8} md={7} lg={6} xl={5}>
          <h2>About</h2>
          <p>I am currently on a government-funded <strong>Cloud Engineering</strong> bootcamp with AI Core. Before that, I completed 420 hours of <strong>Software Engineering</strong> training at General Assembly. </p>
          <p>I love coding and am open to working in any sector, so please check out my <Link as={Link} to="projects" smooth={true} duration={500} className='link-text'>projects</Link> below and <Link as={Link} to="contact" smooth={true} duration={500} className='link-text'>get in touch</Link> if you would like to talk more.</p>
        </Col>
      </Row>
    </Container>
  )
}


