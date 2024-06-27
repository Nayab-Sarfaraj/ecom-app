import React from "react";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryPie, VictoryTooltip } from "victory";

const LineChartComponent = ({ products }) => {
  const data = []
  products.forEach(element => {
    data.push({ x: element.Stock, y: element.price })
  });
  return (

    <VictoryChart>
      <VictoryAxis
        label="X Axis"
        style={{
          axisLabel: { padding: 30 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Y Axis"
        style={{
          axisLabel: { padding: 40 },
        }}
      />
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
      />
    </VictoryChart>
  );
}

const PieChartComponent = ({ products }) => {
  const data = []
  products.forEach(element => {
    data.push({ x: element.name, y: element.price })
  });
  return (
    <VictoryPie
      colorScale="red"
      data={data}
      labelComponent={<VictoryTooltip />}
      innerRadius={10}
      labelRadius={10}
      padAngle={3}
      style={{
        labels: { fill: "black", fontSize: 10, fontWeight: "bold" },
      }}
    />
  )

}

export { LineChartComponent, PieChartComponent };

