import React, { useState, useEffect } from 'react';

import Pano from '../../components/panorama';

import './panorama.scss';

function Panorama () {
  const [src, setSrc] = useState('../../../static/img/panorama/2.jpg');
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  // 监听窗口更新全景图
  const onWindowResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(()=>{
    // setTimeout(() => {
    //   setSrc('../../../static/img/panorama/3.jpg');
    // }, 3000);
    window.addEventListener('resize', onWindowResize, false);
  },[]);

  return (
    <div className="nameplace_panorama">
      <Pano src={src} width={size.width} height={size.height}></Pano>
    </div>
  );
}

export default Panorama;