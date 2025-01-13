import React from "react";
import { PieChart, Pie, LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import "./Revenue.css";



const revenueData = [
  { name: "Week 1", Membership: 40, Services: 20, PersonalTraining: 30 },
  { name: "Week 2", Membership: 50, Services: 25, PersonalTraining: 25 },
  { name: "Week 3", Membership: 70, Services: 30, PersonalTraining: 20 },
];

const pieData = [
  { name: "Membership Fee", value: 40 },
  { name: "Services", value: 15 },
  { name: "Personal Training", value: 45 },
];

const outstandingPayments = [
  { user: "User 1", amountDue: "₱1,800.00", dueDate: "Jan 01, 2024" },
  { user: "User 2", amountDue: "₱1,800.00", dueDate: "Jan 01, 2024" },
  { user: "User 3", amountDue: "₱1,800.00", dueDate: "Jan 01, 2024" },
];

const paymentHistory = [
  { id: "P001", user: "User 1", amountPaid: "₱1,800.00", date: "Jan 01, 2024", method: "Credit Card" },
  { id: "P002", user: "User 2", amountPaid: "₱1,800.00", date: "Jan 01, 2024", method: "Cash" },
  { id: "P003", user: "User 3", amountPaid: "₱1,800.00", date: "Jan 01, 2024", method: "Bank Transfer" },
];

const Revenue = () => {
  return (
    <div className="revenue-page">
      <h1>Revenue Overview</h1>

      {/* Total and Monthly Revenue */}
      <div className="summary-container">
        <div className="summary-card">
          <h2>Total Revenue</h2>
          <p>₱999,999.99</p>
        </div>
        <div className="summary-card">
          <h2>Monthly Revenue</h2>
          <p>₱999,999.99</p>
        </div>
      </div>

      {/* Revenue Sources - Pie Chart */}
      <div className="chart-container">
        <h2>Revenue Sources</h2>
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

      {/* Revenue Trends - Line Chart */}
      <div className="chart-container">
        <h2>Revenue Trends</h2>
        <LineChart width={500} height={300} data={revenueData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Membership" stroke="#8884d8" />
          <Line type="monotone" dataKey="Services" stroke="#82ca9d" />
          <Line type="monotone" dataKey="PersonalTraining" stroke="#ffc658" />
        </LineChart>
      </div>

      {/* Outstanding Payments */}
      <div className="table-container">
        <h2>Outstanding Payments</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount Due</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {outstandingPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.user}</td>
                <td>{payment.amountDue}</td>
                <td>{payment.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment History */}
      <div className="table-container">
        <h2>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Amount Paid</th>
              <th>Date</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((history, index) => (
              <tr key={index}>
                <td>{history.id}</td>
                <td>{history.user}</td>
                <td>{history.amountPaid}</td>
                <td>{history.date}</td>
                <td>{history.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Revenue;
