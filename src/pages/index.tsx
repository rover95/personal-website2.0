import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { init, animate } from '../common/smokeRender';
import { phrases, menuMap, toneKeyMap, animateMap } from '../common/listMap';
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
    // @ts-ignore
    synth.triggerAttackRelease(toneKeyMap.get(key), '16n', Tone.now(), 0.2);
  });
}

function Index () {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);
  useEffect(()=>{
    keyboardListen();
    init('canvas_box');
    animate();
    authorInfoRender(phrases);
  },[]);
  function onPageClick(e:any) {
    // history.push('/introduction');
    const now = Tone.now();
    setShowMenu(!showMenu);
    setRenderMenu(true);
    if(!showMenu){
      synth.triggerAttackRelease('E6', '16n', now + 0.1, 0.2);
      synth.triggerAttackRelease('E6', '16n', now + 0.2, 0.2);
      synth.triggerAttackRelease('C6', '16n', now + 0.3, 0.2);
      synth.triggerAttackRelease('D6', '16n', now + 0.4, 0.2);
    }else{
      synth.triggerAttackRelease('D6', '16n', now + 0);
      synth.triggerAttackRelease('C6', '16n', now + 0.1);
      synth.triggerAttackRelease('E6', '16n', now + 0.2);
      synth.triggerAttackRelease('E6', '16n', now + 0.3);

      // synth.triggerAttack('C4', now + 1);
      // synth.triggerAttackRelease('E4', '2n', now + 1.2);
    }
    

    // synth.triggerAttackRelease('C4', '2n', now);
    // synth.triggerAttackRelease('E4', '16n', now + 0.5);
    // synth.triggerAttackRelease('G5', '8n', now + 1);
  }
  function onMenuClick(e:any, val:any) {
    e.stopPropagation();
    history.push(val.url);
  }
  return (
    <div id="canvas_box" onClick={onPageClick}>
      <div className="menu-position">
        {renderMenu ? (
          <div className="menu-box">
            {menuMap.slice(1).map((val,idx) => {
              return (
                <div
                  key={val.url}
                  onClick={(e)=>onMenuClick(e,val)}
                  className={`cell animate__animated ${
                    showMenu ? animateMap.in[idx] : animateMap.out[idx]
                  } delay${idx}`}
                >
                  {val.label}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div id="author_info" className="index-info"></div>
    </div>
  );
}

export default Index;