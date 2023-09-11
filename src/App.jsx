import React from 'react'
import { Helmet } from 'react-helmet';
import CookieBanner from './components/cookie_banner/CookieBanner'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ILISTRATION from './assets/metadata_image.jpg'


const App = () => {

    return (
        <>
            <Helmet>
                <title>Ricardo Soares Profile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Hi, I'm Ricardo Soares. This is my portfolio page. Here you will find my CV and some links to projects I have built and participated in as well as my social networks." />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Ricardo Soares Profile" />
                <meta property="og:title" content="Ricardo Soares Profile" />
                <meta property="og:description" content="Hi, I'm Ricardo Soares. This is my portfolio page. Here you will find my CV and some links to projects I have built and participated in as well as my social networks." />
                <meta property="og:image" content={ILISTRATION} />
                <meta property="og:url" content="https://rstriquer.github.io/portfolio/" />
                <meta name="twitter:title" content="Ricardo Soares Profile" />
                <meta name="twitter:description" content="Hi, I'm Ricardo Soares. This is my portfolio page. Here you will find my CV and some links to projects I have built and participated in as well as my social networks." />
                <meta name="twitter:image" content={ILISTRATION} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <CookieBanner />

            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App