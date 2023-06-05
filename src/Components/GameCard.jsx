import '../styles/GameCard.css';
import { Card } from 'flowbite-react';
import React from 'react';
import imageURL from './mock/mockAssets/pierre-roussel-dreamcast-phone2-min.jpg';

export default function GameCard({ docData }) {
  const name = docData.levelName;
  // const imageURL = docData.levelURL;
  return (
    <Card imgSrc={imageURL} className='h-96'>
      <h4 className='text-xl text-center'>{name}</h4>
    </Card>
  );
}
