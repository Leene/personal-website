
import React from 'react';
import styled from 'styled-components'
 
export default function Navigation(){ 

return <Nav>
 <Button> TAbout </Button>
 <Button> Projects </Button>
     </Nav>  

}


const Nav = styled.nav`
display:flex;
border:1px solid hotpink;
`
const Button = styled.button`

border:1px solid darkgreen;
`