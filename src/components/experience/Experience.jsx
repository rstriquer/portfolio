import React from 'react'
import { GiLaurelsTrophy } from 'react-icons/gi' // Advanced
import { PiMedalFill, PiChecks, PiCheckLight } from 'react-icons/pi' // Experienced, Intermediary, Basic

import './experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h5>I am not limited to this list, but here I present some of</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-End Development</h3>
                    <div className="experience__content">
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>VueJS</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>NextJS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>TypeScript</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>TailwindCSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__backend_languages">
                    <h3>Back-End Development (Languages)</h3>
                    <div className="experience__content">
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>TypeScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>GoLang</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__backend_frameworks">
                    <h3>Back-End Development (Frameworks)</h3>
                    <div className="experience__content">
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>NestJS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>Laravel</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Spring</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Symfony</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>CodeIgniter</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiChecks className="experience__details-icon" />
                            <div>
                                <h4>Fyne/Wails</h4>
                                <small className="text-light">Intermediary</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__testing">
                    <h3>Back-End Development (Testing)</h3>
                    <div className="experience__content">
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Jest</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>phpUnit</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>jUnit</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Postman</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        {/* <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>CodeIgniter</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiChecks className="experience__details-icon" />
                            <div>
                                <h4>Fyne/Wails</h4>
                                <small className="text-light">Intermediary</small>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="experience__databases">
                    <h3>Databases (SQL/NoSQL)</h3>
                    <div className="experience__content">
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>SQLight</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Redis</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>DynamoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>ElasticSearch</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Data Layer</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Oracle</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__devops">
                    <h3>DevSecOps / DevOps</h3>
                    <div className="experience__content">
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Jenkins</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiChecks className="experience__details-icon" />
                            <div>
                                <h4>Bamboo</h4>
                                <small className="text-light">Intermediary</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>Terraform</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <GiLaurelsTrophy className="experience__details-icon" />
                            <div>
                                <h4>Bash/Sh</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>PowerShell</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        <div className="experience__details">
                            <PiMedalFill className="experience__details-icon" />
                            <div>
                                <h4>SonarQube</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience