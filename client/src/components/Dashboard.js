import React from 'react';
import '../App.css'; 

function Dashboard() {
  return (
    <div className="container">
      <h1>Let's Book Your Ticket</h1>
      <p>Discover your favorite entertainment right here</p>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Dashboard;


