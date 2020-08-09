import React, { useState, ReactElement } from 'react';
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
  height?: number;
  width?: number;
};

function Project () {
  const windowArr: Windwo[] = [
    {
      id: 'w1',
      title: 'www',
      zIndex: 0,
      content: (
        <div style={{ width: '100%', height: '100%'}}>
          <iframe
            src="https://www.zcool.com.cn/"
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      ),
    },
    {
      id: 'w2',
      title: '新建窗口',
      zIndex: 0,
      content: <div>asdqwe</div>,
      height: 200,
      width: 400,
    },
    {
      id: 'w3',
      title: 'IE 5.0 浏览器',
      zIndex: 0,
      content: <Browser></Browser>,
      height: 200,
      width: 400,
    },
  ];
  const [windows, setWindows] = useState(windowArr);

  
  function onWindowClick(idx:number){
    const tmp = [...windows];
    tmp.forEach((val,i)=>{
      if(i === idx){
        val.zIndex =8;
      }else{
        val.zIndex = 0;
      }
    });
    setWindows(tmp);
  }
  
  return (
    <div className="namespace-project">
      <div className="page" id="project_page">
        {windows.map((val, idx) => {
          return (
            <div onMouseDown={() => onWindowClick(idx)} key={val.title + idx}>
              <Win
                parentNodeId="project_page"
                title={val.title}
                id={val.id}
                left={Math.random() * 600}
                top={Math.random() * 300}
                height={val.height}
                width={val.width}
                zIndex={val.zIndex}
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