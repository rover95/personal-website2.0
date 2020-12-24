import React, { useState } from 'react';
import { contactIconMap } from '../../common/listMap';


import './introduction.scss';


function Introduction () {
  const [info, setInfo] = useState(contactIconMap[3]);
  function showInfo(val:any) {
    if (val.url) {
      window.open(val.url);
    } else {
      setInfo(val);
    }
  }
  return (
    <div className="introduction">
      <div className="container">
        <div>1</div>
        {/* <img
          className="img_bg"
          src="https://raw.githubusercontent.com/rover95/image/master/img/20201220173825.png"
          alt=""
        /> */}
      </div>
      <div className="stage">
        <div className="card_container">
          <div className="front side">
            <div className="content">
              <div className="title">Contact Information</div>
              <div className="fs30 mt50">Hover me</div>
            </div>
          </div>
          <div className="back side">
            <div className="content">
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

export default Introduction;