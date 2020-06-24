import React, { useState } from 'react';

import './index.scss'

function Tabs () {
  const [name, setName] = useState('1')
  return (
    <div className='row'>
      <div className="cell">cell</div>
    </div>
  );
}

export default Tabs;