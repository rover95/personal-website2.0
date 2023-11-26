import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Pano from '../../components/panorama';
import { imgBaseUrl } from '../../config';

import './panorama.scss';

const photoArr = Array.from({length: 15}, (_, i) => i + 1);

function Panorama () {
  const [src, setSrc] = useState(getSrc(2));
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const history = useHistory();
  function getSrc (num:number|string, url?:string){
    return `${url || imgBaseUrl}/panorama/${num}.jpg`;
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
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
    };
  },[]);

  return (
    <div className="nameplace_panorama">
      <div className="pano-box">
        <div className="back-btn" onClick={onBackClick}>返回</div>
        {photoArr.map((val) => {
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