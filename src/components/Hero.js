import { Container, Row, Col } from 'react-bootstrap'

export default function Hero () {
  return (
    <Container className='hero'>
      <Row>
        <Col>
          <h1 className='hero-header'>Anthony Fort</h1>
          <h3 className='hero-subheader'>Software Engineer</h3>
          <h4 className='hero-subheader'>musician / teacher / researcher</h4>
        </Col>
      </Row>
    </Container>
  )
}