/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const CardButton = ({ link, children }) => {
  const openPage = () => window.open(link, '_blank', 'noopener,noreferrer');
  return (
    <button type="button" className="stat" onClick={openPage}>{children}</button>
  );
};

export default CardButton;
