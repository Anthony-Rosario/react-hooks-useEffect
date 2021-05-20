import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterDetail({ character }) {
  return (
    <>
      <Link to={'/'}>Back to the list</Link>
      <figure>
        <img alt={character.name} src={character.image} />
        <figcaption>{character.name} - {character._id} </figcaption>
      </figure>
    </>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};

export default CharacterDetail;
