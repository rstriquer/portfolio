import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Typescrpt, Java, PHP or GoLang Development</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Unit Testing code</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>DocBlock oriented code</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Agile oriented - SCRUM experienced</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>System Deploy</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Terraform, Jenkins or Bamboo deploy</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>CI/CD pipeline building</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>DevSecOps integrated</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>System Analises and Documentation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>ITIL/ITSM Experienced</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Kanban Experienced</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>BPMN Experienced</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UML Experienced</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>PlantUML Experienced</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Confluence know how</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Jira know how</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services