import React, { useState } from 'react';

import imgRovelast from "../../../assets/img/rovelast.png";

import "./home.scss"

console.log(imgRovelast);


function Home(){
  return (
    <div className="box">
      <img className="t-img" src={require("../../../assets/img/rovelast.png").default} alt="" />
    </div>
  );
}

export default Home;