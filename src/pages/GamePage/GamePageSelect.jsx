import '../../styles/GamePageSelect.css';
import React from 'react';

export default function GamePageSelect({ characters, handleClick }) {
  return (
    <div id='select-container'>
      {characters.map((character) => (
        <button
          onClick={() => {
            handleClick(character.name);
          }}
        >
          {character.name}
        </button>
      ))}
    </div>
  );
}
