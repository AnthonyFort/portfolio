import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import evenNote from '../images/even-note.png'
import phd from '../images/phd.png'
import masters from '../images/masters.png'
import podcast from '../images/podcast.png'


export default function Music() {
  return (
    <Container fluid>
      <h1>Music</h1>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <img src={phd} alt='PHD' className='projects-image' />
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>PhD Research</h3>
          <p>At Columbia University, I made videos which demonstrated how you can take a piece of music, and, by moving your body in very particular ways, change your subjective experience of the musical rhythm.</p>
          <p>My work in this area evolved a lot <i>after</i> writing the PhD; so, to read a more up-to-date essay and view the videos, please contact me.</p>
        </Col>
      </Row>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <img src={evenNote} alt='even-note' className='projects-image' />
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>Even-Note Illusion</h3>
          <p>As an appendix to my PhD, I constructed an auditory illusion. In it, I layered carefully-placed click sounds on top of a recording of a piano. The rhythm of the <i>piano</i> seems to change, quite dramatically.</p>
          <p>Please contact me for more info.</p>
        </Col>
      </Row>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <img src={masters} alt='masters' className='projects-image' />
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>Musical Decoding</h3>
          <p>Before I was a coder, I &apos;decoded&apos; a hidden pattern in a large orchestral work, <i>Palimpsests</i>, by the contemporary English Classical composer George Benjamin. This was for my Masters thesis (Columbia University, 2015).  Years later, I would realise that musical &apos;Set Theory&apos; and &apos;Sets&apos; in computer programming must be related!</p>
          <p>Please contact me for more info.</p>
        </Col>
      </Row>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/OTBAwCj6bCc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>Musical Composition</h3>
          <p>I&apos;m an avid composer and songwriter who loves to work in different genres. I&apos;m fascinated by how - for better or worse - my personality and self-beliefs leak into everything I do.</p>
        </Col>
      </Row>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/EwwrAh_IneY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>Children&apos;s Music</h3>
          <p>Before coding, I had over 40 piano students, most of them children. For the little ones, I made fun music videos.</p>
        </Col>
      </Row>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <iframe
            width="560"
            height="315"
            className='projects-image'
            src="https://www.youtube.com/embed/-zs8MLRk45c?list=PL9NhgGsNfA7XVmCLy1IUJQRRdqBLyJq1p"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>University Teaching</h3>
          <p>Before coding, I taught Classical composition at the University of Cambridge. To supplement my teaching, I put together a 30-lesson course in Classical improvisation.</p>
        </Col>
      </Row>
      <Row className='projects-container mb-4'>
        <Col xs={12} md={6} className='image-div'>
          <img src={podcast} alt='masters' className='projects-image' />
        </Col>
        <Col xs={12} md={6} className='music-text-div'>
          <h3>Psychology for Songwriters Podcast</h3>
          <p>I love podcasts, but I could never find that provided a real deep-dive into the creative process. So I tried making one myself.</p>
          <Button as={Link} to='https://podcasts.apple.com/us/podcast/psychology-for-songwriters/id1665379292' target='_blank' className='m-2'>Listen Here</Button>
        </Col>
      </Row>
    </Container >
  )
}