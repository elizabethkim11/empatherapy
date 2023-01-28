import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import SelectionPage from './SelectionPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selection" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
}
export default AppRouter