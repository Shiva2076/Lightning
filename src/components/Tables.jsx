import React from 'react';
import './Tables.css';

function Tables({ supplierPayments, customerPayments }) {
  return (
    <div className="tables-container">
    <div className="table-frame"> 
    <h2>Recent Supplier Payments</h2>

      <table>
        <thead>
          <tr>
            <th>Record No</th>
            <th>Farmer Name</th>
            <th>Net Amount</th>
            <th>Paid Amount</th>
            <th>Due Amount</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {supplierPayments.map((payment) => (
            <tr key={payment.record_no}>
              <td>{payment.record_no}</td>
              <td>{payment.farmer_name}</td>
              <td>{payment.net_amount}</td>
              <td>{payment.paid_amount}</td>
              <td>{payment.due_amount}</td>
              <td>{payment.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  
    <div className="table-frame"> 
    <h2>Recent Customer Payments</h2>

      <table>
        <thead>
          <tr>
            <th>Record No</th>
            <th>Customer Name</th>
            <th>Payment Date</th>
            <th>Paid Amount</th>
            <th>Voucher No</th>
            <th>Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {customerPayments.map((payment) => (
            <tr key={payment.record_no}>
              <td>{payment.record_no}</td>
              <td>{payment.customer_name}</td>
              <td>{payment.payment_date}</td>
              <td>{payment.paid_amount}</td>
              <td>{payment.voucher_no}</td>
              <td>{payment.payment_mode}</td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  </div>
  
  );
}

export default Tables;
