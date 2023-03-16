import { useState } from 'react';
import './App.css';
import GlobalHeader from './components/GlobalHeader';
import Home from './components/Home';

function App() {
  const [showPinMessage, setShowPinMessage] = useState(false);
  return (
    <div className="App">
      <GlobalHeader showPinMessage={showPinMessage} />
      <Home setShowPinMessage={setShowPinMessage} />
    </div>
  );
}

export default App;
