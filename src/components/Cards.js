import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItemDemo from './CardItemDemo'



function Cards() {
  return (
    <div className='cards'>
      <h1>Some of my past projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src={require('../images/rugby-thumbnail.JPG')}
              text='Webscraping Rugby Results'
              label='Python'
              docs= '/assets/Rugby-results-docs.pdf'
              git = "https://www.github.com/raeesvds/webscraping-rugby-results"
              />
              <CardItem
              img src={require('../images/book-summary-thumbnail.JPG')}
              text='Generating Book Summaries'
              label='Google Apps Script'
              docs= '/assets/book-summaries-docs.pdf'
              git = "https://www.github.com/raeesvds/apps-script-book-summary-generator"
              />
              <CardItemDemo
              img src={require('../images/ring-sizer.JPG')}
              text='Ring Sizer'
              label='JavaScript'
              git = "https://www.github.com/raeesvds/ring-sizer"
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
