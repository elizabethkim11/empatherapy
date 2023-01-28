import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "Navbar">
          <a href = "http://localhost:3000"> Home</a>
        <b>EmpaTherapy</b>
      </div>
      <AppRouter/>
    </div>
  );
}

export default App;