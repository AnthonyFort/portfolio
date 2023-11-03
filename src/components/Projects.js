import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cmDatabaseImage from '../images/CM-database.png'
import Froggus from '../images/Froggus.png'

export default function Projects() {
  return (
    <Container>
      <h2>Coding Projects</h2>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <img src={cmDatabaseImage} alt='CM database' className='projects-image' />
        </Col>
        <Col xs={12} md={5} >
          <h3>CM Database</h3>
          <p>A time-saving tool for church musicians who need to find music related to a particular Bible reading or religious theme.</p>
          <Button as={Link} to='https://github.com/AnthonyFort/CM-Database-2#readme' target='_blank' className='m-2'>README</Button>
          <Button as={Link} to='https://cm-database-a7b05e162636.herokuapp.com/' target='_blank' className='m-2'>Try the app</Button>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <img src={Froggus} alt='Froggus' className='projects-image' />
        </Col>
        <Col xs={12} md={5} >
          <h3>Froggus Ad Parnassum</h3>
          <p>An arcade-style game that teaches the fundamentals of Classical music improvisation (DESKTOP ONLY - Google Chrome required).</p>
          <Button as={Link} to='https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md' target='_blank' className='m-2'>README</Button>
          <Button as={Link} to='https://anthonyfort.github.io/Froggus-ad-Parnassum/' target='_blank' className='m-2'>Play the Game</Button>
        </Col>
      </Row>
    </Container>
  )
}