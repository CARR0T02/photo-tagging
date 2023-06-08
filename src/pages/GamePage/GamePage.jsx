import '../../styles/GamePage.css';
import React, { useEffect, useState } from 'react';
import ErrorPage from '../ErrorPage';
import { useLocation } from 'react-router-dom';
import { db, storage } from '../../firebase-config';
import { collection } from 'firebase/firestore';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import GamepageSidebar from './GamepageSidebar';
import GamePageSelect from './GamePageSelect';
import { mockArr } from '../../Components/mock/mockCharArray';

export function Component() {
  const { docData, imageURL, docID } = useLocation().state;
  // const [snapshot, loading, error] = useCollectionOnce(
  //   collection(db, 'levels', docID, 'characters')
  // );
  // ! Mocking
  const snapshot = mockArr;
  const loading = false;
  // ! Mocking end
  const [characters, setCharacters] = useState([]);
  const [guessCoords, setGuessCoords] = useState([]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectCoords, setSelectCoords] = useState([0, 0]);

  useEffect(() => {
    if (!loading) {
      // setCharacters(charArrayFromSnapshot(snapshot));
      setCharacters(mockArr);
    }
  }, [loading]);

  function handleGameClick(e) {
    const [relX, relY] = calcRelCoords(e.clientX, e.clientY);
    setGuessCoords([relX, relY]);
    setSelectCoords([e.pageX, e.pageY]);
  }

  return (
    <div id='game-page'>
      <GamePageSelect
        characters={characters}
        handleClick={handleSubmitGuess}
        position={selectCoords}
      />
      <GamepageSidebar characters={characters} loading={loading} />
      <div
        id='image-container'
        className=' flex justify-center'
        onClick={handleGameClick}
      >
        <img
          id='game-image'
          src={imageURL}
          alt={docData?.levelName}
          className='w-full max-w-screen-xl'
        />
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return <ErrorPage />;
}

// ? Move to util folder?
// Finds the coords of click relative to the picture. (0,0) at top left of image (1,1) at bottom right
function calcRelCoords(clientX, clientY) {
  const containerRect = document
    .querySelector('#game-image')
    .getBoundingClientRect();
  let relX = (clientX - containerRect.left) / containerRect.width;
  let relY = (clientY - containerRect.top) / containerRect.height;
  return [relX, relY];
}

function charArrayFromSnapshot(snapshot) {
  const characterArr = snapshot.docs.map((doc) => doc.data());
  // characterArr.forEach((character) => {});
  return characterArr;
}
