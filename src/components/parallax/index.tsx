import React, { useState,useRef } from 'react';

function Parallax () {
  const card = useRef(null);
  const [position, setPosition] = useState({
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay:null 
  });
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  function handleMouseMove(e:any) {
    const {width,height} = size;
    const mouseX = e.pageX - card.offsetLeft - width / 2;
    const mouseY = e.pageY - card.offsetTop - height / 2;
    setPosition({
      mouseX,
      mouseY
    });
  }
  function handleMouseEnter() {
      clearTimeout(position.mouseLeaveDelay);
  }
  function handleMouseLeave() {
      const {mouseX,mouseY} = position;
      const mouseLeaveDelay = setTimeout(function () {
          mouseX = 0;
          mouseY = 0;
          setPosition({
            mouseX,
            mouseY,
            mouseLeaveDelay
          });
      } 1000);
  }
  function mousePX() {
      return this.mouseX / this.width;
  }
  function mousePY() {
      return this.mouseY / this.height;
  }
  function cardStyle() {
      let rX = this.mousePX * 30;
      let rY = this.mousePY * -30;
      return { transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)' };
  }
  function cardBgTransform() {
      let tX = this.mousePX * -40;
      let tY = this.mousePY * -40;
      return { transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)' };
  }
  function cardBgImage() {
      return { backgroundImage: 'url(' + this.dataImage + ')' };
  }
  return (
    <div className="parallax">
      <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={card}
    >
        <div className="card" style="cardStyle">
          <div className="card-bg" style="[cardBgTransform, cardBgImage]"></div>
          <div className="card-info">
            <slot name="header"></slot>
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Parallax;