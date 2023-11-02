import { Container, Row, Col } from 'react-bootstrap'



export default function About() {
  return (
    <Container>
      <Row>
        <h1>About</h1>
        <Col>
          <p>In the summer of 2023, I completed 420 hours of <strong>Software Engineering</strong> training through General Assembly. During that time, I was offered a place on a government-funded Skills Bootcamp in <strong>Cloud Engineering</strong>, run by AI Core, which I am currently completing.</p>
          <p>I love coding and am open to working in any sector, so please check out my projects below and get in touch if you would like to talk more.</p>
          <p>To learn more about me and my life before coding, check out the music section!</p>
        </Col>
        <h3>Skills</h3>
        <div className="skills-icons-container">
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-python-plain skills-icons"></i>
            <p>Python</p>
          </Col>
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-javascript-plain skills-icons"></i>
            <p>JavaScript</p>
          </Col>
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-react-original skills-icons"></i>
            <p>React</p>
          </Col>
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-bootstrap-plain skills-icons"></i>
            <p>Bootstrap</p>
          </Col>
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-django-plain skills-icons"></i>
            <p>Django</p>
          </Col>
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-mongodb-plain skills-icons"></i>
            <p>MongoDB</p>
          </Col>
          <Col x3={3} md={2} lg={1} className="skills-icons-col">
            <i className="devicon-express-original skills-icons"></i>
            <p>Express</p>
          </Col>
        </div>










      </Row>
    </Container>
  )
}