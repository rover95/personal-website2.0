import React, { useState } from 'react';

import './index.scss'

function Tabs () {
  const [name, setName] = useState('1')
  const [menu] = useState([
    {
      label: "首页",
      url: "",
    },
    {
      label: "介绍",
      url: "",
    },
    {
      label: "摄影",
      url: "",
    },
    {
      label: "足迹",
      url: "",
    },
  ]);
  return (
    <div className='row'>
      {menu.map(val=>{
        return <div className="cell">
          {val.label}
        </div>;
      })}
    </div>
  );
}

export default Tabs;