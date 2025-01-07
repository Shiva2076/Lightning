import React from 'react';
import './StatsCards.css'; 

function StatsCards({ data }) {
  return (
    <div className="stats-cards">
      <div className="stats-card1">
        <h4>Total Sales</h4>
        <p>{data.total_sales}</p>
        <img src="/increase.png" alt="Increase icon" className="stats-icon" />
      </div>
      <div className="stats-card2">
        <h4>Total Expenses</h4>
        <p>{data.total_expenses}</p>
        <img src="/downtrend.png" alt="Downtrend icon" className="stats-icon" />
      </div>
      <div className="stats-card3">
        <h4>Net Profit</h4>
        <p>{data.net_profit}</p>
        <img src="/increase.png" alt="Increase icon" className="stats-icon" />
      </div>
      <div className="stats-card4">
        <h4>Due Amount</h4>
        <p>{data.due_amount}</p>
        <img src="/downtrend.png" alt="Downtrend icon" className="stats-icon" />
      </div>
      <div className="stats-card5">
        <h4>Payment Received</h4>
        <p>{data.payment_received}</p>
        <img src="/increase.png" alt="Increase icon" className="stats-icon" />
      </div>
    </div>
  );
}

export default StatsCards;