import React, { useState } from 'react';
import img_404 from '../assets/img/404.svg';

import './unmatch.scss';

function Unmatch() {
  return (
    <div className="box_404">
      <img src={img_404}></img>
      <div className="content">
        <h1>Page Not Found</h1>
        <a href="#">Back to Home</a>
      </div>
    </div>
  );
}

export default Unmatch;