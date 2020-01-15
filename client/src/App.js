import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greet, setGreet] = useState('')
  useEffect(() => {
    fetch('/greeting')
      .then(data => data.json())
      .then(data => setGreet(data))
      .catch(_ => setGreet('ARGH'))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          greet
        }
      </header>
    </div>
  );
}

export default App;
