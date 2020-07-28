import React, { useState } from 'react';
import Window from '../../components/window';

import './project.scss';


interface ContainerProps {
  hideSourceOnDrag: boolean;
}



const onDragover = (e: any) => {
  e.preventDefault();
};
function Project () {
  const [position, setPosition] = useState({
    x: 220,
    y: 220,
  });
  const relative = { ...position };
  const onDrag = (e: any) => {
    
  };
  const onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = 'move'; //移动效果
    e.dataTransfer.setData('text', ''); 
    relative.x = e.clientX - position.x;
    relative.y = e.clientY - position.y;
    console.log('数据', e, relative);
  };
  const onDrop = (e: any) => {
    const { clientX, clientY } = e;
    console.log('放下', e, relative);
    e.preventDefault() || e.stopPropagation();
    setPosition({
      x: clientX - relative.x,
      y: clientY - relative.y,
    });
  };
  return (
    <div className="namespace-project">
      <div className="page">
        <div draggable onDrag={onDrag} onDragOver={onDrop} onDrop={onDrop} onDragStart={onDragStart}>
          <Window title="干" left={position.x} top={position.y}>
            <h3>www</h3>
            {/* <iframe src="https://www.zcool.com.cn/"></iframe> */}
          </Window>
        </div>
      </div>
    </div>
  );
}

export default Project;