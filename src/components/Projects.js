import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cmDatabaseImage from '../images/macbook-cm-database.webp'
import Froggus from '../images/macbook-froggus.webp'
import Aag from '../images/macbook-aag.webp'
import AJFH from '../images/macbook-afjh.webp'
import { DiPython, DiDjango, DiReact, DiPostgresql, DiJavascript, DiHtml5, DiCss3, DiMongodb, DiNodejs, DiBootstrap } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
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
            <Button as={Link} to='https://github.com/AnthonyFort/CM-Database-2#readme' target='_blank' className='m-2 project-button' size='sm'>GitHub</Button>
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
            <Button as={Link} to='https://github.com/AnthonyFort/Froggus-ad-Parnassum/blob/main/README.md' target='_blank' className='m-2 project-button' size='sm'>GitHub</Button>
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
    },
    {
      title: 'AAG Music',
      image: Aag,
      description: (
        <>
          <p>A music-sharing platform with a twist (group project).</p>
          <div className='project-button-div'>
            <Button as={Link} to='https://github.com/GhostieBby/aag-music-final/blob/main/README-anthony-fort.md' target='_blank' className='m-2 project-button' size='sm'>GitHub</Button>
            <Button as={Link} to='https://aag-music-final-772143c93aa4.herokuapp.com/' target='_blank' className='m-2 project-button' size='sm'>Visit</Button>
          </div>
        </>
      ),
      skills: [
        {
          icon: DiMongodb,
          iconTitle: 'MongoDB',
        },
        {
          icon: SiExpress,
          iconTitle: 'Express',
        },
        {
          icon: DiReact,
          iconTitle: 'React',
        },
        {
          icon: DiNodejs,
          iconTitle: 'Node',
        }
      ],
    },
    {
      title: 'AFJH Store',
      image: AJFH,
      description: (
        <>
          <p>An imitation of a basic e-commerce site (pair project).</p>
          <div className='project-button-div'>
            <Button as={Link} to='https://github.com/AnthonyFort/afjh-store/blob/main/README-anthony-fort.md' target='_blank' className='m-2 project-button' size='sm'>GitHub</Button>
            <Button as={Link} to='https://afjh-store.netlify.app/' target='_blank' className='m-2 project-button' size='sm'>Visit</Button>
          </div>
        </>
      ),
      skills: [
        {
          icon: DiReact,
          iconTitle: 'React',
        },
        {
          icon: DiBootstrap,
          iconTitle: 'Bootstrap',
        }
      ],
    }
  ]

  return (
    <Container className='projects-container'>
      <h2 className='header-text'>Coding Projects</h2>
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
}

