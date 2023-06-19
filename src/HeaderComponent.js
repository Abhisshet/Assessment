import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">PlayerApp</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/add-player">Add Player</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/show-player">Show Player</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderComponent;