import React from "react";
import Chart from "react-google-charts";
import "../styles/App.css";

export default function LineChart(props){

    const options = {
        title: props.title,
        legend: { position: "bottom" }
      };
      
    return (
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={props.data}
          options={options}
        />
      </div>
    );
}