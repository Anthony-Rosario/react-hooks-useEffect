/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Character from '../display/Character';

function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <Character 
            id={character.id}
            name={character.name}
            image={characters.image}
          />
        </li>
      ))}
    </ul>
  );
}

CharacterList.PropTypes = {
  characters: PropTypes.object.isRequired,
};

export default CharacterList;
