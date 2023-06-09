import React, { useEffect, useState } from 'react';
import { storage } from '../../firebase-config';
import { Sidebar, Spinner } from 'flowbite-react';
import { getDownloadURL, ref } from 'firebase/storage';

export default function GamepageSidebar({ loading, charactersData }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchDownloadURLs(charactersData);
  }, [charactersData]);

  // Maps imageURLs to download URLs for cloud storage.
  const fetchDownloadURLs = async (characters) => {
    let newCharArr = [];
    for (let character of characters) {
      try {
        let downloadURL = await getDownloadURL(
          ref(storage, character.imageURL)
        );
        newCharArr.push({ ...character, imageURL: downloadURL });
      } catch (e) {
        console.log('Error in fetching download URL:' + e);
      }
    }
    setCharacters(newCharArr);
  };

  return (
    <div id='sidebar-container' className='fixed flex h-full'>
      <Sidebar
        className={`sidebar
        ${isSideBarOpen ? '' : 'none'} `}
      >
        <span>To Find:</span>
        {loading && <Spinner aria-label='Loading character data' size='xl' />}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {!loading &&
              characters.map((character) => (
                <Sidebar.Item className='flex' key={character.name}>
                  {charactersData.length !== characters.length ? (
                    <Spinner aria-label='Loading character image' size='xl' />
                  ) : (
                    <img src={character.imageURL} alt='' />
                  )}
                  <span>{character.name}</span>
                </Sidebar.Item>
              ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsSideBarOpen(!isSideBarOpen);
        }}
        className='sticky top-1/2 text-3xl sm:text-5xl text-primary hover:text-orange-500'
      >
        {isSideBarOpen ? '<' : '>'}
      </button>
    </div>
  );
}
