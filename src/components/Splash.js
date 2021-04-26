import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Splash() {
  return (
      <div className="title">
          <h1>Welcome!</h1>
          <span className="welcome-subtitle">I'm Alex. Nice to meet you!</span>
          <div className="social-links splash">
              <a className="social-link" href="https://www.github.com/alexgonczaruk/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-logos" size="2x" icon={faGithub}/></a>
              <a className="social-link" href="https://www.linkedin.com/in/alexgonczaruk/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-logos" size="2x" icon={faLinkedin}/></a>
          </div>
          <a href="#about" className="arrow-down"><FontAwesomeIcon icon={faChevronDown} size="2x"/></a>
      </div>
  );
}

export default Splash;
