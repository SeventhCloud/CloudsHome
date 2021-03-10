/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React from 'react';
import './styles/Dialog.scss';

const Dialog = ({ toggleModal, children }) => (
    <div className="backdrop">
        <div className="modal">
            <button type="button" className="close" onClick={toggleModal}>Close</button>
            {children}
        </div>
    </div>
);

export default Dialog;
