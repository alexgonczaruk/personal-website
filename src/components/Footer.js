import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="thin-container">
                <a href="#splash" className="arrow-up"><FontAwesomeIcon size="2x" icon={faChevronUp}/></a>
                <div className="social-links">
                    <a className="social-link" href="https://www.github.com/alexgonczaruk/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-logos" size="2x" icon={faGithub}/></a>
                    <a className="social-link" href="https://www.linkedin.com/in/alexgonczaruk/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-logos" size="2x" icon={faLinkedin}/></a>
                </div>
                <p>&copy; 2021 Alex Gonczaruk</p>
            </div>
        </footer>
    );
}

export default Footer;