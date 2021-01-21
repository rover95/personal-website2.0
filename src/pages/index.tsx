import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { init, animate } from '../common/smokeRender';
import { phrases, menuMap, toneKeyMap, animateMap } from '../common/listMap';
import { sha256 } from 'js-sha256';
import isPC from '../utils/isPC';
// @ts-ignore
import Parallax from 'parallax-js';
import * as Tone from 'tone';

// @ts-ignore
import TextScramble from '../common/textScramble';



import './index.scss';

const synth = new Tone.Synth({
  oscillator: {
    type: 'square',
  }
}).toMaster();
  // .toDestination();


function authorInfoRender(phrases: string[]) {
  const el = document.getElementById('author_info');
  const fx = new TextScramble(el);
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };
  next();
}

function keyboardListen() {
  document.addEventListener('keydown', (e) => {
    const key: string = e.key;
    const now = Tone.now();
    // @ts-ignore
    synth.triggerAttackRelease(toneKeyMap.get(key), '16n', now, 0.2);
  });
}

function Index () {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);
  useEffect(() => {
    const thatIsRight = sha256('useMe');
    if (!isPC()) {
      //菜单视差
      const scene = document.getElementById('scene');
      //@ts-ignore
      const parallax = new Parallax(scene);
    }
    keyboardListen(); //弹奏按键监听
    init('canvas_box');
    animate(); // 烟雾动画
    authorInfoRender(phrases);//动态文字
  },[]);
  function onPageClick(e:any) {
    const now = Tone.now();
    console.log(now);
    
    setShowMenu(!showMenu);
    setRenderMenu(true);
    if(!showMenu){  //弹出音效
      synth.triggerAttackRelease('E6', '16n', now + 0.1, 0.2);
      synth.triggerAttackRelease('E6', '16n', now + 0.2, 0.2);
      synth.triggerAttackRelease('C6', '16n', now + 0.3, 0.2);
      synth.triggerAttackRelease('D6', '16n', now + 0.4, 0.2);
    }else{
      
      synth.triggerAttackRelease('D6', '16n', now + 0, 0.2);
      synth.triggerAttackRelease('C6', '16n', now + 0.1, 0.2);
      synth.triggerAttackRelease('E6', '16n', now + 0.2, 0.2);
      synth.triggerAttackRelease('E6', '16n', now + 0.3, 0.2);
    }
   
  }
  function onMenuClick(e:any, val:any) {
    e.stopPropagation();
    history.push(val.url);
  }
  return (
    <div id="canvas_box" onClick={onPageClick}>
      <div className="menu-position">
        <div className="menu-box" style={{display:renderMenu?'block':'none'}} id="scene" data-pointer-events="true" data-invert-y="false" data-x-origin="0.5" data-y-origin="0.5" data-scalar-y="80.0" data-scalar-x="40.0" data-friction-x="0.15" data-friction-y="0.15">
            {menuMap.slice(1).sort((a,b)=>a.order-b.order).map((val, idx) => {
              return (
                <div key={val.url} className={`cell-position`} data-depth={idx + 1}>
                  <div onClick={(e) => onMenuClick(e, val)} className={`cell animate__animated ${showMenu ? animateMap.in[idx] : animateMap.out[idx]} delay${idx}`}>
                    {val.label}
                  </div>
                </div>
              );
            })}
          </div>
      </div>

      <div id="author_info" className="index-info"></div>
    </div>
  );
}

export default Index;