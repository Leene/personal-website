import React from 'react';
import styled from 'styled-components'

import logo from './logo.svg';
import './App.css';
import  Skills from'./components/Skills';
import  Navigation from'./components/Navigation';
import  Header from'./components/Header';




function App() {
  return (
    <APP className="App">
      <Header/>
    
      <H1>Portfolio Website</H1>
       
       
       <Content>
      <h2>Hallo, ich bin Marleen Stüber</h2>
      <p>Junior Web Entwicklerin</p> 
     

     <Skills/>
     <Navigation/>

     </Content>
     <section> footer</section>
    </APP>
  );
}

export default App;

const H1 = styled.h1`
color:whitesmoke;
`
const Content= styled.section`
border:1px solid hotpink;
flex-direction: column;
align-content:space-between;
`

const APP = styled.div`
border:1px solid green;
display: flex;
height:300px;

`
