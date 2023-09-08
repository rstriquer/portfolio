import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'

const Portfolio = () => {
    const data = [
        {
            id: 1,
            image: IMG1,
            title: 'iBNS Email Marketing',
            github: '',
            demo: ''
        },
        {
            id: 2,
            image: IMG2,
            title: 'FirstClass Ecommerce Framework',
            github: '',
            demo: ''
        },
        {
            id: 3,
            image: IMG3,
            title: 'Psicologo Agora',
            github: '',
            demo: 'https://www.psicologoagora.com.br'
        },
        {
            id: 4,
            image: IMG4,
            title: 'Winning Article in the DIO Competition',
            github: '',
            demo: 'https://www.linkedin.com/posts/rstriquer_meu-artigo-ficou-em1%C2%BA-lugarna-competi%C3%A7%C3%A3o-activity-7076970654083801088-1GPL?utm_source=share&utm_medium=member_desktop'
        },
        {
            id: 5,
            image: IMG5,
            title: 'SSH Private Key Files',
            github: '',
            demo: 'http://www.programabrasil.org/ssh-private-key-files/'
        },
        {
            id: 6,
            image: IMG6,
            title: 'E-commerce on the Cloud: Learn more about Rackspace and Amazon AWS',
            github: '',
            demo: 'https://issuu.com/ecommercebrasil/docs/ecbr_12_issu/64'
        },
    ]
    return (
        <section id="portfolio">
            <h5>Some of my work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    {github != '' ? <a href={github} className="btn">github</a> : ''}
                                    {demo != '' ? <a href={demo} className="btn" target="_blank" rel="noreferrer">Check it out</a> : ''}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio