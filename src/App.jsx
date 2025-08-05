import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MintSection from './components/MintSection';
import PaymentOptions from './components/PaymentOptions';
import GameInfo from './components/GameInfo';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="bg-particles" id="particles"></div>
      
      <Header />
      <Hero />
      <MintSection />
      <PaymentOptions />
      <GameInfo />
      <FAQ />
    </div>
  );
}

export default App;