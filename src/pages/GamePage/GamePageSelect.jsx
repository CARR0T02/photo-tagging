import '../../styles/GamePageSelect.css';
import React from 'react';

export default function GamePageSelect({ characters, handleClick, position }) {
  console.log(position);
  const [x, y] = position;
  return (
    <div id='select-container' style={{ left: `${x}px`, top: `${y}px` }}>
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
