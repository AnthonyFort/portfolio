import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cmDatabaseImage from '../images/macbook-cm-database.png'
import Froggus from '../images/macbook-froggus.png'
import { DiPython, DiDjango, DiReact, DiPostgresql, DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di'
import { Fragment } from 'react'

export default function Projects() {

  const projects = [
    {
      title: 'CM Database',
      image: cmDatabaseImage,
      description: (
        <>
          <p>A search tool for church musicians to find music related to Biblical readings or themes.</p>
          <div className='project-button-div'>
            <Button as={Link} to='https://github.com/AnthonyFort/CM-Database-2#readme' target='_blank' className='m-2 project-button' size='sm'>README</Button>
            <Button as={Link} to='https://cm-database-a7b05e162636.herokuapp.com/' target='_blank' className='m-2 project-button' size='sm'>Visit</Button>
          </div>

        </>
      ),
      skills: [
        {
          icon: DiPython,
          iconTitle: 'Python',
        },
        {
          icon: DiDjango,
          iconTitle: 'Django',
        },
        {
          icon: DiReact,
          iconTitle: 'React',
        },
        {
          icon: DiPostgresql,
          iconTitle: 'PostreSQL',
        }
      ],
    },
    {
      title: 'Froggus Ad Parnassum',
      image: Froggus,
      description: (
        <>
          <p>A game that teaches music theory <br /> (desktop - Chrome required).</p>
          <div className='project-button-div'>
            <Button as={Link} to='https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md' target='_blank' className='m-2 project-button' size='sm'>README</Button>
            <Button as={Link} to='https://anthonyfort.github.io/Froggus-ad-Parnassum/' target='_blank' className='m-2 project-button' size='sm'>Play</Button>
          </div>
        </>
      ),
      skills: [
        {
          icon: DiJavascript,
          iconTitle: 'JavaScript',
        },
        {
          icon: DiHtml5,
          iconTitle: 'HTML',
        },
        {
          icon: DiCss3,
          iconTitle: 'CSS',
        }
      ],
    }
  ]

  return (
    <Container className='projects-container'>
      <h2 className='header-text project-header'>Coding Projects</h2>
      <Row className='projects-row'>     
        {
          projects.map((project, index) => (
            <Col xs={11} md={5} key={index} className='project-col' >
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} className='project-image' />
              <div className='project-description'>{project.description}</div>
              <Row className='skills-row'>
                {project.skills.map((skill, index) => (
                  <Col xs={5} md={5} lg={4} key={index} >
                    <div className='skill-div'>
                      <skill.icon className='skill-icon' />
                      <p>{skill.iconTitle}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          ))
        }
      </Row>
    </Container>
  )

  // return (
  //   <Container>
  //     <h2 className='header-text project-header'>Coding Projects</h2>
  //     <div className='project-div'>
  //       <Row className='mb-4 project-row'>
  //         <Col xs={12} md={6} className='project-image-col' >
  //           <h3>CM Database</h3>
  //           <img src={cmDatabaseImage} alt='CM database' className='projects-image' />
  //         </Col>
  //         <Col xs={12} md={8} lg={8} className='project-text-col'>
  //           <p>A search tool for church musicians to find music related to Bible readings or religious themes.</p>
  //           <Button as={Link} to='https://github.com/AnthonyFort/CM-Database-2#readme' target='_blank' className='m-2' size='sm'>README</Button>
  //           <Button as={Link} to='https://cm-database-a7b05e162636.herokuapp.com/' target='_blank' className='m-2' size='sm'>Visit</Button>
  //         </Col>
  //       </Row>
  //       <Row className='mb-4 project-row'>
  //         <Col xs={12} md={6} className='project-image-col' >
  //           <h3>Froggus Ad Parnassum</h3>
  //           <img src={Froggus} alt='Froggus' className='projects-image' />
  //         </Col>
  //         <Col xs={12} md={8} className='project-text-col' >
  //           <p>A game that teaches music theory (desktop - Chrome required).</p>
  //           <Button as={Link} to='https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md' target='_blank' className='m-2' size='sm'>README</Button>
  //           <Button as={Link} to='https://anthonyfort.github.io/Froggus-ad-Parnassum/' target='_blank' className='m-2' size='sm'>Play</Button>
  //         </Col>
  //       </Row>
  //     </div>
  //   </Container>
  // )
}

