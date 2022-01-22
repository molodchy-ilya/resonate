import React from 'react';
import { data } from './data';
import { useState, useEffect } from 'react';
import Card from './Card';

const Content = () => {
  const [cards, setCards] = useState(data);
  console.log(cards);
  return (
    <>
      <main className='item-container'>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </main>
    </>
  );
};

export default Content;
