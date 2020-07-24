import React, { useState } from 'react';
import Window from '../../components/window';

import './project.scss';


interface ContainerProps {
  hideSourceOnDrag: boolean;
}
const ondrag = (e: any) => {
  console.log(e);
};
function Project () {
  
  return (
    <div className="namespace-project">
      <div className="page" onDrag={ondrag}>
        <Window title="干">
          <iframe src="https://www.zcool.com.cn/"></iframe>
        </Window>
      </div>
    </div>
  );
}

export default Project;