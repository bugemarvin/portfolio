import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/css/index.css';
import Nav from './nav';
import Profiler from './profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Profiler />
  </React.StrictMode>
);