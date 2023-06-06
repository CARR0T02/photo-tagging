import '../styles/GameCard.css';
import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ docData, className }) {
  const name = docData.levelName;
  const imageURL = docData.levelURL;
  return (
    <Link to='game' state={{ docData: docData }}>
      <Card key={name} imgSrc={imageURL} className={`${className} `}>
        <h4 className='text-primary text-xl text-center'>{name}</h4>
      </Card>
    </Link>
  );
}
