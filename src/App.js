import { useEffect } from 'react'
import axios from 'axios'

import { Routes, Route } from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Music from './components/Music'
import Nav from './components/Nav'
import Projects from './components/Projects'

const App = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
  //     console.log(data)
  //   }
  //   getData()
  // })

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
