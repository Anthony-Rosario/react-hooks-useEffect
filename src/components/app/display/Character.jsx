/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ _id, name, image }) {
  return (

    <Link key={`${_id}-${image}`} to={`/${_id}`}>
      <figure>
        <img alt={name} src={image} />
        <figcaption>{name} - {_id} </figcaption>
      </figure>
    </Link>
  );
}

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;

