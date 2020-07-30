import React, { useState } from 'react';
import Window from '../../components/window';

import './project.scss';


interface ContainerProps {
  hideSourceOnDrag: boolean;
}

function Project () {
  const [position, setPosition] = useState({
    x:50,
    y:150,
  });
  
  return (
    <div className="namespace-project">
      <div className="page">
        <div>
          <Window title="站酷" left={position.x} top={position.y}>
            <iframe src="https://www.zcool.com.cn/"></iframe>
          </Window>
          <Window title="新建窗口WWW" left={90} top={90}>
            <h1>www.asdwe.com</h1>
          </Window>
        </div>
      </div>
    </div>
  );
}

export default Project;