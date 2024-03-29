import React, { useState,useEffect } from 'react';
import * as Tone from 'tone';
import img_404 from '../assets/img/404.svg';

import './unmatch.scss';

let noise:any;

// setTimeout(() => {
//   noise.stop();
// }, 3000);

function getTime() {
  const t = new Date();
  return `${completionTime(
    t.getHours()
  )}:${completionTime(t.getMinutes())}:${completionTime(t.getSeconds())}`;
}
function completionTime(str: number) {
  return str<10?'0'+str:str;
}

function Unmatch() {
  const [time, setTime] = useState(getTime());
  
  useEffect(()=>{
    setInterval(() => {
      setTime(getTime());
    }, 1000);
    noise = new Tone.Noise().toDestination().start();
    noise.volume.value = -20;
    noise.type = 'pink';
    return () => {
      noise.stop();
    };
  },[]);
  return (
    <div className="nameplace_404">
      <div className="scanlines"></div>

      <div className="intro-wrap">
        <div className="noise"></div>
        <div className="noise noise-moving"></div>
        <div className="error">ERROR</div>
        <div className="centont" data-splitting>
          <div className="fs100">404</div>
          <div>page not found</div>
        </div>
        <div className="time">{time}</div>
        <a href="/" className="bottomText">back to home</a>
      </div>
    </div>
  );
}

export default Unmatch;