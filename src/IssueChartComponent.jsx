import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'High', value: 30 },
  { name: 'Medium', value: 40 },
  { name: 'Low', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PriorityBasedChart = () => {
    return (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={0}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} startAngle={entry.startAngle} endAngle={entry.endAngle} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      );
};

export default PriorityBasedChart;