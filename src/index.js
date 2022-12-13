import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Use react navigation for more pages */}
    <Home />
  </React.StrictMode>
);