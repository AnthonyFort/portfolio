import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {

  const contactLinks = [
    {
      text: 'anthonyfort613@gmail.com',
      link: 'mailto:anthonyfort613@gmail.com',
      icon: faEnvelope,
    },
    {
      text: 'GitHub',
      link: 'https://github.com/AnthonyFort',
      icon: faGithub,
    },
    {
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/anthony-fort-8235721b7/',
      icon: faLinkedin,
    }
  ]

  return (
    <Container className='mb-5 contact-container'>
      <h2 className='header-text'>Contact</h2>
      <Row className='contact-row'>
        {contactLinks.map((item, index) => (
          <Col xs={12} key={index}>
            <Link to={item.link} target='_blank' rel="noopener noreferrer" style={{ fontSize: '14px' }}>
              <FontAwesomeIcon icon={item.icon} size='md' style={{ color: 'black', marginRight: '8px' }} />
              {item.text}
            </Link>
          </Col>
        ))}
      </Row>

    </Container>
  )
}