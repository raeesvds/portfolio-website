import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <br></br>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--test'
          buttonSize='btn--large'
        >
          <a href = {process.env.PUBLIC_URL + "/assets/CV Ra'ees VD Schyff.pdf"} target = "_blank" rel="noopener noreferrer">
          Download CV
          </a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
