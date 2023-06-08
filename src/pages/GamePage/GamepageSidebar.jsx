import React, { useState } from 'react';
import { Sidebar, Spinner } from 'flowbite-react';

export default function GamepageSidebar({ loading, characters }) {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  return (
    <div id='sidebar-container' className='fixed flex h-full'>
      <Sidebar
        className={`sidebar
        ${isSideBarOpen ? '' : 'none'} `}
      >
        {loading && <Spinner aria-label='Loading character data' size='xl' />}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {!loading &&
              characters.map((character) => (
                <Sidebar.Item className='flex'>
                  <img src={character.imageURL} alt='' className='char-img' />
                  <span>{character.name}</span>
                </Sidebar.Item>
              ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <button
        onClick={(e) => {
          e.preventDefault();
          setisSideBarOpen(!isSideBarOpen);
        }}
        className='sticky top-1/2 text-3xl sm:text-5xl text-primary hover:text-orange-500'
      >
        {isSideBarOpen ? '<' : '>'}
      </button>
    </div>
  );
}
