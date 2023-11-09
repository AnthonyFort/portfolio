import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cmDatabaseImage from '../images/macbook-cm-database.png'
import Froggus from '../images/macbook-froggus.png'

export default function Projects() {
  return (
    <Container>
      <h2 className='header-text project-header'>Coding Projects</h2>
      <div className='project-div'>
        <Row className='mb-4 project-row'>
          <Col xs={12} md={6} className='project-image-col' >
            <h3>CM Database</h3>
            <img src={cmDatabaseImage} alt='CM database' className='projects-image' />
          </Col>
          <Col xs={12} md={8} lg={8} className='project-text-col'>

            <p>A search tool for church musicians to find music related to Bible readings or religious themes.</p>
            <Button as={Link} to='https://github.com/AnthonyFort/CM-Database-2#readme' target='_blank' className='m-2' size='sm'>README</Button>
            <Button as={Link} to='https://cm-database-a7b05e162636.herokuapp.com/' target='_blank' className='m-2' size='sm'>Visit</Button>
          </Col>
        </Row>
        <Row className='mb-4 project-row'>
          <Col xs={12} md={6} className='project-image-col' >
            <h3>Froggus Ad Parnassum</h3>
            <img src={Froggus} alt='Froggus' className='projects-image' />
          </Col>
          <Col xs={12} md={8} className='project-text-col' >
            <p>A game that teaches musical theory (desktop - Chrome required).</p>
            <Button as={Link} to='https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md' target='_blank' className='m-2' size='sm'>README</Button>
            <Button as={Link} to='https://anthonyfort.github.io/Froggus-ad-Parnassum/' target='_blank' className='m-2' size='sm'>Play</Button>
          </Col>
        </Row>
      </div>
    </Container>
  )
}