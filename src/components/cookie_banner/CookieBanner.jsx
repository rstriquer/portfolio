import React from 'react'
import './CookieBanner.css'
import ReactGA from "react-ga4";
import { getCookieValue } from '../../hooks/cookieSetterGetter'

const CookieBanner = () => {
    if (getCookieValue('_ga') !== "") {
        // if cookie exists returns without banner.
        // it means banner was accepted previously
        ReactGA.initialize("G-SP6GC1WEK4");
        return;
    }

    const acceptCookies = (event) => {
        document.querySelector('#page-blocker').classList.remove('show');
        ReactGA.initialize("G-SP6GC1WEK4");
    }

    return (
        <div id="page-blocker" className={getCookieValue('_ga') === "" ? 'show' : '' }>
            <div className="message-banner">
                <p>We use Google Analytics to make your
                    visit more comfortable and <a href=
                    "https://policies.google.com/technologies/cookies?hl=en"
                    target="_blank" rel="noreferrer">Google Analytics uses
                    cookies</a>.<br />We ask that you authorize the use of
                    cookies in your visits to this site.
                    <button type="button" class="btn btn-primary acceptcookies"
                    onClick={acceptCookies}>
                        I agree</button></p>
            </div>
        </div>
    )
}

export default CookieBanner;