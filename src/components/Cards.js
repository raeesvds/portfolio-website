import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import RugbyPDF from './assets/Rugby-results-docs.pdf'
import SummariesPDF from './assets/book-summaries-docs.pdf'



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
              label='Go Stormers'
              docs={RugbyPDF}
              git = "https://www.github.com/raeesvds/webscraping-rugby-results"
              />
              <CardItem
              img src={require('../images/book-summary-thumbnail.JPG')}
              text='Generating Book Summaries'
              label='Google Apps Script'
              docs={SummariesPDF}
              git = "https://www.github.com/raeesvds/apps-script-book-summary-generator"
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
