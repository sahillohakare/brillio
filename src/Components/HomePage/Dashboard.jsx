import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="row">
        <div className="card">
          <h3>Total Applicants</h3>
          <p>1000</p>
        </div>
        <div className="card">
          <h3>New Applicants</h3>
          <p>50</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <h3>Total job Postings</h3>
          <p>200</p>
        </div>
        <div className="card">
          <h3>Active Job Postings</h3>
          <p>50</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
