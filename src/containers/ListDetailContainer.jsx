import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/app/display/CharacterDetail';
import { getCharacterById } from '../services/heyarnoldsApi';

const ListDetailContainer = () => {
  const { _id } = props.match.params;
  const [loading, setLoading] = useState(false);
  const [character, setCharacters] = useState([]);

  useEffect(() => {
    getCharacterById(id)
      .then(setCharacters)
      .finally(() => setLoading(false));
  });
  
  return (
    <div>
      
    </div>
  );
}


export default ListDetailContainer;

