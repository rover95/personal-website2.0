import React, { useState, FC } from 'react';
import './index.scss';

type Props = { 
  title:string; 
  id?: any;
  left?: number;
  top?: number;
};

const Window: FC<Props> = ({ title, id, left, top, children }) => {
  const [name, setName] = useState();
  
  return (
    <div
      className="namespace-98 namespace-modal pos-ab"
      draggable
      style={{ left, top }}
    >
      <div className="modal-box">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Window;