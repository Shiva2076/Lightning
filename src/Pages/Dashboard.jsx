// src/Pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import StatsCards from '../components/StatsCards';
import CustomLineChart from '../Charts/LineChart';
import MyPieChart from '../Charts/PieChart';
import Tables from '../components/Tables';
import './Dashboard.css';

function Dashboard() {
  const [searchParams] = useSearchParams();
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  const dateParam = searchParams.get('date') || '01-01-2025';

  useEffect(() => {
    
    fetch('./src/assets/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data.json (${res.status})`);
        }
        return res.json();
      })
      .then((allData) => {

        const matchedData = allData.find((item) => item.date === dateParam);

        if (matchedData) {
          setDashboardData(matchedData);
        } else {
          setError(`No data found for date: ${dateParam}`);
        }
      })
      .catch((err) => setError(err.message));
  }, [dateParam]);

  // If there was an error (not found, fetch error, etc.)
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // If data is still loading
  if (!dashboardData) {
    return <div className="loading-spinner">Loading...</div>;
  }

  // Successfully fetched & matched data
  return (
    <div className="dashboard">
      <h1>Overview </h1>

      <StatsCards data={dashboardData} />

      {/* Charts row */}
      <div className="charts-row">
        <div className='line-chart-container'>
        <CustomLineChart
          supplierData={dashboardData.supplier_records}
          customerData={dashboardData.customer_records}
        />
        </div>
        <div className='pie-chart-container'>
        <MyPieChart data={dashboardData.top_selling_products} />
        </div>
      </div>

      {/* Tables */}
      <div className="tables-container">
        <Tables
          supplierPayments={dashboardData.supplier_payments}
          customerPayments={dashboardData.customer_payments}
        />
      </div>
    </div>
  );
}

export default Dashboard;
