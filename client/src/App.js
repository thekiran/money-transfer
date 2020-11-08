import React, { useEffect } from 'react'
import About from './components/about/About'
import Header from './components/header/header'
import Instruction from './components/instruction/Instruction'
import Navbar from './components/navbar/navbar'
import Showcase from './components/showcase/Showcase'
import Review from './components/review/Review'
import Footer from './components/footer/Footer'
// import Header from './components/header/header'

// "homepage": "http://kiranthemasterofbakchod.github.io/misterk",

const App = ({ hideLoader }) => {
	useEffect(
		() => {
			hideLoader()
		},
		[ hideLoader ]
	)
	return (
		<React.Fragment>
			<header className='main-header'>
				<Navbar />
				<Header />
			</header>
			<Showcase />
			<Instruction />
			<About />
			<Review />
			<Footer />
			<div className='space' />
		</React.Fragment>
	)
}

export default App
