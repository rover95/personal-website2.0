import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Pano from '../../components/panorama';

import './panorama.scss';



function Panorama () {
  const [src, setSrc] = useState(getSrc(2));
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const history = useHistory();
  function getSrc (num:number|string){
    return `../../../static/img/panorama/${num}.jpg`;
  }
  function onBackClick(){
    history.goBack();
  }
  // 监听窗口更新全景图
  const onWindowResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const onPanoItemClick = (val:number)=>{
    setSrc(getSrc(val));
  };
  useEffect(()=>{
    // setTimeout(() => {
    //   setSrc('../../../static/img/panorama/3.jpg');
    // }, 3000);
    window.addEventListener('resize', onWindowResize, false);
  },[]);

  return (
    <div className="nameplace_panorama">
      <div className="pano-box">
        <div className="back-btn" onClick={onBackClick}>返回</div>
        {[1, 2, 3, 4, 5,6,7,8,9].map((val) => {
          return (
            <div className="cell" key={val} onClick={()=>onPanoItemClick(val)}>
              <img src={getSrc(val)} alt="" />
            </div>
          );
        })}
      </div>

      <Pano src={src} width={size.width} height={size.height}></Pano>
    </div>
  );
}

export default Panorama;