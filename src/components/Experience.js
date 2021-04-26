import React from 'react'

function Experience() {
  return (
    <div className="thin-container">
        <h1>Experience</h1>
        <div className="work">
            <h3>Software Developer - University of Waterloo</h3>
            <h4>January 2021 - April 2021</h4>
            <div className="flex-container">
                <div className="skill">Python</div>
                <div className="skill secondary">NumPy</div>
                <div className="skill">Multithreading</div>
                <div className="skill secondary">Inventor</div>
                <div className="skill">Raspberry Pi</div>
            </div>
            <ul>
                <li className="about-details">Utilised Python to control and reconfigure laser beams in the Quantum Ion lab using a Raspberry Pi in a GUI format</li>
                <li className="about-details">Incorporated ability to track displacement using NumPy to calculate Gaussian fits on laser beams maximum intensitys</li>
                <li className="about-details">Integrated threading and sockets to allow for real-time communication between multiple machines alongside concurrent laser control</li>
                <li className="about-details">Designed and created 3D parts for laser mounts using Autodesk Inventor</li>
            </ul>
        </div>   
        <div className="work">
            <h3>Robotics Process Automation Intern</h3>
            <h4>May 2020 - August 2020</h4>
            <div className="flex-container">
                <div className="skill">Microsoft Power Automate</div>
                <div className="skill secondary">HTML</div>
                <div className="skill">CSS</div>
            </div>
            <ul>
                <li className="about-details">Used Microsoft Power Automate Platform to develop and distribute company wide applications used by over <strong>7,000</strong> corporate employees</li>
                <li className="about-details">Integrated HTML and CSS to design attractive frontend application interfaces</li>
                <li className="about-details">Illustrated system design skills by leading application architectures</li>
                <li className="about-details">Reinforced interpersonal skills through frequent client collaboration on current and new project ideas</li>
            </ul>
        </div>
    </div>
  );
}

export default Experience;