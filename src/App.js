import { useEffect } from 'react'
import axios from 'axios'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Interests from './components/Interests'
import Nav from './components/Nav'
import Projects from './components/Projects'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App
