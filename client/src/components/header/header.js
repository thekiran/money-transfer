import React, { Fragment, useState } from 'react'

import './header.css'
const Header = () => {
  const [calcInp, setCalcInp] = useState('1000')
  const [calcOut, setCalcout] = useState('')
  const curHandler = (e) => {
    e.preventDefault()
    // console.log('actve')
    document.querySelector('.calc .cur-select').classList.toggle('active')
  }
  return (
    <Fragment>
      <div className='head-container'>
        <div className='header-content'>
          <h3 className='head-title'>
            A cheaper, faster way to send money abroad.
          </h3>
          <p className='head-text'>
            Join over 8 million people and businesses who get a better deal when
            they send money with the real exchange rate.
          </p>

          <div className='head-anims'>
            <h5>Is TransferWise safe?</h5>
            <p>Yes, here’s why</p>
          </div>
        </div>
        <div className='main-content'>
          <div className='calc'>
            <form id='calc-form'>
              <label className='calc-inp' htmlFor='calc-inp'>
                You send
              </label>
              <input
                type='text'
                id='calc-inp'
                value={calcInp}
                onChange={(e) => setCalcInp(e.target.value)}></input>
            </form>
            <ul className='cur-list'>
              <li>
                <button onClick={curHandler} className='btn-ind'>
                  IND
                </button>
              </li>
            </ul>
            <ul className='cur-select'>
              <li>
                <button className='cur-btn'>INR Indian rupee</button>
              </li>
            </ul>

            <span id='rate'>Guaranteed rate Guaranteed rate(79 hrs)</span>
            <div className='res'>
              <form>
                <label className='calc-out' htmlFor='calc-out'>
                  You receive
                </label>
                <input
                  type='text'
                  id='calc-out'
                  value={calcOut}
                  onChange={(e) => setCalcout(e.target.value)}
                />
                <ul className='res-list'>
                  <li>
                    <button onClick={curHandler} className='btn-ind'>
                      IND
                    </button>
                  </li>
                </ul>
                {/* <ul className='res-select'>
                <li>
                  <button className='res-btn'>INR Indian rupee</button>
                </li>
              </ul> */}
              </form>
            </div>
          </div>

          <button className='get-btn'> Get Started</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
