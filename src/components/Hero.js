import { Container, Row, Col } from 'react-bootstrap'
import WebsitePic from '../images/website-pic-2.png'

export default function Hero() {
  return (
    <div className='hero'>
      <div>
        <img src={WebsitePic} alt='Website picture' className='hero-image' />
      </div>
      <div>
        <h1 className='hero-header'>Anthony Fort</h1>
        <h3 className='hero-subheader'>Software Engineer</h3>
        <h4 className='hero-subheader'>musician / teacher / researcher</h4>
      </div>
    </div>
    // <Container className='hero'>
    //   <Row>
    //     <Col>
    //       <img src={WebsitePic} alt='Website picture' className='hero-image' />
    //     </Col>
    //     <Col>
    //       <h1 className='hero-header'>Anthony Fort</h1>
    //       <h3 className='hero-subheader'>Software Engineer</h3>
    //       <h4 className='hero-subheader'>musician / teacher / researcher</h4>
    //     </Col>
    //   </Row>
    // </Container>
  )
}