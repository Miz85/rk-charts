import React from "react";
import ReactDOM from "react-dom";
import { scaleLinear } from "d3-scale";
import { Chart } from "./Chart";
import { Axis } from "./Axis";
import { Line } from "./Line";

import "./styles.css";

const data = [
  {
    x: 0,
    y: 1
  },
  {
    x: 20,
    y: 4
  },
  {
    x: 100,
    y: 10
  }
];

const xScale = scaleLinear()
  .domain([0, 120])
  .range([20, 500]);

const yScale = scaleLinear()
  .domain([0, 20])
  .range([0, 480]);

function App() {
  return (
    <div className="app">
      <h1>Axis</h1>
      <Chart>
        <Axis scale={xScale} stroke="palevioletred" />
        <Line data={data} xScale={xScale} yScale={yScale} />
      </Chart>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
