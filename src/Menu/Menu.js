import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li><Link to="/" aria-current="page">Homepage</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* Use <a> for external links instead of <Link> */}
        <li><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
