import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";

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
      url: "/introduction",
    },
    {
      label: "摄影",
      url: "/photography",
    },
    {
      label: "足迹",
      url: "/footmark",
    },
  ]);
  return (
    <div className='row'>
      {menu.map((val,idx)=>{
        return (
          <Link key={val.label+idx} className="link" to={val.url}>
            <div className="cell">{val.label}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default withRouter(Tabs);