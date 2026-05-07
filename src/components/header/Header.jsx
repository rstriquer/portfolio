import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <h5>Hi, welcome! This is the portfolio page of</h5>
                <h1>Ricardo Soares</h1>
                <h5 className="text-light">Fullstack Developer and Software Engineer</h5>
                <CTA />
                <HeaderSocials />

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header