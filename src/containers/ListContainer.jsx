import React from 'react';
import CharacterList from '../components/app/display/CharacterList';
import { useCharacters } from '../hooks/useCharacters';

const ListContainer = () => {
  const [loading, characters] = useCharacters();

  return (
    <div>
      {loading ? <h1>Loading...</h1>
        : <CharacterList characters={characters} />
      }
    </div>

  );
};

export default ListContainer;
