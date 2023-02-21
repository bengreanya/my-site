import './Lessons.css';
import React from 'react';
import img from '../dark.jpg';
export default function Lessons() {
  return (
    <div className="lessons">
      <img id="dark-photo" src={img} alt="picture of me in front of a window" />
      <p>
        I have been playing the bassoon professionally for over 20 years. Sharing the things I have
        learned is one of the great joys I have found in music and in life. My emphasis in teaching
        is on cultivating good habits. By that, I mean using time efficiently, making sure to build
        on success and not frustration, and organizing music into small, achievable parts. We each
        learn in unique ways and discovering what works best for you is key to unlocking your
        capabilities on the bassoon and in music. Please send me an email to inquire about lessons!
        <br />
        <br />
        <br />
        Email
        <br />
        bengreanya@gmail.com
      </p>
    </div>
  );
}
