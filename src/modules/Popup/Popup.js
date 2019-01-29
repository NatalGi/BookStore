import React from 'react';
import parseStringToTable from '../../util/parseStringToTable';

import { FiX } from 'react-icons/fi';
import './Popup.scss';

const Popup = ({ message, exitHandler, tabular = false, data = false }) => {
  if(tabular) {
    message = parseStringToTable(message);
  }

  return (
    <div className="Popup">
      <div className="overlay">
        {}
      </div>
      <div className="content">
        <div className="message">
          {message}
          {(data && data.discount && data.discount.length > 0) ? <div className="data discount">Rabat: {data.discount}</div> : ""}
          {(data && data.cartSum) ? <div className="data sum">Razem: {data.cartSum} zł</div> : ""}
        </div>
        <div className="small-btn exit" onClick={() => exitHandler()}>
          {<FiX />}
        </div>
      </div>
    </div>
  );
}

export default Popup;
