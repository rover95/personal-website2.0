import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Test from '../test/test';

import './home.scss';

function Home() {
  return (
    <div className="box">
      <img
        className="t-img"
        src={require('../../../assets/img/rovelast.png').default}
        alt=""
      />
      <Test></Test>
      <Button variant="success">点击</Button>
    </div>
  );
}

export default Home;