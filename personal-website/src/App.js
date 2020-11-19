import React from 'react'
import styled from 'styled-components'

import './App.css'
import Skills from './components/Skills'
import Header from './components/Header'
import Education from './components/Education'
import Expirience from './components/Expirience'
import Projects from './components/Projects'
import { COLORS } from './constants'

function App() {
    return (
        <APP className="App">
            <Wrap>
                <Header />
                
                <Skills />
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#59636C"
                        fill-opacity="1"
                        d="M0,224L1440,32L1440,320L0,320Z"
                    ></path>
                </Svg>
                <Projects  />
                <Svg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#46515b"
                        fill-opacity="0.5"
                        d="M0,96L1440,224L1440,320L0,320Z"
                    ></path>
                </Svg2>
                <Education />
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#59636C"
                        fill-opacity="1"
                        d="M0,224L1440,32L1440,320L0,320Z"
                    ></path>
                </Svg>
                <Expirience />
                <Footer>
                    <Svg2
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#337065"
                            fill-opacity="1"
                            d="M0,96L1440,224L1440,320L0,320Z"
                        ></path>
                    </Svg2>
                    <p>Kontakt | © 2020 Marleen Stüber Privacy Policy</p>
                </Footer>
            </Wrap>
        </APP>
    )
}

export default App

const APP = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: rgb(${COLORS.lightText});
`

const Wrap = styled.div`
    
`
const Svg = styled.svg`
   
    width: 100vw;
    margin-top: -20px;
`
const Svg2 = styled.svg`
    /* blau */
    width: 100vw;
    margin-top: -250px;
`
const Footer = styled.footer`
    background-color: ${COLORS.footer};
`
