import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; /* install yarn add recharts*/

import './Forecasting.css';

const Forecasting = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month'); // Default to 'month'

  // Data for different periods
  const dataWeek = [
    { day: 'Mon', revenue: 20 },
    { day: 'Tue', revenue: 25 },
    { day: 'Wed', revenue: 30 },
    { day: 'Thu', revenue: 35 },
    { day: 'Fri', revenue: 40 },
    { day: 'Sat', revenue: 45 },
    { day: 'Sun', revenue: 50 },
  ];

  const dataMonth = [
    { month: 'January', revenue: 40 },
    { month: 'February', revenue: 70 },
    { month: 'March', revenue: 50 },
    { month: 'April', revenue: 60 },
    { month: 'May', revenue: 50 },
    { month: 'June', revenue: 70 },
  ];

  const dataYear = [
    { year: '2021', revenue: 500 },
    { year: '2022', revenue: 600 },
    { year: '2023', revenue: 700 },
    { year: '2024', revenue: 800 },
  ];

  // Handler to change the selected period
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  // Choose the appropriate data and display based on the selected period
  const renderChart1 = () => {
    switch (selectedPeriod) {
      case 'week':
        return (
          <LineChart data={dataWeek}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#FFA500" />
          </LineChart>
        );
      case 'month':
        return (
          <LineChart data={dataMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#FFA500" />
          </LineChart>
        );
      case 'year':
        return (
          <AreaChart data={dataYear}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#FFA500" fill="#FFA500" />
          </AreaChart>
        );
      default:
        return null;
    }
  };

  const renderChart2 = () => {
    switch (selectedPeriod) {
      case 'week':
        return (
          <AreaChart data={dataWeek}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#FFA500" fill="#FFA500" />
          </AreaChart>
        );
      case 'month':
        return (
          <AreaChart data={dataMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke="#FFA500" fill="#FFA500" />
          </AreaChart>
        );
      case 'year':
        return (
          <LineChart data={dataYear}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#FFA500" />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="forecasting-container">
      <h2>Revenue Forecast</h2>
      <div className="tabs">
        <button onClick={() => handlePeriodChange('week')}>Week</button>
        <button onClick={() => handlePeriodChange('month')}>Month</button>
        <button onClick={() => handlePeriodChange('year')}>Year</button>
      </div>

      <div className="charts-container">
        <ResponsiveContainer width="100%" height={300}>
          {renderChart1()}
        </ResponsiveContainer>

        <div className="chart2-container">
          <h3>Revenue Forecast<br /><span className="breakdown">Breakdown</span></h3> {/* Added text here */}
          <ResponsiveContainer width="100%" height={300}>
            {renderChart2()}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;