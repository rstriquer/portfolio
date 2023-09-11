import React from 'react'
import './CookieBanner.css'
import ReactGA from "react-ga4";
import { getCookieValue, setCookieValue } from '../../hooks/cookieSetterGetter'

const CookieBanner = () => {
    if (getCookieValue('cookiesAccepted') !== "") {
        // if cookie exists returns without banner.
        // it means banner was accepted previously
        return "";
    }

    const acceptCookies = (event) => {
        setCookieValue('cookiesAccepted', !0, 365);
        document.querySelector('#cookieBanner').classList.remove('show');
        ReactGA.initialize("G-SP6GC1WEK4");
    }

    return (
        <div id="cookieBanner" className={getCookieValue('cookiesAccepted') === "" ? 'cookiealert alert show' : '' }>
            <div className="cookie-banner" role="alert">
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