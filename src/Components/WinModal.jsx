import '../styles/WinModal.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WinModal({ hasWon }) {
  useEffect(() => {
    let s = document.querySelector('#win-modal');
    if (hasWon) {
      s.showModal();
    }
    return () => {
      s.close();
    };
  }, [hasWon]);
  return (
    <dialog
      id='win-modal'
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
        }
      }}
      className='rounded-md'
    >
      <div className='grid justify-items-center gap-2'>
        <p>Congratulations on completing the level!</p>
        <p className='bg-primary max-w-fit p-2 rounded-lg '>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </dialog>
  );
}
