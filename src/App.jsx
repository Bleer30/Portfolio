import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './componets/layout/Layout';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import Skills from './componets/Skills/Skills';
import Services from './componets/services/Services';
import Portfolio from './componets/Portfolio/Portfolio';
import Contact from './componets/Contact/Contact';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Layout />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </Router>
  );
}

export default App;
