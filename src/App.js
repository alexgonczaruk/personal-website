import React from 'react'
import Splash from './components/Splash'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" id="splash">
      <div className="home center-screen">
        <div className="container">
          <Splash />
        </div>
      </div>
      <div className="container">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
