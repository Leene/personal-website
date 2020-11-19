

import React from 'react';
import styled from 'styled-components'
import Karre from '../img/icon_karre_white.png'
 
export default function Expirience(){
    
    return <Section>
<Img src={Karre} />
<h2>Praxiserfahrung</h2>

<h3>Junior QA (Werkstudent) </h3>
<p> bei SinnerSchrader Commerce GmbH</p>
<p>Januar 2018 - Dezember 2018</p>
<li>Aufgabe: Qualitätssicherung von Webseiten</li>

<h3> Projektassistenz </h3>
<p> enz bei sitegeist neos solutions GmbH</p>
<p>März  2015 - Novenmber 2017</p>
<li>Aufgaben: Contentpflege, Bildbearbeitung, Präsentationsvorbereitung</li>

<h3>Praktikantin der Grafik</h3>
<p>bei spotsonfire GmbH, Communicators GmbH &amp; Co.KG, submedia GmbH</p>
<p>März 2007 - Juni 2009</p>


</Section> 
}

const Section = styled.section`
background-color:#59636C;
padding-bottom:150px;
margin-bottom: 0px;
margin-top:-1px;
`
const Img = styled.img`
height:150px;
opacity:0.2;
` 