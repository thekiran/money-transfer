import React, { useEffect } from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Showcase from './components/showcase/Showcase'
// import Header from './components/header/header'

// "homepage": "http://kiranthemasterofbakchod.github.io/misterk",

const App = ({ hideLoader }) => {
  useEffect(() => {
    hideLoader()
  }, [hideLoader])
  return (
    <React.Fragment>
      <header className='main-header'>
        <Navbar />
        <Header />
      </header>

      <Showcase />
      <div className='space' />
    </React.Fragment>
  )
}

export default App
