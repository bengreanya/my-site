import React from 'react';
import './About.css';
import img from '../resize.jpeg';

export default function About() {
  return (
    <div className="about">
      {/* <div className="image-frame"> */}
      <img id="tree-photo" src={img} alt="picture of me in front of a tree" />
      {/* </div> */}
      <p className="bio">
        Ben Greanya joined the Eugene Symphony as Principal Bassoon in 2020. Before moving to the
        Pacific Northwest he lived in Maryland, where he met his wife, Dana Rokosny. Ben enjoyed a
        diverse free-lance career there, while serving as Principal Bassoon with the Annapolis
        Symphony and Assistant Professor of Bassoon at Gettysburg College. Additionally, he was an
        instructor at the DC Youth Orchestra Program and the Jim Henson Academy for Visual and
        Performing Arts. Ben has performed as a guest with the Baltimore and National Symphonies, as
        well as the Washington National Opera. Since moving to Oregon, he has had the pleasure of
        performing with the Oregon Symphony, Oregon Ballet Theatre, and the Portland Opera. Ben is a
        member of the Inscape Chamber Orchestra, a Washington DC based contemporary ensemble which
        has four recordings under the Sono Luminus label, including the Grammy-nominated album,
        Sprung Rhythm. An active chamber musician, he has performed at Jackson Hole Chamber Music
        and the Pikes Falls Chamber Music festival in Jamaica, Vermont. Originally from Michigan,
        Ben began playing the bassoon in the public school music program in 6th grade. While in high
        school, he had the incredible fortune of studying with Robert Williams, Principal Bassoon of
        the Detroit Symphony. He received a Bachelors Degree in Music at the University Michigan,
        studying with Richard Beene, and Masters Degree from the New England Conservatory of Music,
        where he studied with Richard Svoboda, Principal Bassoon of the Boston Symphony.
      </p>
    </div>
  );
}
