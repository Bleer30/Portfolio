import { useState } from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Profile />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
