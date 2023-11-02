import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Music from './components/Music'
import Nav from './components/Nav'
import Projects from './components/Projects'

const App = () => {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Music /> 
        <Contact />
      </main>
    </>

  )
}

export default App
