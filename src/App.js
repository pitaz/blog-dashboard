import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes />
    </Router>
  );
}

export default App;
