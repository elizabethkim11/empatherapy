import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SelectionPage from './pages/SelectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selection" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;