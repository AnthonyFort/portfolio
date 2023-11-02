import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cmDatabaseImage from '../images/CM-database.png'
import Froggus from '../images/Froggus.png'

export default function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <Row>
        <Col xs={12} className='projects-container mb-3'>
          <img src={cmDatabaseImage} alt='CM database' className='projects-image' />
          <div>
            <h3>CM Database</h3>
            <p>A time-saving tool for church musicians who need to find music related to a particular Bible reading or religious theme.</p>
            <Button as={Link} to='https://github.com/AnthonyFort/CM-Database-2#readme' target='_blank' className='m-2'>README</Button> 
            <Button as={Link} to='https://cm-database-a7b05e162636.herokuapp.com/'target='_blank' className='m-2'>Try the app</Button>
          </div>
        </Col>
        <Col xs={12} className='projects-container mb-3'>
          <img src={Froggus} alt='Froggus' className='projects-image' />
          <div>
            <h3>Froggus Ad Parnassum</h3>
            <p>An arcade-style game that teaches the fundamentals of Classical music improvisation (Google Chrome required).</p>
            <Button as={Link} to='https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md' target='_blank'className='m-2'>README</Button> 
            <Button as={Link} to='https://anthonyfort.github.io/Froggus-ad-Parnassum/'target='_blank' className='m-2'>Play the Game</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}