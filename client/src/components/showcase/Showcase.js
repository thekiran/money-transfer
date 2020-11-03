import React, { useEffect } from 'react'
import Chart from './CustomChart'

import './showcase.css'
const Showcase = () => {
  const data = {
    chartData: {
      labels: [
        'Boston',
        'Worcester',
        'Springfield',
        'Lowell',
        'Cambridge',
        'New Bedford',
      ],
      datasets: [
        {
          // label: 'Population',
          data: [8000, 9000, 7000, 5000, 5000, 6000, 3000],
          fill: true,
          lineTension: 0.4,
          backgroundColor: 'rgba(183, 161, 150,0.1)',
          borderColor: 'rgba(255,255,255,1)',
          borderCapStyle: '',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#000',
          pointBorderWidth: 10,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 10,
          pointRadius: 0,
          pointHitRadius: 100,
          visible: false,
          // data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    },
  }
  useEffect(() => {
    // console.log(Chart.defaults.globals.)
    // console.log(Chart)
    // setTimeout(() => {
    // }, 1000)
  }, [])
  return (
    <div className='showcase-container'>
      <div className='showcase-content'>
        <div className='show-content'>
          <h6 className='show-title'>We use the real exchange rate.</h6>
          <div className='show-stats'>
            <span>As of 1 min ago, 1 INR → 0.013 USD</span>
            <span>
              Mid market rate ?
              <span className='circle'>
                {/* ?<i class='fas fa-question'></i> */}
              </span>
            </span>
          </div>
        </div>
        <div className='show-box'>
          <Chart
            chartData={data.chartData}
            location='Massachusetts'
            legendPosition='bottom'
          />
        </div>
        <div className='btn-track'>Track this change</div>
      </div>
      <div className='text-container'>
        <div className='show-text'>
          <h6>No hidden fees.</h6>
          <p>
            We’re on a mission to bring transparency to finance. We charge as
            little as possible, and we always show you upfront. No hidden fees.
            No bad exchange rates. No surprises.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Showcase
