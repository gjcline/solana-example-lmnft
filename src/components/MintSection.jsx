import React, { useEffect, useState } from 'react';

const MintSection = () => {
  const [totalMinted, setTotalMinted] = useState(12847);
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
    if (totalMinted < 10000) {
      setCurrentPrice('0.025 SOL');
    } else {
      setCurrentPrice('0.04 SOL');
    }
  }, [totalMinted]);

  const connectWallet = () => {
    console.log('Connect wallet function - LaunchMyNFT will handle this');
  };

  return (
    <section className="container">
      <div className="mint-section">
        <div className="mint-header">
          <h2>🎫 SECURE YOUR TICKET</h2>
          <div className="price-info">
            <div className="price-tier">
              <span>First 10,000 tickets:</span>
              <span style={{ color: '#4CAF50' }}>0.025 SOL</span>
            </div>
            <div className="price-tier">
              <span>Remaining 35,000 tickets:</span>
              <span style={{ color: '#ffaa00' }}>0.04 SOL</span>
            </div>
          </div>
          <div className="current-price">
            Current Price: {currentPrice}
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${(totalMinted / 45000) * 100}%` }}
            >
              <div className="progress-text">
                {totalMinted.toLocaleString()} / 45,000
              </div>
            </div>
          </div>
        </div>

        <div className="mint-controls">
          {/* LaunchMyNFT embed elements */}
          <div id="mint-button-container"></div>
          <div id="slider-container">
            <span id="mint-slider" style={{ width: '200px' }}></span>
            <span id="mint-slider-amount"></span>
          </div>
          <div id="mint-counter"></div>

          <button className="connect-wallet pulse" onClick={connectWallet}>
            <i className="fas fa-wallet"></i>
            Connect Wallet
          </button>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <h4>🔥 Recent Activity</h4>
          <div className="recent-mints">
            <div className="mint-notification">🎫 Anonymous minted 5 tickets</div>
            <div className="mint-notification">🎫 Anonymous minted 2 tickets</div>
            <div className="mint-notification">🎫 Anonymous minted 10 tickets</div>
          </div>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '15px' }}>
            Live mint activity - join the competition!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MintSection;