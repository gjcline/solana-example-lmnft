import React, { useState, useEffect } from 'react';

const Hero = ({ artist }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 20
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    targetDate.setHours(targetDate.getHours() + 12);
    targetDate.setMinutes(targetDate.getMinutes() + 45);
    targetDate.setSeconds(targetDate.getSeconds() + 20);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <h1 style={{ background: `linear-gradient(45deg, ${artist.color}, #ffaa00)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {artist.name} x CHOPPED
        </h1>
        <p className="artist-description">{artist.description}</p>
        <p>Join {artist.name} in the ultimate survival competition. {artist.allocation.toLocaleString()} exclusive tickets for {artist.name} fans, part of 45,000 total tickets. Only 10 winners will claim the legendary watches worth $50K each.</p>
        
        <div className="game-stats">
          <div className="stat">
            <span className="stat-number" style={{ color: artist.color }}>{artist.allocation.toLocaleString()}</span>
            <span className="stat-label">{artist.name} Allocation</span>
          </div>
          <div className="stat">
            <span className="stat-number">45,000</span>
            <span className="stat-label">Total Collection</span>
          </div>
          <div className="stat">
            <span className="stat-number">10</span>
            <span className="stat-label">Winners</span>
          </div>
          <div className="stat">
            <span className="stat-number">$500K</span>
            <span className="stat-label">Prize Pool</span>
          </div>
        </div>

        {/* Artist Social Proof */}
        <div className="artist-social-proof">
          <p style={{ color: artist.color, fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>
            🔥 {artist.name} fans already minted: {artist.fansMinted.toLocaleString()}
          </p>
          <p style={{ color: '#ccc', fontSize: '1rem' }}>
            Join {artist.name}'s community in the elimination game
          </p>
        </div>

        <div className="countdown pulse">
          <h3>⏰ Elimination Starts In:</h3>
          <div className="timer">
            <div className="timer-unit">
              <span className="timer-number">{timeLeft.days}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-unit">
              <span className="timer-number">{timeLeft.hours}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div className="timer-unit">
              <span className="timer-number">{timeLeft.minutes}</span>
              <span className="timer-label">Minutes</span>
            </div>
            <div className="timer-unit">
              <span className="timer-number">{timeLeft.seconds}</span>
              <span className="timer-label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;