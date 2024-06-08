import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Open', value: 40 },
  { name: 'Closed', value: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AllIssueChart = () => {
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

export default AllIssueChart;