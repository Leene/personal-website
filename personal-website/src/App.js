import React from 'react';
import styled from 'styled-components'

import './App.css';
import  Skills from'./components/Skills';
import  Navigation from'./components/Navigation';
import  Header from'./components/Header';
import Education from './components/Education'
import Expirience from './components/Expirience'
import Projects from './components/Projects'



function App() {
  return (
    <APP className="App">
      <Header/>
     <Navigation/>
     <Skills/>
     <Projects/>
     <Education/>
     <Expirience/>
     
     <section> footer</section>
    </APP>
  );
}

export default App;

const APP = styled.div`
border:1px solid green;
display: flex;
flex-direction: column;
height:300px;

`
