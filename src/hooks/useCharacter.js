import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCharacterById } from '../services/heyarnoldsApi';

export const useCharacter = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacters] = useState({});

  useEffect(() => {
    getCharacterById(id)
      .then((character) => setCharacters(character))
      .finally(() => setLoading(false));
  }, []);

  return [loading, character];
};
