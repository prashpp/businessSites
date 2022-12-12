import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chartjs extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992,]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 91]
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
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Chartjs;