import React from 'react';

const GameInfo = () => {
  const eliminationRounds = [
    { round: 1, from: 45000, to: 25000, eliminated: 20000 },
    { round: 2, from: 25000, to: 15000, eliminated: 10000 },
    { round: 3, from: 15000, to: 8000, eliminated: 7000 },
    { round: 4, from: 8000, to: 4000, eliminated: 4000 },
    { round: 5, from: 4000, to: 2000, eliminated: 2000 },
    { round: 6, from: 2000, to: 1000, eliminated: 1000 },
    { round: 7, from: 1000, to: 500, eliminated: 500 },
    { round: 8, from: 500, to: 250, eliminated: 250 },
    { round: 9, from: 250, to: 125, eliminated: 125 },
    { round: 10, from: 125, to: 50, eliminated: 75 },
    { round: 11, from: 50, to: 25, eliminated: 25 },
    { round: 12, from: 25, to: 10, eliminated: 15 }
  ];

  return (
    <section className="game-info">
      <div className="container">
        <h2 className="section-title">🎮 THE ELIMINATION GAME</h2>
        
        <div className="game-overview">
          <div className="overview-card">
            <h3>📊 Game Overview</h3>
            <div className="game-flow">
              <div className="flow-item">
                <span className="flow-number">45,000</span>
                <span className="flow-label">Starting Tickets</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <span className="flow-number">12</span>
                <span className="flow-label">Elimination Rounds</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <span className="flow-number">10</span>
                <span className="flow-label">Final Winners</span>
              </div>
            </div>
          </div>

          <div className="overview-card">
            <h3>🏆 Prize Pool</h3>
            <div className="prize-breakdown">
              <div className="prize-item">
                <span className="prize-count">10x</span>
                <span className="prize-desc">Luxury Watches Worth $50K Each</span>
              </div>
              <div className="total-prize">
                <span className="total-amount">$500,000</span>
                <span className="total-label">Total Prize Pool</span>
              </div>
            </div>
          </div>
        </div>

        <div className="elimination-breakdown">
          <h3>⚔️ Elimination Rounds Breakdown</h3>
          <div className="rounds-grid">
            {eliminationRounds.map((round) => (
              <div key={round.round} className="round-card">
                <div className="round-header">
                  <span className="round-number">Round {round.round}</span>
                </div>
                <div className="round-content">
                  <div className="participants">
                    <span className="from">{round.from.toLocaleString()}</span>
                    <span className="arrow">→</span>
                    <span className="to">{round.to.toLocaleString()}</span>
                  </div>
                  <div className="eliminated">
                    -{round.eliminated.toLocaleString()} eliminated
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="prize-showcase">
          <h3>💎 Prize Showcase</h3>
          <div className="prizes-grid">
            <div className="prize-card">
              <div className="prize-image">⌚</div>
              <h4>Rolex Daytona</h4>
              <p>18K Gold, Diamond Bezel</p>
              <span className="prize-value">$50,000</span>
            </div>
            <div className="prize-card">
              <div className="prize-image">⌚</div>
              <h4>Patek Philippe</h4>
              <p>Nautilus Collection</p>
              <span className="prize-value">$50,000</span>
            </div>
            <div className="prize-card">
              <div className="prize-image">⌚</div>
              <h4>Audemars Piguet</h4>
              <p>Royal Oak Offshore</p>
              <span className="prize-value">$50,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInfo;