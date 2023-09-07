import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi, I am</h5>
                <h1>Ricardo Soares</h1>
                <h5 className="text-light">Fullstack Developer and Software Engineer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header