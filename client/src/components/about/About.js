import React from 'react'

import about from '../../img/about.jpg'

import './about.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className='about-show'>
          <div className='about-text'>
            <h2>Global support in a range of languages.</h2>
            <p>
              We don’t do complicated, automated systems. We have offices around
              the world, full of people ready to help you. Whenever you need it.
            </p>
            <button className='about-btn'>Find out now</button>
          </div>
          <div className='about-img'>
            <img src={about} alt='photo' className='ab' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
