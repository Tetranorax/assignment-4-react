import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Hello there.</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;