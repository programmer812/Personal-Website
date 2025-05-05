import React, { useRef } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} />
      <Header />
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <Footer />
    </>
  )
}

export default App
