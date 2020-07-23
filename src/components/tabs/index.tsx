import React, { useState } from 'react';
import { Link, useParams, useLocation, useHistory } from 'react-router-dom';

import './index.scss';

function Tabs () {
  const location = useLocation();
  
  const [menu] = useState([
    {
      label: '首页',
      url: '/',
    },
    {
      label: '介绍',
      url: '/introduction',
    },
    {
      label: '摄影',
      url: '/photography',
    },
    {
      label: '足迹',
      url: '/footmark',
    },
    {
      label: '项目',
      url: '/project',
    },
  ]);
  const currentIdx = menu.findIndex((val) => (val.url.match(location.pathname))); 
  return (
    <div className="namespace-tabs">
      <div className="row">
        <div className="container">
          {menu.map((val, idx) => {
            return (
              <Link
                key={val.label + idx}
                className={`link ${idx === currentIdx ? 'active' : ''}`}
                to={val.url}
              >
                <div className="cell">{val.label}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tabs;