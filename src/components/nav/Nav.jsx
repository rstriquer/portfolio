import { React, useState }  from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineWhatsApp } from 'react-icons/ai'
import { TbSchool } from 'react-icons/tb'
import { MdOutlineDesignServices } from 'react-icons/md'
import './nav.css'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><TbSchool /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><MdOutlineDesignServices /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><AiOutlineWhatsApp /></a>
        </nav>
    )
}

export default Nav