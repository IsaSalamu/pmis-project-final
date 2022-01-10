import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class MortalityChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
          title:{
              text:"Mortality",
              align: "center"
          },
        legend:{
            position: "top",
            show: false
        }
      },
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="pie">
        <Chart options={this.state.options} 
        series={this.state.series} 
        type="pie"
         width="300" />
      </div>
    );
  }
}

export default MortalityChart;