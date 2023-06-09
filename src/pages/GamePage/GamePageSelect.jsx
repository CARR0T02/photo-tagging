import '../../styles/GamePageSelect.css';
import React from 'react';

export default function GamePageSelect({
  characters,
  handleClick,
  position,
  visible,
}) {
  const [x, y] = position;
  if (visible) {
    return (
      <div
        id='select-container'
        style={{ left: `${x}px`, top: `${y}px` }}
        className='sm:text-base text-xs'
      >
        {characters.map((character) => (
          <button
            onClick={() => {
              handleClick(character.name);
            }}
            key={character.name}
          >
            {character.name}
          </button>
        ))}
      </div>
    );
  } else {
    return;
  }
}
