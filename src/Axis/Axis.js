import React from "react";
import { Group, Line, Text } from "react-konva";

export default function Axis({ scale, stroke = "black", canvasContext }) {
  const points = [scale.range()[0], 0, scale.range()[1], 0];
  const ticks = scale.ticks();

  return (
    <Group>
      <Line y={480} points={points} stroke={stroke} />
      {ticks.map((tick, i) => (
        <Group>
          <Line
            key={`tick-line-${i}`}
            points={[scale(tick), 483, scale(tick), 477]}
            stroke={stroke}
          />
          <Text
            key={`tick-label${i}`}
            y={490}
            x={scale(tick) - 15}
            width={30}
            text={tick}
            align="center"
          />
        </Group>
      ))}
    </Group>
  );
}
