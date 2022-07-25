import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CV from './assets/CV.pdf'

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
          {/* <a target='_blank' href = {CV}  rel='noreferrer noopener' > */}
          <a href = "CV" onClick={(event) => { event.preventDefault(); window.open(CV); }}>
          Download CV
          </a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
