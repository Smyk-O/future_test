import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'


function GetFooter() {
    return (
        <div className="footer">
            <div className="newsletter">
                <h1>Newsletter</h1>
                <div className="subscription">
                    <input className="subscriptionEmail" type="email" placeholder="Enter your email address.."></input><button className="subscriptionBtn">Submit</button>
                </div>
            </div>
            <div className="info">
                <h2>Big Shop</h2>
                <nav className="catalogue">
                    <a href="/">Man</a>
                    <a href="/">Woman</a>
                    <a href="/">Kids</a>
                    <a href="/">Bags</a>
                    <a href="/">Watches</a>
                    <a href="/">Toys</a>
                </nav>
                <div className="social">
                    <a href="/" className="socialFacebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="/" className="socialGoogle"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="/" className="socialInstagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="/" className="socialTwiter"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <div className="copyright">© Copyright 2017. Big Shop by Victor Themes</div>
            </div>
        </div>
    );
}

export default GetFooter;
