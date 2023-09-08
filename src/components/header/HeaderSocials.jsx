import React from 'react'
import {BsLinkedin, BsGithub, BsStackOverflow, BsTwitter, BsInstagram} from 'react-icons/bs'
import {LiaPhp, LiaDocker} from 'react-icons/lia'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/rstriquer" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/rstriquer" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://stackoverflow.com/users/423511/ricardophp" target="_blank" rel="noreferrer"><BsStackOverflow /></a>
            <a href="https://twitter.com/rstriquer" target="_blank" rel="noreferrer"><BsTwitter /></a>
            <a href="https://packagist.org/packages/rstriquer/" target="_blank" rel="noreferrer"><LiaPhp /></a>
            <a href="https://hub.docker.com/u/rstriquer" target="_blank" rel="noreferrer"><LiaDocker /></a>
            <a href="https://www.instagram.com/rstriquer" target="_blank" rel="noreferrer"><BsInstagram /></a>
        </div >
    )
}

export default HeaderSocials