// import {  } from 'chart.js'
import React, { Component } from 'react'
import { Bar, Line, Pie, defaults } from 'react-chartjs-2'

defaults.global.legend.display = false
defaults.scale.ticks.display = false
// console.log(defaults.global)
class Chart extends Component {
  componentDidMount() {
    let data = {}
  }
  constructor(props) {
    super(props)
    this.state = {
      chartData: props.chartData,
    }
  }

  static defaultProps = {
    displayTitle: false,
    displayLegend: false,
    legendPosition: 'right',
    location: 'City',
  }

  render() {
    return (
      <div className='chart'>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities In ' + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            hover: {
              mode: 'index',
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0,
              },
            },
          }}
        />
      </div>
    )
  }

  // displayName: 'LineExample',

  //   render() {
  //     return (
  //       <div>
  //         <h2>Line Example</h2>
  //         <Line data={this.state.data} />
  //       </div>
  //     )
  //   }
}

export default Chart
