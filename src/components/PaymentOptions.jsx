import React, { useState } from 'react';

const PaymentOptions = ({ artist }) => {
  const [activeTab, setActiveTab] = useState('crypto');

  return (
    <section className="payment-section">
      <div className="container">
        <h2 className="section-title" style={{ background: `linear-gradient(45deg, ${artist.color}, #ffaa00)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          💳 {artist.name} PAYMENT OPTIONS
        </h2>
        
        <div className="payment-tabs">
          <button 
            className={`tab-button ${activeTab === 'crypto' ? 'active' : ''}`}
            style={activeTab === 'crypto' ? { background: `linear-gradient(135deg, ${artist.color}, #ffaa00)` } : {}}
            onClick={() => setActiveTab('crypto')}
          >
            💎 Pay with Crypto
          </button>
          <button 
            className={`tab-button ${activeTab === 'card' ? 'active' : ''}`}
            style={activeTab === 'card' ? { background: `linear-gradient(135deg, ${artist.color}, #ffaa00)` } : {}}
            onClick={() => setActiveTab('card')}
          >
            💳 Pay with Card
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'crypto' && (
            <div className="crypto-tab">
              <h3>🚀 Fastest Way to Mint</h3>
              <p>Already have SOL? Connect your wallet and mint {artist.name} tickets instantly!</p>
              <div className="crypto-features">
                <div className="feature">
                  <i className="fas fa-bolt"></i>
                  <span>Instant minting</span>
                </div>
                <div className="feature">
                  <i className="fas fa-shield-alt"></i>
                  <span>Secure & decentralized</span>
                </div>
                <div className="feature">
                  <i className="fas fa-coins"></i>
                  <span>Support {artist.name} directly</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'card' && (
            <div className="card-tab">
              <h3>💳 Don't Have SOL? No Problem!</h3>
              <p>Buy SOL instantly with your credit card and mint {artist.name} tickets</p>
              
              <div className="credit-card-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Buy SOL with Credit Card</h4>
                    <p>Use MoonPay below to purchase SOL instantly</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Connect Your Wallet</h4>
                    <p>Download Phantom or Solflare wallet (free)</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Mint {artist.name} Tickets</h4>
                    <p>Use your SOL to mint exclusive {artist.name} tickets above</p>
                  </div>
                </div>
              </div>

              <div className="moonpay-container">
                <iframe
                  src={`https://buy.moonpay.com?apiKey=pk_live_xNzApwAcky9uMQx6xcXjxe9hwlYMmQ&currencyCode=sol&baseCurrencyAmount=50&baseCurrencyCode=usd&colorCode=${encodeURIComponent(artist.color)}&showWalletAddressForm=true`}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allow="accelerometer; autoplay; camera; gyroscope; payment"
                  title="MoonPay Widget"
                />
              </div>

              <div className="tooltip-info">
                <i className="fas fa-info-circle"></i>
                <span>This process takes 2-5 minutes and allows {artist.name} fans to participate even without existing crypto.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;