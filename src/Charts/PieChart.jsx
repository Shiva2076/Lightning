import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import './PieChart.css';

const COLORS = ['#63aacc', '#d9f2fb', '#3e91ba', '#90dcf9', '#e2e5ea'];

function renderCustomLegend({ payload }) {
  return (
    <ul className="custom-legend">
      {payload.map((entry, index) => {
        const { item, weight } = entry.payload;
        return (
          <li key={`item-${index}`} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: entry.color }} />
            <span>{item}</span>
            <span className="legend-text">{weight} kg</span>
          </li>
        );
      })}
    </ul>
  );
}

function MyPieChart({ data }) {
  return (
    <div className="chart-container">
      <h3>Top Selling Items</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="weight"
            nameKey="item"
            cx="50%"
            cy="50%"
            outerRadius={70}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={renderCustomLegend} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyPieChart;
