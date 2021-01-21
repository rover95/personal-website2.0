import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useHistory, RouteComponentProps } from 'react-router-dom';
import { menuMap } from '../../common/listMap';

import './index.scss';


function Tabs (props:any) {
  const location = useLocation();
  console.log(props, location);
  
  const [menu] = useState(menuMap);
  const [width, setWidth] = useState(document.body.clientWidth);
  const currentIdx = menu.findIndex((val) => (val.url === location.pathname)); 
  window.onresize = ()=> {
    setWidth(document.body.clientWidth);
  };

  return (
    <div>
      {location.pathname !== '/' && currentIdx > -1 ? (
        <div className="namespace-tabs">
          <div className="row" style={{ width }}>
            <div className="row-container">
              {menu.map((val, idx) => {
                return (
                  <Link key={val.label + idx} className="link" to={val.url}>
                    {idx === currentIdx ? (
                      <div className="cell nameplace-failureEffect active">
                        <div className="text" data-text={val.label}>
                          {val.label}
                        </div>
                      </div>
                    ) : (
                      <div className="cell">
                        <div data-text={val.label}>{val.label}</div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
  
    

}

export default Tabs;