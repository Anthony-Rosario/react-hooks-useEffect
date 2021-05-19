import React, { useState, useEffect } from 'react';
import CharacterList from '../components/app/display/CharacterList';
import { getCharacters } from '../services/heyarnoldsApi';

const ListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (

    <CharacterList characters={characters} />

  );
};

export default ListContainer;
