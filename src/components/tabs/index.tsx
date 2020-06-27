import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './index.scss'

function Tabs () {
  const [name, setName] = useState('1')
  const [menu] = useState([
    {
      label: "首页",
      url: "/",
    },
    {
      label: "介绍",
      url: "",
    },
    {
      label: "摄影",
      url: "/photography",
    },
    {
      label: "足迹",
      url: "",
    },
  ]);
  return (
    <div className='row'>
      {menu.map(val=>{
        return (
          <Link className='link' to={val.url}>
            <div key={val.label} className="cell">
              {val.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Tabs;