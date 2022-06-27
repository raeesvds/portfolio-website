import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import RugbyPDF from '../Rugby-results-docs.pdf'



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
              git = "https://www.github.com/raeesvds/portfolio-website"
              />
  
          
            {/* path='/services'
            AllPagesPDFViewer pdf={RugbyPDF}  */}



            {/* <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up' */
            /* /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
