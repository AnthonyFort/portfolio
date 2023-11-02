import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <Container className='mb-5'>
      <h2>Contact Info</h2>
      <Row className='contact'>
        <Col xs={12}>
          <Link to='mailto:anthonyfort613@gmail.com' target='_blank' rel="noopener noreferrer" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faEnvelope} size='md' style={{ color: 'black', marginRight: '8px' }} />
            anthonyfort613@gmail.com
          </Link>
        </Col>
        <Col xs={12}>
          <Link to='https://github.com/AnthonyFort' target='_blank' rel="noopener noreferrer" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faGithub} size='md' style={{ color: 'black', marginRight: '8px' }} />
            GitHub
          </Link>
        </Col>
        <Col xs={12}>
          <Link to='https://www.linkedin.com/in/anthony-fort-8235721b7/' target='_blank' rel="noopener noreferrer" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faLinkedin} size='md' style={{ color: 'black', marginRight: '8px' }} />
            LinkedIn
          </Link>
        </Col>
      </Row>

    </Container>
  )
}