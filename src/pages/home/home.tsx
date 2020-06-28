import React, { useState } from 'react';
import { Button } from "react-bootstrap";

import imgRovelast from "../../../assets/img/rovelast.png";

import "./home.scss"

console.log(imgRovelast)

function Home(){
  return (
    <div className="box">
      <img
        className="t-img"
        src={require("../../../assets/img/rovelast.png").default}
        alt=""
      />
      <Button variant="success">点击</Button>
    </div>
  );
}

export default Home;