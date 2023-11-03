import { Container, Row, Col } from 'react-bootstrap'

export default function Hero () {
  return (
    <Container className='hero'>
      <Row>
        <Col>
          <h1>Anthony Fort</h1>
          <h3>Software Engineer with a background in Music, Education, and Research</h3>
        </Col>
      </Row>
    </Container>
  )
}