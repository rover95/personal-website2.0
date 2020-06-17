import React, { useState } from 'react';

function Index(name:String {
  const [name, setName] = useState('rovelast');

  return (
    <div>
      {name}
    </div>
  )
}

export {Index}