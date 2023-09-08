import React from 'react'
import ME from '../../assets/me-about.jpg'
import { LuCalendarClock } from 'react-icons/lu'
import { BiHappy } from 'react-icons/bi'
import { GiNetworkBars } from 'react-icons/gi'
import './about.css'

const About = () => {
    return (
        <section id="about">
            <h5>Who is Ricardo Soares?</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <LuCalendarClock className="about__icon" />
                            <h5>Experience</h5>
                            <small>25+ Years working</small>
                        </article>
                        <article className="about__card">
                            <BiHappy className="about__icon" />
                            <h5>Clients</h5>
                            <small>800+ Clients<br />World wide</small>
                        </article>
                        <article className="about__card">
                            <GiNetworkBars className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                        Speaker, entrepreneur and experienced technician both in logical programming and in management of machines and
                        people. Over 20 years of professional experience with high
                        traffic servers and more than 30 years of academic
                        experience and know-how in the computer science field.
                        Technical and professional knowledge in several areas, with
                        emphasis in the financial, accounting, commercial and
                        mathematical areas.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's talk!</a>
                </div>
            </div>
        </section >
    )
}

export default About