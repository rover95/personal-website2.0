import React, { FC, useState,useEffect,useRef } from 'react';
import { useComponentWillMount } from '../../hooks';
import './index.scss';

type Props = { 
  title:string; 
  id?: any;
  parentNodeId?: any;
  left: number;
  top: number;
  zIndex?: number;
  width?:number;
  height?:number;
  onClose?:(e:any)=>void;
  onMaximize?:(e:any)=>void;
  onMinimize?:(e:any)=>void;
  onPositionChange?:(e:any)=>void;
  onSizeChange?:(e:any)=>void;
};
const getElementSize = (id: string)=>{
  const bodyElement = document.getElementById(id);
  const bodyWidth = bodyElement && bodyElement.clientWidth;
  const bodyHeight = bodyElement && bodyElement.clientHeight;
  return { bodyWidth, bodyHeight};
};

let moving: boolean = false;
let sizeChanging: boolean = false;
let offsetWidth = document.body.offsetWidth;
let offsetHeight = document.documentElement.clientHeight;

const Win: FC<Props> = ({ title, id, left, top, width, height, zIndex, children, parentNodeId,onPositionChange,onSizeChange, onClose, onMaximize, onMinimize }) => {
  useEffect(()=>{
    if (parentNodeId){
      const { bodyWidth, bodyHeight } = getElementSize(parentNodeId);
      if (bodyWidth && bodyHeight){
        offsetWidth = bodyWidth;
        offsetHeight = bodyHeight;
        console.log(offsetHeight);
      }
    }
  },[]);
  const [cover, setCover] = useState('');
  const [hide, setHide] = useState(false);
  const [position, setPosition] = useState({
    x: left,
    y: top,
  });
  const [size, setSize] = useState({});
  const windowPosition = useRef({
    x: left,
    y: top,
  });
  const { bodyWidth, bodyHeight } = getElementSize(id);
  const windowSize = useRef({
    w: width || bodyWidth ,
    h: height || bodyHeight
  });
  const relativePosition = { ...position };
  const onMouseUp = (e: any) => {
    moving = false;
    sizeChanging = false;
    setCover('');
  };
  const onDrop = (e: any) => {
    if (!moving) {
      return;
    }
    let { x, y } = windowPosition.current;
    const { clientX, clientY } = e;
    e.preventDefault() || e.stopPropagation();
    x = clientX - relativePosition.x;
    y = clientY - relativePosition.y;

    if (x < 0) x=0;
    if (y<0) y=0;
    if (x >offsetWidth-30){
      x = offsetWidth-30;
    }
    if (y > offsetHeight - 30) {
      y = offsetHeight - 30;
    }
    windowPosition.current={x,y};
    setPosition({ x, y});
    // onPositionChange!({x,y});
  };
  const onSizeChanging = (e: any, direction?:string) =>{
    if (!sizeChanging) {
      return;
    }
    const { x, y } = windowPosition.current;
    let { w, h } = windowSize.current;

    if (direction ==='width'){
      w = e.clientX - x - 18;
    } else if (direction === 'height'){
      h = e.clientY - y - 92;
    }else{
      w = e.clientX - x - 18;
      h = e.clientY - y - 92;
    }
    if(w&&w<100)w=100;
    if (h &&h<100)h=100;
    windowSize.current={
      w,h
    };
    setSize({});
  };
  const onPositionMouseDown = (e: any) => {
    moving = true;
    relativePosition.x = e.clientX - position.x;
    relativePosition.y = e.clientY - position.y;
    document.onmousemove = onDrop;
    document.onmouseup = onMouseUp;
  };
  const onSizeMouseDown = (e: any, direction?: string) => {
    sizeChanging = true;
    document.onmousemove = (e)=>onSizeChanging(e,direction);
    document.onmouseup = onMouseUp;
    setCover(direction ? direction:'both');
  };
  const { w , h  } = windowSize.current;
  const { x, y} = windowPosition.current;
  return (
    <div
      className="namespace-98 namespace-modal pos-ab"
      style={{ left:x, top:y,  zIndex: zIndex || 'auto',display:hide?'none':'block' }}
    >
      <div className="window-container" >
        <div className="window">
          <div className="title-bar" onMouseDown={onPositionMouseDown}>
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={onMinimize}></button>
              <button aria-label="Maximize" onClick={onMaximize}></button>
              <button aria-label="Close" onClick={(e)=>{onClose!(e);}}></button>
            </div>
          </div>
          <div className="window-body window-body-box" id={id} style={{ width: w || 'auto', height: h || 'auto' }}>{children}</div>
        </div>
        <div className={cover ==='width' ? 'size-contrl-r cover' :'size-contrl-r'} onMouseDown={(e)=>onSizeMouseDown(e,'width')}></div>
        <div className={cover ==='height' ? 'size-contrl-b cover' : 'size-contrl-b'} onMouseDown={(e) => onSizeMouseDown(e, 'height')}></div>
        <div className={cover ==='both'? 'size-contrl cover' : 'size-contrl '} onMouseDown={onSizeMouseDown}></div>
      </div>
    </div>
  );
};

export default Win;