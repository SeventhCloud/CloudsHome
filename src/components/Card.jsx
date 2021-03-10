/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.scss';

const Card = ({
  imgPath, title, description, buttons,
}) => (
  <div className="card">
    <img className="card-image" src={imgPath} alt="" />
    <div className="card-text">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="card-stats">
      {buttons.map((button) => (
        button
      ))}
    </div>
  </div>
);

Card.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
