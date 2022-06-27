import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import PDF from '../CV.pdf'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
       {/* <img src='/src/images/programming-concept_82472-703.webp' /> */}
      {/* <h1>Hi, Thanks for coming</h1>
      <p>Have a look at what I do</p> */}
      <br></br>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--test'
          buttonSize='btn--large'
        >
          <a href={PDF} target='_blank' rel="noopener noreferrer" exact path = "CV">
          Download CV
          </a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
