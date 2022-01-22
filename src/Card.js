import React from 'react';

const colors = ['#081580', '#d3d8e4', '#ff779a', '#070707'];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Card = (card) => {
  const { img, author, category, title, text, id } = card;
  console.log(img);
  return (
    <>
      <div className={id % 2 === 1 ? 'item' : 'item item_blue'}>
        <div className='item__category'>category | {category}</div>
        <div
          className='item__img'
          style={{ background: `${getRandomColor()}` }}
        >
          {img ? <img src={img} alt='' className='item__img' /> : ''}
        </div>
        <div className='item__description'>
          <div className='item__author'>{author}</div>
          <div className='item__title'>{title}</div>
          <div className='item__text'>{text}</div>
        </div>
        <button className='item__btn' type='button'>
          Call to action
        </button>
      </div>
    </>
  );
};

export default Card;
