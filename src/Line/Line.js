import React from "react";
import { line as d3Line } from "d3-shape";
import { Line as KonvaLine } from "react-konva";

export default function Line({ data, xScale, yScale }) {
  const points = data
    .map(({ x, y }) => ({ x: xScale(x), y: yScale(y) }))
    .reduce((pointList, { x, y }) => {
      return [...pointList, x, y];
    }, []);

  return <KonvaLine points={points} stroke="mediumseagreen" />;
}
