import React from 'react'
import {BsLinkedin, BsGithub, BsStackOverflow, BsTwitter, BsInstagram} from 'react-icons/bs'
import {LiaPhp, LiaDocker} from 'react-icons/lia'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="" className="footer__logo">@rstriquer</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/rstriquer" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/rstriquer" target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href="https://stackoverflow.com/users/423511/ricardophp" target="_blank" rel="noreferrer"><BsStackOverflow /></a>
                <a href="https://twitter.com/rstriquer" target="_blank" rel="noreferrer"><BsTwitter /></a>
                <a href="https://packagist.org/packages/rstriquer/" target="_blank" rel="noreferrer"><LiaPhp /></a>
                <a href="https://hub.docker.com/u/rstriquer" target="_blank" rel="noreferrer"><LiaDocker /></a>
                <a href="https://www.instagram.com/rstriquer" target="_blank" rel="noreferrer"><BsInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer