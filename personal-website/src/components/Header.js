
import React from 'react';
import styled from 'styled-components'
import meinAntlitz from '../pictures/marleen-stueber.jpg'
 
export default function Header(){ 
    return <>
    <HEADER>
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,200L800,420L1600,200L1600,0L800,0L0,0Z"></path>
</Svg>
       
<Img src={meinAntlitz} />
     </HEADER>
     <section>
     <h1>Section Content</h1>
   </section>

   </>
}

const Img = styled.img`
border-radius: 50%;
box-shadow: 0 8px 6px -6px rgba(90, 80, 50, 0.8); 
width:25vw;
margin: 1em;
position: absolute;
    top: 50px;
 
`
const ImgDiv = styled.div`
 background-color: rgba(255, 255, 255, 0.2);
 box-shadow: 0 8px 6px -6px rgba(90, 80, 50, 0.5); 
border-radius: 20px 20px 0px 0px 
// height: 300px;
//position: absolute;
//top: 50px;


`

const Svg = styled.svg `
position: absolute;
bottom: 0;
width: 100%;
height: 100px;
   filter: drop-shadow(5px 8px 5px rgba(90, 80, 50, 0.5));
   
    `
const HEADER = styled.header `
position: relative;
height: 300px;
background-image: linear-gradient(#ff9d2f, #ff6126);

    `