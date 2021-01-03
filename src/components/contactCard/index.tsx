import React, { useState } from 'react';
import { contactIconMap } from '../../common/listMap';

import './index.scss';

function Card({ info, showInfo }: any) {
  return (
    <div className="nameplace_contact">
      <div className="stage">
        <div className="card_container">
          <div className="front side">
            <div className="card_content">
              <div className="title">Contact Information</div>
              <div className="fs30 mt50">Hover me</div>
            </div>
          </div>
          <div className="back side">
            <div className="card_content">
              <div className="title">{info.label}</div>
              <div className="info">{info.value}</div>
              <div className="cells">
                {contactIconMap.map((val) => {
                  return (
                    <div
                      onClick={() => showInfo(val)}
                      className="icon"
                      key={val.value + val.label}
                    >
                      <img src={val.icon} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;