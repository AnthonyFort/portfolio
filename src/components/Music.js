import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import evenNote from '../images/even-note.webp'
import phd from '../images/phd.webp'
import masters from '../images/masters.webp'
import podcast from '../images/podcast.webp'
import { Link as ScrollLink } from 'react-scroll'
import { useState } from 'react'

export default function Music() {

  const musicInfo = [
    {
      title: 'PhD Research',
      media: phd,
      description: (
        <>
          <p>At Columbia University I made videos demonstrating how to change your experience of rhythm by moving in very particular ways.</p>
          <p>Please <ScrollLink to="contact" smooth={true} duration={500} className='link-text'>contact me</ScrollLink> for more info.</p>
        </>
      ),
    },
    {
      title: 'Illusion',
      media: evenNote,
      description: (
        <>
          <p>I constructed the &apos;Even Note&apos; auditory illusion which uses carefully-placed click sounds to alter the way a separate musical rhythm is perceived.</p>
          <p>Please <ScrollLink to="contact" smooth={true} duration={500} className='link-text'>contact me</ScrollLink> for more info.</p>
        </>
      ),
    },
    {
      title: '\'Decoding\'',
      media: masters,
      description: (
        <>
          <p>I wrote a thesis decoding a pattern in George Benjamin&apos;s orchestral work <i>Palimpsests</i>. Now, I realise musical &apos;Set Theory&apos; and JavaScript &apos;Sets&apos; are related!</p>
          <p>Please <ScrollLink to="contact" smooth={true} duration={500} className='link-text'>contact me</ScrollLink> for more info.</p>
        </>
      ),
    },
    {
      title: 'Songwriting',
      media: 'https://www.youtube.com/embed/VbWTmpNSTKU',
      description: (
        <>
          <p>I write in multiple genres, but find it fascinating how my personality and self-beliefs leak into everything I do.</p>
        </>
      ),
    },
    {
      title: 'Kids\' Stuff',
      media: 'https://www.youtube.com/embed/EwwrAh_IneY',
      description: (
        <>
          <p>I once had over 40 piano students, most of them children. For the little ones, I made music videos.</p>
        </>
      ),
    },
    {
      title: 'Uni Teaching',
      media: 'https://www.youtube.com/embed/-zs8MLRk45c?list=PL9NhgGsNfA7XVmCLy1IUJQRRdqBLyJq1p',
      description: (
        <>
          <p>I used to teach composition at Cambridge University, and made a supplementary 30-lesson course in Classical improvisation.</p>
        </>
      ),
    },
    {
      title: 'Podcast',
      media: podcast,
      description: (
        <>
          <p>I love podcasts, but I could never find one that went deep into the creative process. So I made this.</p>
          <Button as={Link} to='https://podcasts.apple.com/us/podcast/psychology-for-songwriters/id1665379292' target='_blank' className='m-2' size='sm'>Listen Here</Button>
        </>
      ),
    },
    {
      title: 'Union Chapel',
      media: 'https://www.youtube.com/embed/59uGN0oxS6A',
      description: (
        <>
          <p>When I&apos;m not coding, I&apos;m the Director of Music at Union Chapel Church, Islington.</p>
        </>
      ),
    }
  ]

  const [showItem, setShowItem] = useState('PhD Research')

  function renderMedia(media, title) {
    if (media.includes('youtube.com')) {
      return (
        <div className="ratio ratio-16x9">
          <iframe
            src={media}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    } else {
      return <img src={media} alt={title} className="img-fluid music-img" />
    }
  }

  function selectMenuItem(title) {
    console.log('YES')
    setShowItem(title)
    console.log(showItem)
  }

  return (
    <div className='music-outer-div'>
      <h2 className='header-text'>Music</h2>
      <div className='music-buttons-div'>
        <Row className='music-buttons-row'>
          {musicInfo.map((item, index) => (
            <Col key={index} lg={1} md={3} sm={4} xs={6} className='music-button-col'>
              <button className="music-button" onClick={() => selectMenuItem(item.title)}>{item.title}</button>
            </Col>
          ))}
        </Row>
      </div>
      <Container>
        <Row className="justify-content-md-center music-content-outer-div">
          {musicInfo.filter(item => (
            item.title === showItem
          )).map((item, index) => (
            <div key={index} className='music-content-div'>
              <Col xs={12}>
                {renderMedia(item.media, item.title)}
              </Col>
              <Col xs={12} lg={8} className='music-text'>
                {item.description}
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  )
}
