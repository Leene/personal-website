

import React from 'react';
import styled from 'styled-components'
import { COLORS } from '../constants'

import Screen1 from '../img/startArea.png'
import Screen2 from '../img/ingame_view.png'
import Screen3 from '../img/GameOverDialog.png'
 
export default function Projects(){

return <section> {/* Projekte */}

<h2>Projekte</h2>

<h3>Emmet Typing Game</h3>
<p> Abschlussproojekt (Web Developer Bootcamp Jan - März 2020)</p>
<img />
<div>
    
    <IMG src={Screen1} />
    <IMG src={Screen2} />
    <IMG src={Screen3} />


</div>
</section> 
}

const IMG = styled.img`
height:50vh;
margin:5px;
box-shadow: 1px 1px 8px 3px ${COLORS.shadow_RGBA};


`