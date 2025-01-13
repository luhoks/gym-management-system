import React from 'react';
import './UserAccount.css';

const UserAccount = () => {
  const userAccounts = [
    { id: 'MX0001', email: 'email1@example.com', userType: 'Admin', dateRegistered: 'July 24, 2024', status: 'Default' },
    { id: 'MX0002', email: 'email2@example.com', userType: 'Admin', dateRegistered: 'July 24, 2024', status: 'Default' },
    { id: 'MX0003', email: 'email3@example.com', userType: 'Admin', dateRegistered: 'July 24, 2024', status: 'Newly Registered' },
    { id: 'MX0004', email: 'email4@example.com', userType: 'User', dateRegistered: 'July 24, 2024', status: 'Newly Registered' },
    { id: 'MX0005', email: 'email5@example.com', userType: 'User', dateRegistered: 'July 24, 2024', status: 'For Validation' },
  ];

  return (
    <div className="user-account-container">
      <h1>User Accounts</h1>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-box" />
        <button className="add-button">+ Add</button>
      </div>
      <table className="user-account-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Date Registered</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userAccounts.map((account, index) => (
            <tr key={index}>
              <td>{account.id}</td>
              <td>{account.email}</td>
              <td>{account.userType}</td>
              <td>{account.dateRegistered}</td>
              <td>{account.status}</td>
              <td>
                <button className="delete-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAccount;