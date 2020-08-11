import React, { FC,useState,useRef,useEffect } from 'react';

import './index.scss';

type Iprop = {
  image: string
};

const Parallax:FC<Iprop> = ({image,children=[]}) => {
  const card = useRef(null);
  const [position, setPosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(()=>{
    const cardRef = card.current || {offsetWidth:0,offsetHeight:0};
    setSize({
      width: cardRef.offsetWidth,
      height: cardRef.offsetHeight,
    });
  },[]);
  let mouseLeaveDelay:any;
  function handleMouseMove(e:any) {
    
    const {width,height} = size;
    const cardRef = card.current || {offsetLeft:0,offsetTop:0};

    const mouseX = e.pageX - cardRef.offsetLeft - width / 2;
    const mouseY = e.pageY - cardRef.offsetTop - height / 2;
    setPosition({
      mouseX,
      mouseY
    });
  }
  function handleMouseEnter() {
      clearTimeout(mouseLeaveDelay);
  }
  function handleMouseLeave() {
      mouseLeaveDelay = setTimeout(()=> {
          setPosition({
            mouseX:0,
            mouseY:0,
          });
      }, 1000);
  }
  function mousePX() {
      return position.mouseX / size.width;
  }
  function mousePY() {
      return position.mouseY / size.height;
  }
  function cardStyle() {
      const rX = mousePX() * 30;
      const rY = mousePY() * -30;
      return { transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)' };
  }
  function cardBgTransform() {
      const tX = mousePX() * -40;
      const tY = mousePY() * -40;
      return { transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)' };
  }
  function cardBgImage() {
      return { backgroundImage: 'url(' + image + ')' };
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
        <div className="card" style={cardStyle()}>
          <div className="card-bg" style={Object.assign({},cardBgTransform(),cardBgImage())}></div>
          {/* <div className="card-info">
            {children}
          </div> */}
        </div>
      </div>
    </div>
    
  );
};

export default Parallax;