import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
`
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <a href={props.docs} target='_blank' rel="noopener noreferrer">
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
