import React from 'react';
import './Reeds.css';
import img1 from '../standard.jpeg';
import img2 from '../fancy.jpeg';

export default function Reeds() {
  return (
    <>
      <div className="intro">
        <p>
          Why is the bassoon so hard to play? The answer might be in your reeds! Having a good reed
          for the bassoon is a little like cheating. You discover that problems you thought were
          just part of playing the bassoon were really just a product of your reed not allowing you
          to do what you are capable of. My first teacher taught me that at least 50% of playing the
          bassoon is just making reeds. I am here to take care of that 50% for you.
        </p>
      </div>
      <div className="reeds">
        <div className="standard-reed">
          <img className="photo" src={img1} alt="standard reed" />
          <h3>
            Handmade Bassoon Reed <br />
            (Standard)
            <br /> $30.00
          </h3>
        </div>
        <div className="fancy-reed">
          <img className="photo" src={img2} alt="fancy reed" />
          <h3>
            Handmade Bassoon Reed <br />
            (Deluxe Wrap)
            <br />
            $40.00
          </h3>
        </div>
      </div>
    </>
  );
}
