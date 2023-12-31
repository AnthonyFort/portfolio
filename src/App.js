import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Music from './components/Music'
import NavBar from './components/Nav'
import Projects from './components/Projects'
import { Element } from 'react-scroll'

const App = () => {

  return (
    <>
      <NavBar />
      <main className='main'>
        <Element name='about'><Hero /></Element>
        <About />
        <Element name='projects'><Projects /></Element>
        <Element name='music'><Music /> </Element >
        <Element name='contact'><Contact /></Element >
      </main >
    </>

  )
}

export default App
