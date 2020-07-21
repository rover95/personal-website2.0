import React, { useState } from 'react';

import './index.scss';

function Modal () {
  const [name, setName] = useState();
  return (
    <div className="namespace-98 namespace-modal">
      <div className="modal-box">
        <div className="window" style={{ width: 300 }}>
          <div className="title-bar">
            <div className="title-bar-text">{'title' }</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close">2</button>
            </div>
          </div>
          <div className="window-body">
            <p>There's so much room for activities!!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;