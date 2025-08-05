import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MintSection from './components/MintSection';
import PaymentOptions from './components/PaymentOptions';
import GameInfo from './components/GameInfo';
import FAQ from './components/FAQ';
import './App.css';

// Artist Configuration System
const artistConfigs = {
  mcfire: {
    name: "MC FIRE",
    color: "#ff6b00",
    description: "The hottest bars meet the coldest game",
    allocation: 10000,
    subtitle: "Exclusive MC FIRE Collection",
    fansMinted: 2847,
    backgroundGradient: "linear-gradient(135deg, #ff6b00 0%, #ff4444 50%, #0a0a0a 100%)"
  },
  lilbeast: {
    name: "LIL BEAST",
    color: "#9b59b6",
    description: "Purple reign in the elimination game",
    allocation: 8000,
    subtitle: "Exclusive LIL BEAST Collection", 
    fansMinted: 1923,
    backgroundGradient: "linear-gradient(135deg, #9b59b6 0%, #ff4444 50%, #0a0a0a 100%)"
  },
  trapking: {
    name: "TRAP KING",
    color: "#f39c12",
    description: "Royalty meets the ultimate survival game",
    allocation: 12000,
    subtitle: "Exclusive TRAP KING Collection",
    fansMinted: 4521,
    backgroundGradient: "linear-gradient(135deg, #f39c12 0%, #ff4444 50%, #0a0a0a 100%)"
  }
};

// Change this to switch artists quickly
const CURRENT_ARTIST = 'mcfire';

function App() {
  const artist = artistConfigs[CURRENT_ARTIST];

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="bg-particles" id="particles"></div>
      
      <Header artist={artist} />
      <Hero artist={artist} />
      <MintSection artist={artist} />
      <PaymentOptions artist={artist} />
      <GameInfo artist={artist} />
      <FAQ artist={artist} />
    </div>
  );
}

export default App;