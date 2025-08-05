import React, { useEffect, useState } from 'react';

const MintSection = ({ artist }) => {
  const [totalMinted, setTotalMinted] = useState(artist.fansMinted);
  const [artistMinted, setArtistMinted] = useState(artist.fansMinted);
  const [currentPrice, setCurrentPrice] = useState('0.025 SOL');

  useEffect(() => {
    // Set window variables for LaunchMyNFT
    window.ownerId = "4WzpcDfBfY8sCvQdSoptmucfQ1uv1QndoP6zgaq3qZTb";
    window.collectionId = "MjJrQvTkvpHxfI8aqgCf";
    
    // Load LaunchMyNFT script
    const script = document.createElement('script');
    script.src = 'https://storage.googleapis.com/scriptslmt/0.1.4/solana.js';
    script.type = 'module';
    script.defer = true;
    document.head.appendChild(script);
    
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://storage.googleapis.com/scriptslmt/0.1.4/solana.css';
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      // Remove script and link if component unmounts
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      const existingLink = document.querySelector(`link[href="${link.href}"]`);
      if (existingScript) existingScript.remove();
      if (existingLink) existingLink.remove();
    };
  }, []);

  useEffect(() => {
    // Update price based on mint count
    if (artistMinted < Math.floor(artist.allocation * 0.5)) {
      setCurrentPrice('0.025 SOL');
    } else {
      setCurrentPrice('0.04 SOL');
    }
  }, [artistMinted, artist.allocation]);

  const connectWallet = () => {
    console.log('Connect wallet function - LaunchMyNFT will handle this');
  };

  return (
    <section className="container">
      <div className="mint-section">
        <div className="mint-header">
          <h2 style={{ background: `linear-gradient(45deg, ${artist.color}, #ffaa00)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            🎫 MINT WITH {artist.name}
          </h2>
          <p style={{ color: artist.color, fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px' }}>
            Minting {artist.name} x CHOPPED tickets
          </p>
          <div className="price-info">
            <div className="price-tier">
              <span>First {Math.floor(artist.allocation * 0.5).toLocaleString()} {artist.name} tickets:</span>
              <span style={{ color: '#4CAF50' }}>0.025 SOL</span>
            </div>
            <div className="price-tier">
              <span>Remaining {Math.ceil(artist.allocation * 0.5).toLocaleString()} {artist.name} tickets:</span>
              <span style={{ color: '#ffaa00' }}>0.04 SOL</span>
            </div>
          </div>
          <div className="current-price">
            Current Price: {currentPrice}
          </div>
          
          <div className="artist-allocation-info">
            <p style={{ color: artist.color, fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>
              {artist.name} Allocation: {artistMinted.toLocaleString()} / {artist.allocation.toLocaleString()}
            </p>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              Part of the 45,000 total CHOPPED collection
            </p>
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ 
                width: `${(artistMinted / artist.allocation) * 100}%`,
                background: `linear-gradient(90deg, ${artist.color}, #ffaa00)`
              }}
            >
              <div className="progress-text">
                {artistMinted.toLocaleString()} / {artist.allocation.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="mint-controls" style={{ border: `2px solid ${artist.color}40` }}>
          <div className="mint-artist-banner">
            <h3 style={{ color: artist.color, marginBottom: '15px', fontSize: '1.5rem' }}>
              🎤 EXCLUSIVE {artist.name} DROP
            </h3>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>
              Limited allocation for {artist.name} fans - Don't miss out!
            </p>
          </div>
          
          {/* LaunchMyNFT embed elements */}
          <div id="mint-button-container"></div>
          <div id="slider-container">
            <span id="mint-slider" style={{ width: '200px' }}></span>
            <span id="mint-slider-amount"></span>
          </div>
          <div id="mint-counter"></div>

          <button 
            className="connect-wallet pulse" 
            style={{ background: `linear-gradient(135deg, ${artist.color}, #ffaa00)` }}
            onClick={connectWallet}
          >
            <i className="fas fa-wallet"></i>
            Connect Wallet & Mint with {artist.name}
          </button>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <h4 style={{ color: artist.color }}>🔥 {artist.name} Fans Recent Activity</h4>
          <div className="recent-mints">
            <div className="mint-notification">🎤 {artist.name} fan minted 5 tickets</div>
            <div className="mint-notification">🎤 {artist.name} fan minted 2 tickets</div>
            <div className="mint-notification">🎤 {artist.name} fan minted 8 tickets</div>
          </div>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '15px' }}>
            Live {artist.name} mint activity - join your community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MintSection;