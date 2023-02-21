import React from 'react';
import './Main.css';
import img1 from '../window.jpg';
import img2 from '../reed-square.jpeg';
import img3 from '../notes.jpeg';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="main">
      <div className="category">
        <Link className="link" to="./about">
          <img className="photo" src={img1} alt="picture of me in front of a window" />
          <h2>About</h2>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="./reeds">
          <img className="photo" src={img2} alt="picture of a beautiful reed" />
          <h2>Reeds</h2>
        </Link>
      </div>
      <div className="category">
        <Link className="link" to="./lessons">
          <img className="photo" src={img3} alt="picture of me in front of a window" />
          <h2>Lessons</h2>
        </Link>
      </div>
    </div>
  );
}
