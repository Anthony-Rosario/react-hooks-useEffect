import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/app/display/CharacterDetail';
import { getCharacterById } from '../services/heyarnoldsApi';

const ListDetailContainer = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [character, setCharacters] = useState({});

  useEffect(() => {
    getCharacterById(match.params._id)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1>
        :
        <CharacterDetail character={character} />
      }
    </div>
  );
};

ListDetailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id:PropTypes.string
    }).isRequired,
  }).isRequired,
};

export default ListDetailContainer;
