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
import Notifications from './Notifications';
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
  const [toastList, setToastList] = useState([]);
  const [autoDeleteInterval, setautoDeleteInterval] = useState(3000);

  useEffect(() => {
    if (!loading) {
      // setCharacters(charArrayFromSnapshot(snapshot));
      setCharacters(mockArr);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (isSelectOpen) {
            setIsSelectOpen(false);
          }
        }
      });
    }
  }, [loading]);

  function handleGameClick(e) {
    if (isSelectOpen) {
      setIsSelectOpen(false);
      return;
    }
    setIsSelectOpen(true);
    const [relX, relY] = calcRelCoords(e.clientX, e.clientY);
    setGuessCoords([relX, relY]);
    setSelectCoords([e.pageX, e.pageY]);
  }

  // Handles submit from select bar.
  function handleSubmitGuess(characterName) {
    setIsSelectOpen(false);
    const [relX, relY] = guessCoords;
    let character;
    for (const char of characters) {
      if (char.name !== characterName) {
        continue;
      }
      character = char;
    }
    if (checkGuess(relX, relY, character)) {
      removeChar(character);
      setToastList([...toastList, createToastObj(true, character.name)]);
    } else {
      setToastList([...toastList, createToastObj(false)]);
    }
  }

  function removeChar(character) {
    setCharacters(characters.filter((char) => char !== character));
  }

  return (
    <div id='game-page'>
      <GamePageSelect
        characters={characters}
        handleClick={handleSubmitGuess}
        position={selectCoords}
        visible={isSelectOpen}
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
      <Notifications
        toastList={toastList}
        autoDeleteInterval={autoDeleteInterval}
      />
    </div>
  );
}

export function ErrorBoundary() {
  return <ErrorPage />;
}

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

// Checks if coords given match those in database, given some freedom (delta) in guess.
function checkGuess(relX, relY, character) {
  const delta = 0.05;
  const [characterX, characterY] = character.coords;
  if (
    characterX + delta > relX &&
    characterX - delta < relX &&
    characterY + delta > relY &&
    characterY - delta < relY
  ) {
    return true;
  }
  return false;
}

function createToastObj(isCorrect, name = undefined) {
  return {
    isCorrect,
    name,
  };
}
