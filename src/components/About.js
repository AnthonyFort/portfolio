import { Container, Row, Col } from 'react-bootstrap'



export default function About() {
  return (
    <Container name='about'>
      <Row>
        <h2 className='header-text'>About</h2>
        <Col>
          <p>In the summer of 2023, I completed 420 hours of <strong>Software Engineering</strong> training through General Assembly. During that time, I was offered a place on a government-funded Skills Bootcamp in <strong>Cloud Engineering</strong>, run by AI Core, which I am currently completing.</p>
          <p>I love coding and am open to working in any sector, so please check out my projects below and get in touch if you would like to talk more.</p>
          <p>To learn more about me and what else I&apos;ve been up to, check out the Life Before Coding section!</p>
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