import { Container, Row, Col } from 'react-bootstrap'
import WebsitePic from '../images/website-pic-2.webp'

export default function Hero() {
  return (
    <div className='hero'>
      <div>
        <h2 style={{ color: 'white' }}>.</h2>
        <img src={WebsitePic} alt='Website picture' className='hero-image' />
      </div>
      <div>
        <h2 style={{ color: 'white' }}>.</h2>
        <h1 className='hero-header'>Anthony Fort</h1>
        <h3 className='hero-subheader'>Software Engineer</h3>
        <h4 className='hero-subheader'>musician / teacher / researcher</h4>
      </div>
    </div>
  )
}