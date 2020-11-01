import React from 'react'

import brand from '../../img/brand.png'

import './navbar.css'
import './hamburger.css'

const Navbar = () => {
  const hamHandler = () => {
    document.querySelector('.hamburger').classList.toggle('is-active')
    document.querySelector('.nav-list').classList.toggle('is-active')
    document.querySelector('.main-nav').classList.toggle('is-active')
  }

  return (
    <div className='main-nav'>
      <div className='nav-container'>
        <div className='logo'>
          <img src={brand} className='brand' alt='brand' />
          <h5>MoneyTransfer</h5>
        </div>
        <ul className='nav-list '>
          <li className='nav' id='b'>
            <button className='nav-link'>Business </button>
            <ul id='sub-list'>
              <li>
                <button className='sub-link'>transfer money</button>
              </li>
              <li>
                <button className='sub-link'>transfer large amount </button>
              </li>
              {/* <li>
                <button className='sub-link'>track money </button>
              </li> */}
            </ul>
          </li>
          <li className='nav'>
            <button className='nav-link'>Help</button>
          </li>
          <li className='nav'>
            <button className='nav-link login'>Login</button>
          </li>
          <li className='nav'>
            <button className='nav-link register'>Register</button>
          </li>
        </ul>
        <button
          // style={{ color: '#fff', background: '#fff' }}
          onClick={hamHandler}
          className='hamburger hamburger--spin '
          type='button'>
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
      {/* <div className='ham-container'>
        <button
          // style={{ color: '#fff', background: '#fff' }}
          onClick={hamHandler}
          className='hamburger hamburger--spin '
          type='button'>
          <span class='hamburger-box'>
            <span class='hamburger-inner'></span>
          </span>
        </button>
      </div> */}
    </div>
  )
}

export default Navbar
