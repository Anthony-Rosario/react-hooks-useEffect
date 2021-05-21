/* eslint-disable react/prop-types */
import React from 'react';
import CharacterDetail from '../components/app/display/CharacterDetail';
import { useCharacter } from '../hooks/useCharacter';

const ListDetailContainer = () => {
  const [loading, character] = useCharacter();

  return (
    <div>
      {loading ? <h1>Loading...</h1>
        :
        <CharacterDetail character={character} />
      }
    </div>
  );
};

export default ListDetailContainer;
