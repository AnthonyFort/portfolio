import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import evenNote from '../images/even-note.png'
import phd from '../images/phd.png'
import masters from '../images/masters.png'
import podcast from '../images/podcast.png'
import { Link as InnerLink, animateScroll as scroll } from 'react-scroll'
import { Link as ScrollLink } from 'react-scroll'

export default function Music() {

  const musicInfo = [
    {
      title: 'PhD Research...',
      media: phd,
      description: (
        <>
          <p>At Columbia University I made videos demonstrating how to change your experience of rhythm by moving in very particular ways.</p>
          <p>Please <ScrollLink to="contact" smooth={true} duration={500} className='link-text'>contact me</ScrollLink> for more info.</p>
        </>
      ),
    },
    {
      title: 'Even-Note Illusion...',
      media: evenNote,
      description: (
        <>
          <p>I constructed an auditory illusion which uses carefully-placed click sounds to alter the way a separate musical rhythm is perceived.</p>
          <p>Please <ScrollLink to="contact" smooth={true} duration={500} className='link-text'>contact me</ScrollLink> for more info.</p>
        </>
      ),
    },
    {
      title: 'Musical \'Decoding\'...',
      media: masters,
      description: (
        <>
          <p>I wrote a thesis decoding a pattern in George Benjamin&apos;s orchestral work <i>Palimpsests</i>. Now, I realise musical &apos;Set Theory&apos; and JavaScript &apos;Sets&apos; are related!</p>
          <p>Please <ScrollLink to="contact" smooth={true} duration={500} className='link-text'>contact me</ScrollLink> for more info.</p>
        </>
      ),
    },
    {
      title: 'Musical Composition...',
      media: 'https://www.youtube.com/embed/OTBAwCj6bCc',
      description: (
        <>
          <p>I write in multiple genres, but find it fascinating how my personality and self-beliefs leak into everything I do.</p>
        </>
      ),
    },
    {
      title: 'Children\'s Music...',
      media: 'https://www.youtube.com/embed/EwwrAh_IneY',
      description: (
        <>
          <p>I once had over 40 piano students, most of them children. For the little ones, I made music videos.</p>
        </>
      ),
    },
    {
      title: 'University Teaching...',
      media: 'https://www.youtube.com/embed/-zs8MLRk45c?list=PL9NhgGsNfA7XVmCLy1IUJQRRdqBLyJq1p',
      description: (
        <>
          <p>I used to teach composition at Cambridge University, and made a 30-lesson course in Classical improvisation.</p>
        </>
      ),
    },
    {
      title: 'Psychology for Songwriters Podcast...',
      media: podcast,
      description: (
        <>
          <p>I love podcasts, but I could never find one that went deep into the creative process. So I made this.</p>
          <Button as={Link} to='https://podcasts.apple.com/us/podcast/psychology-for-songwriters/id1665379292' target='_blank' className='m-2' size='sm'>Listen Here</Button>
        </>
      ),
    },
    {
      title: 'Union Chapel...',
      media: 'https://www.youtube.com/embed/59uGN0oxS6A',
      description: (
        <>
          <p>When I&apos;m not coding, I&apos;m the Director of Music at Union Chapel Church, Islington.</p>
        </>
      ),
    }
  ]

  function renderMedia(media, title) {
    if (media.includes('youtube.com')) {
      return (
        <div className="ratio ratio-16x9">
          <iframe
            src={media}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    } else {
      return <img src={media} alt={title} className="img-fluid accordion-img" />
    }
  }
  
  return (
    <div className='accordion-div'>
      <Container className='m-3'>
        <h2 className='header-text'>Music</h2>
        <Row className='mt-4'>
          <Col xs={10} sm={10} md={10} className="mx-auto">
            <Accordion>
              {musicInfo.map((item, index) => (
                <Accordion.Item eventKey={`${index}`} key={index}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row className="justify-content-md-center">
                        <Col xs={12} className='accordion-media'>
                          {renderMedia(item.media, item.title)}
                        </Col>
                        <Col xs={12} lg={8} className='accordion-text'>
                          {item.description}
                        </Col>
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
