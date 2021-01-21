import React, { useState, useEffect } from 'react';
// @ts-ignore
import Parallax from 'parallax-js';
import Card from '../../components/parallax';

import './photography.scss';


const arr:any[] = [];
for (let i = 1; i < 60; i++) {
  arr.push(i);
}
function Photography () {
  const [showCurrentImg, setShowCurrentImg] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  useEffect(()=>{
    const scene = document.getElementById('scene');
     //@ts-ignore
    const parallax = new Parallax(scene);
    
  },[]);
  function onImgClick(idx: number) {
    setShowCurrentImg(true);
    setCurrentImg(`./static/img/photo/${idx + 1}.jpg`);
  }
  function onImgCoverClick(){
    setShowCurrentImg(false);
  }
  return (
    <div className="nameplace_photography">
      <div className="photo-container">
        {/* <Card image="https://livewallpaperhd.com/wp-content/uploads/2017/07/Dark-Elegant-Wallpaper.jpg"></Card> */}
        <div id="scene" className="photo-scene" data-pointer-events="true" data-x-origin="0.5" data-y-origin="0.5" data-scalar-y="80.0" data-scalar-x="40.0" data-friction-x="0.15" data-friction-y="0.15">
          <div className="layer" data-depth="1">
            <div className="cells">
              {arr.map((val, idx) => {
                return (
                  <div key={idx}>
                    <img
                      // src="https://livewallpaperhd.com/wp-content/uploads/2017/07/Dark-Elegant-Wallpaper.jpg"
                      src={`./static/img/photo/${idx + 1}.jpg`}
                      alt={`img-${idx}`}
                      onClick={() => onImgClick(idx)}
                      className="img-cell"
                      data-idx={idx}
                      // data-depth={val / 100}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {showCurrentImg ? (
        <div className="img-detail" onClick={onImgCoverClick}>
          <img src={currentImg} alt="" />
        </div>
      ) : null}

      {/* <div className="animate__animated animate__backInUp">qweqweasd</div> */}
    </div>
  );
}

export default Photography;