import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutPage from './layout';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
