import '../styles/Home.css';
import React from 'react';
import { db } from '../firebase-config';
import { collection } from 'firebase/firestore';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import ErrorPage from './ErrorPage';
import GameCard from '../Components/GameCard';

export default function Home() {
  const [snapshot, loading, error] = useCollectionOnce(
    collection(db, 'levels')
  );
  return (
    <div id='home' className='p-4 sm:p-16'>
      {error && <ErrorPage />}
      {loading && (
        <span className='text-gray-300 text-9xl text-center'>
          Loading collection...
        </span>
      )}
      {snapshot && (
        <div id='game-selection'>
          {snapshot.docs.map((doc) => (
            <GameCard
              docData={doc.data()}
              docID={doc.id}
              className='h-96 border-main-dark !bg-main font-semibold hover:shadow-main/60 hover:shadow-lg'
              key={doc.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
