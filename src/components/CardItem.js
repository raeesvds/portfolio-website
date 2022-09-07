import React from 'react';

function CardItem(props) {
 
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          <a href={process.env.PUBLIC_URL + props.docs}   target="_blank" rel="noopener noreferrer">
          View Docs
          </a>
          <br></br>
          <a href={props.git} target='_blank' rel="noopener noreferrer">
          View Source Code
          </a>
          </div>
        </div>
      </li>
    </>
    
  );
}


export default CardItem;
