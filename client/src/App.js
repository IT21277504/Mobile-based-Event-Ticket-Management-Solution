import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import './App.css'; 

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
