import React from 'react'

function Projects() {
    return (
        <div className="thin-container">
            <h1>Projects</h1>
            <div className="project-container">
                <img src="../assets/society.jpeg" alt="society" className="project-img"/>
                <div className="project-details">
                    <h3 className="project-title">Society Streetwear (Ongoing)</h3>
                    <div className="flex-container project">
                        <div className="skill">JavaScript</div>
                        <div className="skill secondary">Node</div>
                        <div className="skill">React</div>
                        <div className="skill secondary">Express</div>
                        <div className="skill">MongoDB</div>
                    </div>
                    <p className="project-info">An e-commerce site to compliment my reselling business using the MERN stack</p>
                </div>
            </div>
            <div className="project-container">
                <img src="../assets/ball.jpeg" alt="basketball" className="project-img"/>
                <div className="project-details">
                    <h3 className="project-title">NBA Fantasy Draft Assistant</h3>
                    <div className="flex-container project">
                        <div className="skill">Python</div>
                        <div className="skill secondary">Selenium</div>
                        <div className="skill">Pandas</div>
                        <div className="skill secondary">Matplotlib</div>
                    </div>
                    <p className="project-info">A web scraper that displays and compares best NBA players in statistical categories</p>
                </div>
            </div>
            <div className="project-container">
                <img src="../assets/vehicle.jpg" alt="nba" className="project-img"/>
                <div className="project-details">
                    <h3 className="project-title">Autonomous Robot Vehicle</h3>
                    <div className="flex-container project">
                        <div className="skill">C/C++</div>
                        <div className="skill">EV3</div>
                    </div>
                    <p className="project-info">An EV3 configured autonomous vehicle capable of everyday driving functions</p>
                </div>
            </div>
        </div>
  );
}

export default Projects;