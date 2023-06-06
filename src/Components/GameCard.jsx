import '../styles/GameCard.css';
import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ docData }) {
  const name = docData.levelName;
  const imageURL = docData.levelURL;
  return (
    <Link to='game' state={{ docData: docData }}>
      <Card key={name} imgSrc={imageURL} className='h-96'>
        <h4 className='text-xl text-center'>{name}</h4>
      </Card>
    </Link>
  );
}
