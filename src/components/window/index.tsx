import React, { useState,useEffect, FC } from 'react';
import { useComponentWillMount } from '../../hooks';
import './index.scss';

type Props = { 
  title:string; 
  id?: any;
  left: number;
  top: number;
};

let moving: boolean = false;
let x: number = 0;
let y: number = 0;
const width = document.body.offsetWidth;
const height = document.documentElement.clientHeight;
console.log(width, height, document.body);

const Window: FC<Props> = ({ title, id, left, top, children }) => {
  const [position, setPosition] = useState({
    x: left,
    y: top,
  });
  useComponentWillMount(()=>{
      x = left;
      y = top;
  });
  // useEffect(() => {
  //   x = left;
  //   y = top;
  //   setPosition({
  //     x,
  //     y,
  //   });
  //   return ()=>{
      
  //   };
  // }, []);
  const relative = { ...position };
  const onMouseUp = (e: any) => {
    moving = false;
  };
  const onDrop = (e: any) => {
    if (!moving) {
      return;
    }
    const { clientX, clientY } = e;
    e.preventDefault() || e.stopPropagation();
    x = clientX - relative.x;
    y = clientY - relative.y;

    if(x<0) x=0;
    if(y<0) y=0;
    if(x>width-30){
      x = width-30;
    }
    if (y > height - 30) {
      y = height - 30;
    }
    setPosition({x,y});
  };
  const onMouseDown = (e: any) => {
    moving = true;
    relative.x = e.clientX - position.x;
    relative.y = e.clientY - position.y;
    document.onmousemove = onDrop;
    document.onmouseup = onMouseUp;
  };
  return (
    <div
      className="namespace-98 namespace-modal pos-ab"
      style={{ left:x, top:y }}
    >
      <div className="modal-box">
        <div className="window">
          <div className="title-bar" onMouseDown={onMouseDown}>
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