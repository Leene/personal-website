
import React from 'react';
import styled from 'styled-components'
 
export default function Navigation(){ 

return <Nav>
 <Button> Computerkenntnisse </Button>
 <Button> Projekte </Button>
 <Button> Bildung </Button>
 <Button> Erfahrung </Button>
     </Nav>  

}


const Nav = styled.nav`
display:flex;
border:1px solid hotpink;
`
const Button = styled.button`

border:1px solid darkgreen;
`