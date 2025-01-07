import React, { useState } from 'react';
import './LineChart.css';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function CustomLineChart({ supplierData, customerData }) {
  const allMonths = supplierData.map((item, idx) => ({
    month: item.month,
    Supplier_Records: item.bags,
    Customer_Records: customerData[idx].bags,
  }));

  const monthOptions = [
    'All',      
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];

  const [selectedMonth, setSelectedMonth] = useState('All');

  const filteredMonths = selectedMonth === 'All'
    ? allMonths
    : allMonths.filter((entry) => entry.month === selectedMonth);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const formatYAxis = (tickItem) => {
    return `${(tickItem / 1000)}k`;
  };

  return (
    <div className="chart-container">
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="month-filter" style={{ marginRight: '0.5rem' }}>
          Bags |
        </label>
        <select
          id="month-filter"
          value={selectedMonth}
          onChange={handleMonthChange}
          style={{ padding: '0.3rem' }}
        >
          {monthOptions.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      <h3>Month{selectedMonth !== 'All' && ` - ${selectedMonth}`}</h3>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsLineChart data={filteredMonths}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={formatYAxis} />
          <Tooltip />
          
          <Legend
            formatter={(value, entry, index) => (
              <div className="tag-container">
                <span className="tag-dot" style={{ backgroundColor: entry.color }}></span>
                <span className="tag-text">{value}</span>
              </div>
            )}
          />
          <Line type="monotone" dataKey="Supplier_Records" stroke="#303030" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Customer_Records" stroke="#00aef0" strokeWidth={2} strokeDasharray="5 5" dot={false} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
