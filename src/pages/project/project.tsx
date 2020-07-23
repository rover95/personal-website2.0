import React, { useState } from 'react';
import Window from '../../components/window';

function Project () {
  const [name, setName] = useState();
  return (
    <div>
      什么
      <Window title="asdjhj">
        <div className="h1">标题</div>
        <iframe src="https://www.baidu.com/"></iframe>
      </Window>
    </div>
  );
}

export default Project;