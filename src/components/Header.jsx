import React from 'react';

const Header = ({ artist }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo" style={{ color: artist.color }}>
          {artist.name} x CHOPPED
        </div>
        <div className="artist-subtitle">{artist.subtitle}</div>
      </div>
    </header>
  );
};

export default Header;