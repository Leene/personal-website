import React from 'react';
import styled from 'styled-components'

import logo from './logo.svg';
import './App.css';
import  Skills from'./components/Skills';
import  Navigation from'./components/Navigation';




function App() {
  return (
    <div className="App">
    <div>
      <h1>Portfolio Website</h1>
      <h2>Hallo, ich bin Marleen Stüber</h2>
      <p>Junior Web Entwicklerin</p> 
      </div>

     <Skills/>
     <Navigation/>
    </div>
  );
}

export default App;
