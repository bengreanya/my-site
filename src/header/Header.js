import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="links">
        <Link to="./reeds">Reeds</Link>
        <Link to="./lessons">Lessons</Link>
      </div>
      <div className="title">
        <h1>Ben Greanya</h1>
      </div>
    </div>
  );
}
