import '../styles/Home.css';
import React from 'react';
import { db } from '../firebase-config';
import { collection } from 'firebase/firestore';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import ErrorPage from './ErrorPage';
import GameCard from './GameCard';
import { mockSnapshot as snapshot } from './mock/mockSnapshot.js';

export default function Home() {
  // const [snapshot, loading, error] = useCollectionOnce(
  //   collection(db, 'levels')
  // );

  return (
    <div className='home p-16 bg-zinc-800'>
      {/* {error && <ErrorPage />}
      {loading && <span>Collection: Loading...</span>} */}
      {snapshot && (
        <div id='game-selection'>
          {snapshot.docs.map((doc) => (
            <GameCard docData={doc.data()} />
          ))}
        </div>
      )}
    </div>
  );
}
