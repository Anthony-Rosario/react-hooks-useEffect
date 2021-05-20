/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Character from '../display/Character';

function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={`${character._id}-${character.name}`}>
          <Character 
            _id={character._id}
            name={character.name}
            image={character.image}
          />
        </li>
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name:PropTypes.string,
      image:PropTypes.string
    })
  ).isRequired,
};

export default CharacterList;
