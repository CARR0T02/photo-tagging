import '../styles/GameCard.css';
import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { ref as storageRef } from 'firebase/storage';
import { storage } from '../firebase-config';

export default function GameCard({ docData, docID, className }) {
  // const [imageURL] = useDownloadURL(storageRef(storage, docData.levelURL));
  const name = docData.levelName;
  const imageURL = docData.levelURL;
  return (
    <Link to='game' state={{ imageURL, docData, docID }}>
      <Card key={name} imgSrc={imageURL} className={`${className} `}>
        <h4 className='text-primary text-xl text-center'>{name}</h4>
      </Card>
    </Link>
  );
}
