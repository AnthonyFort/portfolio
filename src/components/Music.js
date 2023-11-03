import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import evenNote from '../images/even-note.png'
import phd from '../images/phd.png'
import masters from '../images/masters.png'
import podcast from '../images/podcast.png'
import { Link as InnerLink, animateScroll as scroll } from 'react-scroll'

export default function Music() {
  return (
    <Container >
      <h2 className='header-text'>Life Before Coding</h2>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <img src={phd} alt='PHD' className='projects-image' />
        </Col>
        <Col xs={12} md={5} >
          <h3>PhD Research</h3>
          <p>At Columbia University, I made videos which demonstrated how you can take a piece of music, and, by moving your body in very particular ways, change your subjective experience of the musical rhythm.</p>
          <p>My work in this area evolved a lot <i>after</i> writing the PhD; so, to read a more up-to-date essay and view the videos, please <InnerLink as={Link} to="contact" smooth={true} duration={500} className='link-text'>contact me</InnerLink>.</p>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <img src={evenNote} alt='even-note' className='projects-image' />
        </Col>
        <Col xs={12} md={5} >
          <h3>Even-Note Illusion</h3>
          <p>As an appendix to my PhD, I constructed an auditory illusion. In it, I layered carefully-placed click sounds on top of a recording of a piano. The rhythm of the <i>piano</i> seems to change, quite dramatically.</p>
          <p>Please <InnerLink as={Link} to="contact" smooth={true} duration={500} className='link-text'>contact me</InnerLink> for more info.</p>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <img src={masters} alt='masters' className='projects-image' />
        </Col>
        <Col xs={12} md={5} >
          <h3>Musical Decoding</h3>
          <p>In 2015 (before I was a coder), I wrote a Masters thesis that &apos;decoded&apos; a hidden pattern in a large orchestral work, <i>Palimpsests</i>, by the English Classical composer George Benjamin. Years later, I would realise that musical &apos;Set Theory&apos; and &apos;Sets&apos; in computer programming must be related!</p>
          <p>Please <InnerLink as={Link} to="contact" smooth={true} duration={500} className='link-text'>contact me</InnerLink> for more info.</p>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/OTBAwCj6bCc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={5} >
          <h3>Musical Composition</h3>
          <p>I&apos;m an avid composer and songwriter who loves to work in different genres. I&apos;m fascinated by how - for better or worse - my personality and self-beliefs leak into everything I do.</p>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/EwwrAh_IneY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={5} >
          <h3>Children&apos;s Music</h3>
          <p>Before coding, I had over 40 piano students, most of them children. For the little ones, I made fun music videos.</p>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/-zs8MLRk45c?list=PL9NhgGsNfA7XVmCLy1IUJQRRdqBLyJq1p"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={5} >
          <h3>University Teaching</h3>
          <p>Before coding, I taught Classical composition at the University of Cambridge. To supplement my teaching, I put together a 30-lesson course in Classical improvisation.</p>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <img src={podcast} alt='masters' className='projects-image' />
        </Col>
        <Col xs={12} md={5} >
          <h3>Psychology for Songwriters Podcast</h3>
          <p>I love podcasts, but I could never find one that provided a real deep-dive into the creative process. So I tried making one myself.</p>
          <Button as={Link} to='https://podcasts.apple.com/us/podcast/psychology-for-songwriters/id1665379292' target='_blank' className='m-2' size='sm'>Listen Here</Button>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col xs={12} md={6} >
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/59uGN0oxS6A"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={5} >
          <h3>Union Chapel</h3>
          <p>When I&apos;m not coding, I&apos;m the Director of Music at Union Chapel Church, Islington.</p>
          <p>It&apos;s busy, but once CM Database has a few more users, I could save a few hours every week!</p>
        </Col>
      </Row>
    </Container >
    
  )
}