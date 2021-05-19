import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterDetail({ character: {id, name, image } }) {
  return (
    <>
      <Link to={'/'}>Back to the list</Link>
      <ul>
        <li aria-label="character detail">
          <img alt={name} src={image} />
          <p display="none">{id}</p>
          <p>{name}</p>
        </li>
      </ul>
    </>
  );
}

CharacterDetail.PropTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetail;
