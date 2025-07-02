import React from 'react';

const Header = () => {
  return (
    <header style={{
      height: '60px',
      borderBottom: '1px solid #ccc',
      padding: '0 1rem',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Trood Community</h1>
    </header>
  );
};

export default Header;