import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="links">
        <Link className="link" to="./reeds">
          Reeds
        </Link>
        <Link className="link" to="./lessons">
          Lessons
        </Link>
        <Link className="link" to="./about">
          About
        </Link>
        <Link className="link" to="./main">
          Home
        </Link>
      </div>
      <div className="title">
        <h1>Ben Greanya</h1>
      </div>
      <div className="hidden"></div>
    </div>
  );
}
