import React from 'react';
import PropTypes from 'prop-types';
import Character from '../display/Character';

function CharacterList({ characters }) {
  return (
    <ul>
      {characters.map((character) => {
        <li>
          <Character 
            id={character.id}
            name={character.name}
            image={character.image}
          />
        </li>;
      })}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string, 
      image: PropTypes.string,
    })
  ).isRequired,
};

export default CharacterList;
