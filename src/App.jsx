import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import './App.css';
import Resume from './componets/Portafolio/Resume';
import Contact from './componets/Contact/Contact';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import Skills from './componets/Skills/Skills';
import Services from './componets/services/Services';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
