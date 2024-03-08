// Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.fullname}!</h2>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
