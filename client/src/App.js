import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import './App.css'; 
import AllCategory from './components/AllCategory/AllCategory';
import Music from './components/Music/Music';
import Events from './components/Event/Event';

function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} exact />
      <Route path="/allcategory" element={<AllCategory/>} exact />
      <Route path="/music" element={<Music/>} exact />
      <Route path="/events" element={<Events/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
