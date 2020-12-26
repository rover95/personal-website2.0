import React, { useState, ReactElement, useEffect } from 'react';
import Win from '../../components/window';
import Browser from '../../components/browser';

import './project.scss';


interface ContainerProps {
  hideSourceOnDrag: boolean;
}
type Windwo = {
  id: string;
  title:string;
  zIndex: number;
  content?: ReactElement;
  left?:number;
  top?:number;
  height?: number;
  width?: number;
};
type Position = {
  x:number;
  y:number;
};
const windowArr: any[] = [
  {
    id: 'w1',
    title: 'www',
    zIndex: 0,
    url: 'https://www.zcool.com.cn/',
    content: (
      <div style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://github.com/facebook/create-react-app"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    ),
  },
  {
    id: 'w2',
    title: '新建窗口',
    zIndex: 0,
    url:'http://rovelast.com/',
    content: <Browser url="http://rovelast.com/"></Browser>,
    height: 200,
    width: 400,
  },
  {
    id: 'w3',
    title: '隐藏字符加密',
    zIndex: 0,
    url: 'http://zero.rovelast.com/',
    content: <Browser url="http://zero.rovelast.com/"></Browser>,
    height: 600,
    width: 400,
  },
];
function Project () {
  
  const [windows, setWindows] = useState(windowArr);

  function onWindowClick(idx:number){
    const tmp = [...windows];
    tmp.forEach((val,i)=>{
      if(!val){
        return;
      }
      if(i === idx){
        val.zIndex =8;
      }else{
        val.zIndex = 0;
      }
    });
    setWindows(tmp);
  }
  function onWindowClose(idx:number){
    console.log(idx);
    const tmp = [...windows];
    tmp[idx] = null;//为了不变更各页面在数组中的编号, 避免组件重新渲染, 失去内部状态
    setWindows(tmp);
  }
  function onPositionChange(idx:number,e:Position){
    const tmp = [...windows];
    // console.log(e);
    
    tmp[idx].left = e.x;
    tmp[idx].top = e.y;
    setWindows(tmp);
  }
  return (
    <div className="namespace-project">
      <div className="page" id="project_page">
        {windows.map((val, idx) => {
          if(!val){
            return null;
          }
          return (
            <div onMouseDown={() => onWindowClick(idx)} key={val.title + idx}>
              <Win
                parentNodeId="project_page"
                title={val.title}
                id={val.id}
                left={val.left || 0}
                top={val.top || 0}
                height={val.height}
                width={val.width}
                zIndex={val.zIndex}
                onMaximize={()=>{
                 window.open(val.url); 
                }}
                onPositionChange={(e)=>onPositionChange(idx,e)}
                // onMinimize={}
                onClose={()=>onWindowClose(idx)}
              >
                {val.content}
              </Win>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;