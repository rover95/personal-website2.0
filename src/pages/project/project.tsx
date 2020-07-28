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
  let moving = false;
  const onMouseDown = (e: any) => {
    moving = true;
    relative.x = e.clientX - position.x;
    relative.y = e.clientY - position.y;
    
  };
  const onMouseUp = (e: any) => {
    moving = false;
    console.log('UP', e);
  };
  const onDrop = (e: any) => {
    if(!moving){
      return;
    }
    console.log(e);
    const { clientX, clientY } = e;
    e.preventDefault() || e.stopPropagation();
    setPosition({
      x: clientX - relative.x,
      y: clientY - relative.y,
    });
  };
  return (
    <div className="namespace-project">
      <div className="page" onMouseMove={onDrop} onMouseUp={onMouseUp}>
        <div onMouseDown={onMouseDown}>
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