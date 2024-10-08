import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import

// Create root using React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using React 18's createRoot().render() method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure app performance
reportWebVitals();
