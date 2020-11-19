import React from 'react';
import styled from 'styled-components'
import Maus from '../img/icon_maus_white.png'

export default function Skills(){

    return <section> {/* Computerkennnisse */}
   <DIV>
    <Img src={Maus} />
    <H2>Computerkenntnisse</H2>
</DIV>

 <h3>Fortgeschritten</h3>
 <p>Javascript, React.js, JSX, HTML/CSS, Illustrator, 
 InDesign, Photoshop, Java, Funktionale Programmierung, </p>
 
 <h3>Grundlagen</h3>
 <p>Objektorientierte Programmierung (Java), Unity 3D, After Effects,
 MySQL, Jira, Redmine, VS Code, Eclipse</p>
 
    </section>

    
}


const DIV = styled.div`
displey: flex;
flex-direction: row;
`
const H2 = styled.h2`
display:inline;


`


const Img = styled.img`
height:150px;
opacity:0.2;
` 