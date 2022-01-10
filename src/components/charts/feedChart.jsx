import React, { Component } from "react";
// import Chart from "react-apexcharts";
import Chart from "react-apexcharts"

export default class FeedChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
          title:{
              text: "Feed chart",
              align: "center"

          },

        chart: {
          id: "basic-bar",
          
        },
    
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996 ]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60 ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    );
  }
}