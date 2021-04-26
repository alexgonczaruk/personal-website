import React from 'react'

function About() {
  return (
        <div className="thin-container">
            <section className="about" id="about">
                <div className="about-me">
                    <img className="about-pic" src="../assets/alex.jpeg" alt="about"/>
                    <div className="about-container">
                        <h1>Hi, I'm Alex!</h1>
                        <p className="about-details">I'm a Mechatronics Engineering student at the University of Waterloo. I grew up in Toronto, where I developed a deep passion for robotics and software. I love combining technology, practicality, and innovation to create projects that I can use.</p>
                        <p className="about-details">I enjoy learning new things. I try to learn something new everyday, and constantly take new courses to develop or reinforce previous skills.</p>
                        <p className="about-details">If I'm not working on a new project, I'm probably playing or watching sports. I love basketball and football, and played competitive level soccer and hockey. I also enjoy fashion and politics.</p>
                    </div>
                    <div className="social-links">
                        <a className="social-link resume" target="_blank" rel="noreferrer" href="../assets/resumeAG.pdf">Resume</a>
                    </div>
                </div>
            </section>
        </div>
  );
}

export default About;