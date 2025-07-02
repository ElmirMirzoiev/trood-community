import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: '#007bff',
  };

  const inactiveStyle = {
    color: '#999',
    cursor: 'default',
    padding: '0.5rem 0',
  };

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      width: '200px',
      height: '100vh',
      borderRight: '1px solid #ccc',
      boxSizing: 'border-box',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{ padding: '0.5rem 0', fontWeight: 'bold' }}>MainPage</div>
      <NavLink
        to="/projects"
        style={({ isActive }) => (isActive ? activeStyle : { padding: '0.5rem 0' })}
      >
        Projects
      </NavLink>
      <NavLink
        to="/vacancies"
        style={({ isActive }) => (isActive ? activeStyle : { padding: '0.5rem 0' })}
      >
        Vacancies
      </NavLink>
      <div style={inactiveStyle}>People</div>
      <div style={inactiveStyle}>Tests</div>
      <div style={inactiveStyle}>Settings</div>
    </nav>
  );
};

export default Navbar;