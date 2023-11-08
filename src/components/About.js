import { Container, Row, Col } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'



export default function About() {
  return (
    <Container name='about' className='about-container' >
      <Row className='about-row'>
        <Col xs={11} sm ={8} md= {7} lg={6} xl={5} className='about-col'>
          <h2>About</h2>
          <p>In the summer of 2023, I completed 420 hours of <strong>Software Engineering</strong> training at General Assembly. I am now on a government-funded Skills Bootcamp in <strong>Cloud Engineering</strong> with AI Core.</p>
          <p>I love coding and am open to working in any sector, so please check out my <Link as={Link} to="projects" smooth={true} duration={500} className='link-text'>projects</Link> below and <Link as={Link} to="contact" smooth={true} duration={500} className='link-text'>get in touch</Link> if you would like to talk more.</p>
          <p>To learn more about me and what else I&apos;ve been up to, check out the Life Before Coding section! </p>
        </Col>
      </Row>
      <Row className='text-center'>
        <h3 className='w-100'>Skills</h3>
        {[
          ['devicon-python-plain', 'Python'],
          ['devicon-javascript-plain', 'JavaScript'],
          ['devicon-react-original', 'React'],
          ['devicon-bootstrap-plain', 'Bootstrap'],
          ['devicon-django-plain', 'Django'],
          ['devicon-mongodb-plain', 'MongoDB'],
          ['devicon-express-original', 'Express']
        ].map(([iconClass, text]) => (
          <Col xs={4} md={3} lg={2} className='skills-icons-col mb-4' key={iconClass}>
            <i className={iconClass + ' skills-icons'}></i>
            <p className='mt-2'>{text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  )
}