import { useState } from 'react'
import emailjs from 'emailjs-com'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function ContactForm() {

  const contactLinks = [
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const sendEmail = (e) => {
    e.persist()
    e.preventDefault()
    console.log('Form data:', new FormData(e.target))
    setIsSubmitting(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000)
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000)
        }
      )

    e.target.reset()
  }

  return (
    <div className='contact-div'>
      <h2 className='header-text'>Contact</h2>
      <div className='form-div'>
        <Form onSubmit={sendEmail} className='form'>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" placeholder="Your name" name="user_name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" placeholder="Your message" name="message" />
          </Form.Group>
          <div className='form-button'>
            <Button variant="primary" type="submit" disabled={isSubmitting} value="Send" size="sm">
              Submit
            </Button>
            {stateMessage && <p>{stateMessage}</p>}
          </div>
        </Form>
      </div>
      <div className='contact-icons-div'>
        {contactLinks.map((item, index) => (
          <div key={index} className='contact-icon'>
            <Link to={item.link} target='_blank' rel="noopener noreferrer" style={{ fontSize: '14px' }}>
              <FontAwesomeIcon icon={item.icon} size='md' style={{ color: 'black', marginRight: '8px' }} />
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}


// export default function Contact() {



//   return (
//     <Container className='mb-5 contact-container'>
//       <h2 className='header-text'>Contact</h2>
//       <Row className='contact-row'>
//         {contactLinks.map((item, index) => (
//           <Col xs={12} key={index}>
// <Link to={item.link} target='_blank' rel="noopener noreferrer" style={{ fontSize: '14px' }}>
//   <FontAwesomeIcon icon={item.icon} size='md' style={{ color: 'black', marginRight: '8px' }} />
//   {item.text}
// </Link>
//           </Col>
//         ))}
//       </Row>

//     </Container>
//   )
// }