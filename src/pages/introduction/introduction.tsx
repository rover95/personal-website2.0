import React, { useState, useEffect } from 'react';
import { contactIconMap } from '../../common/listMap';
import ContactCard from '../../components/contactCard';
import isPC from '../../utils/isPC';

// @ts-ignore
import skrollr from '../../common/skrollr.min.js';

let skrollrExample:any;

import './introduction.scss';


function Introduction () {
  const [info, setInfo] = useState(contactIconMap[3]);
  const [isRender, setIsRender] = useState(true);
  const [PC,setPC] = useState(isPC());
  useEffect(()=>{
    if(PC){
      skrollrExample = skrollrRender();
    }
    return () => {
      setIsRender(false);
      if (PC) {
        skrollrExample.destroy();
      }
    };
  },[]);
  function skrollrRender(){
    return skrollr.init({
      smoothScrolling: false,
      mobileDeceleration: 0.004,
      forceHeight: false,
    });
  }
  function showInfo(val:any) {
    if (val.url) {
      window.open(val.url);
    } else {
      setInfo(val);
    }
  }
  return (
    <div className="nameplace_introduction">
      {isRender ? (
        <div className="introduction-container">
          <div className="skrollr-box">
            <div className="parallax-image-wrapper parallax-image-wrapper-100" data-anchor-target="#head-bg + .gap" data-bottom-top="transform:translate3d(0px, 200%, 0px)" data-top-bottom="transform:translate3d(0px, 0%, 0px)">
              <div
                className="parallax-image parallax-image-100"
                style={{
                  backgroundImage: 'url(./static/img/photo/12.jpg)',
                }}
                data-anchor-target="#head-bg + .gap"
                data-bottom-top="transform: translate3d(0px, -100%, 0px);"
                data-top-bottom="transform: translate3d(0px, 100%, 0px);"
              ></div>
            </div>

            <div className="parallax-image-wrapper parallax-image-wrapper-100" data-anchor-target="#content-bg-1 + .gap" data-bottom-top="transform:translate3d(0px, 200%, 0px)" data-top-bottom="transform:translate3d(0px, 0%, 0px)">
              <div
                className="parallax-image parallax-image-100"
                style={{
                  backgroundImage: 'url(./static/img/photo/48.jpg)',
                }}
                data-anchor-target="#content-bg-1 + .gap"
                data-bottom-top="transform: translate3d(0px, -80%, 0px);"
                data-top-bottom="transform: translate3d(0px, 80%, 0px);"
              ></div>
            </div>

            <div className="parallax-image-wrapper parallax-image-wrapper-50" data-anchor-target="#content-bg-2 + .gap" data-bottom-top="transform:translate3d(0px, 300%, 0px)" data-top-bottom="transform:translate3d(0px, 0%, 0px)">
              <div
                className="parallax-image parallax-image-50"
                style={{
                  backgroundImage: 'url(./static/img/photo/3.jpg)',
                }}
                data-anchor-target="#content-bg-2 + .gap"
                data-bottom-top="transform: translate3d(0px, -60%, 0px);"
                data-top-bottom="transform: translate3d(0px, 60%, 0px);"
              ></div>
            </div>

            <div className="skrollr-body" id="skrollr-body">
              <div className="header" id="head-bg"></div>
              <div
                className="gap gap-100 flex-box"
                style={{
                  backgroundImage: 'url(./static/img/photo/12.jpg)',
                }}
              >
                {PC ? (
                  <div className="head-text" data-0="display:block;left:50%;top:40%;transform: translateX(-50%);transform-origin:0 0;" data-300="top:-50%;">
                    {navigator.userAgent}
                  </div>
                ) : (
                  <div className="head-text">{navigator.userAgent}</div>
                )}
              </div>
              <div className="content gap-200" id="content-bg-1">
                <p>Landjaeger chicken ham fatback sausage hamburger, tri-tip capicola pastrami pancetta ribeye turducken. Rump shank turkey pig kevin sausage meatloaf tenderloin drumstick short ribs short loin. Prosciutto spare ribs chuck, pork strip steak pork chop swine bacon turkey shoulder andouille. Jowl landjaeger chicken corned beef. Ham hock kielbasa pancetta ground round sausage. Spare ribs porchetta pastrami filet mignon drumstick ball tip. Beef ribs prosciutto kevin, landjaeger shoulder ham hock ham brisket sirloin chuck t-bone drumstick kielbasa pork chop.</p>
              </div>
              <div
                className="gap gap-100"
                style={{
                  backgroundImage: 'url(./static/img/photo/48.jpg)',
                }}
              >
                {PC ? (
                  <div className="body-text" data-anchor-target="#content-bg-1" data-center-top="left:-50%;top:30%;transform: translateX(-50%);" data-top-top="left:50%;" data-bottom-bottom="left:50%;" data-center-bottom="left:150%;">
                    asdqweqwe
                  </div>
                ) : (
                  <div className="body-text">
                    asdqweqwe
                  </div>
                )}
              </div>
              <div className="content gap-100" id="content-bg-2">
                <div id="properties" data-1700="top:100%;" data-2200="top:20%;" data-3000="display:block;" data-3700="top:-100%;display:none;">
                  <h2>all numeric properties</h2>
                  <p>width, height, padding, font-size, z-index, blah blah blah</p>
                </div>
              </div>
              <div
                className="gap gap-50 flex-box"
                style={{
                  backgroundImage: 'url(./static/img/photo/3.jpg)',
                }}
              >
                <div className="f-box">333333</div>
              </div>
              <div className="content" id="done">
                thanks!
                <div className="card-position">
                  <ContactCard info={info} setInfo={setInfo}></ContactCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Introduction;