import { COLORS } from '../constants'
import React from 'react'
import styled from '/styled-components'
import meinAntlitz from '../img/marleen_stueber_quadrat.png'
import Navigation from './Navigation'
export default function Header() {
    return (
        <>
            <HEADER>
                <Profil>
                    {/* Profil */}
                    <DIV>
                        <h1>Marleen Stüber</h1>
                        <h3>Junior Web Developer</h3>
                        <p>
                            Ich bin ehemalige Studentin der Medieninformatik und
                            seit März 2020 Absolventin des Web Developer
                            Bootcamps der neuefische GmbH. Aktuell suche ich
                            eine Festanstellung als Junior Web Developer.
                        </p>
                        <Navigation />
                    </DIV>
                    <div>
                        <Img src={meinAntlitz} />
                    </div>
                </Profil>

                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                    <path
                        fill="#008080"
                        fill-opacity="0.5"
                        d="M0,224L1440,32L1440,220L0,220Z"
                    ></path>
                </Svg>
                <Svg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#46515B"
                        fill-opacity="1"
                        d="M0,84L1440,288L1440,420L0,420Z"
                    ></path>
                </Svg2>
            </HEADER>
        </>
    )
}

const Profil = styled.section`
    display: flex;
    justify-content: space-beetween;
    margin: 0 10vw;
    width: 60vw;
`
const DIV = styled.div``

const Img = styled.img`
    border-radius: 50%;
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow_dark_RGBA};
    height: 350px;
    margin-top: 100px;
    margin-left: 100px;
`

const Svg = styled.svg`
    /* blau */
    width: 100vw;
    margin-top: 0px;
`
const Svg2 = styled.svg`
    width: 100vw;
    margin-top: -400px;
`
const HEADER = styled.header`
    background-image: linear-gradient(${COLORS.header}, ${COLORS.background});
    width: 100vw;
    height: 75%;
    text-align: left;
`
