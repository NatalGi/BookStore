import React from 'react';

import { FiX } from 'react-icons/fi';
import './Popup.scss';

const Popup = ({ message, exitHandler }) => {
  return (
    <div className="Popup">
      <div className="overlay">
        {}
      </div>
      <div className="content">
        <div className="message">
          {message}
        </div>
        <div className="small-btn exit" onClick={() => exitHandler()}>
          {<FiX />}
        </div>
      </div>
    </div>
  );
}

export default Popup;
