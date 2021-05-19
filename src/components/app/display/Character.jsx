/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ id, name, image }) {
  return (
    <>
      <Link key={`${id}-${name}`}>
        <figure>
          <img alt={name} src={image} />
          <p>{id}</p>
          <figcaption>{name}</figcaption>
        </figure>
      </Link>
    </>
  );
}

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;

