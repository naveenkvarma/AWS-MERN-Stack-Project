// src/App.js
import React from 'react';
import Login from './Login'; // This line imports your Login component
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Login /> {/* This line renders your Login component */}
    </div>
  );
}

export default App;