import React from 'react'

function Skills() {
  return (
      <div className="thin-container">
          <h1>Skills</h1>
          <h3>Languages</h3>
          <div className="flex-container">
              <div className="skill">Python</div>
              <div className="skill secondary">C/C++</div>
              <div className="skill">Javascript</div>
              <div className="skill secondary">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill secondary">SQL</div>
          </div>
          <h3>Libraries/Frameworks</h3>
          <div className="flex-container">
              <div className="skill">TensorFlow</div>
              <div className="skill secondary">Keras</div>
              <div className="skill">Pandas</div>
              <div className="skill secondary">NumPy</div>
              <div className="skill">Multithreading</div>
              <div className="skill secondary">Flask</div>
              <div className="skill">Bootstrap</div>
              <div className="skill secondary">Matplotlib</div>
              <div className="skill">Node</div>
              <div className="skill secondary">React</div>
              <div className="skill">Redux</div>
              <div className="skill secondary">Express</div></div>
          <h3>Other</h3>
          <div className="flex-container">
              <div className="skill">MongoDB</div>
              <div className="skill secondary">MySQL</div>
              <div className="skill">PostgreSQL</div>
              <div className="skill secondary">Git</div>
              <div className="skill">Microsoft Power Automate</div>
          </div>
          <h3>CAD and Hardware</h3>
          <div className="flex-container">
              <div className="skill">SolidWorks</div>
              <div className="skill secondary">Inventor</div>
              <div className="skill">AutoCAD</div>
              <div className="skill secondary">Raspberry Pi</div>
          </div>

      </div>
  );
}

export default Skills;
