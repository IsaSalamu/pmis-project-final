import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class WaterChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
          title:{
              text:"Water Consumption",
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
      <div className="donut">
        <Chart options={this.state.options} 
        series={this.state.series} 
        type="donut"
         width="300" />
      </div>
    );
  }
}

export default WaterChart;