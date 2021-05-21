import { useEffect, useState } from 'react';
import { getCharacters } from '../services/heyarnoldsApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);
  return [loading, characters];
};

