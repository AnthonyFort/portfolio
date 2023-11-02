import { Container, Row, Col } from 'react-bootstrap'

export default function Hero () {
  return (
    <Container className='hero'>
      <Row>
        <Col>
          <h1>Anthony Fort</h1>
          <h2>Software Engineer with a background in Music, Education, and Research</h2>
        </Col>
      </Row>
    </Container>
  )
}