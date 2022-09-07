import React from 'react';
import { Link } from 'react-router-dom';

function CardItemDemo(props) {
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
        <Link to='/ringsizer'>
        View Demo
        </Link>
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

export default CardItemDemo;
