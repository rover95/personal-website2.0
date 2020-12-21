import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { init, animate } from '../common/smokeRender';
import { phrases, menuMap } from '../common/listMap';
import * as Tone from 'tone';

// @ts-ignore
import TextScramble from '../common/textScramble';



import './index.scss';

const synth = new Tone.Synth().toDestination();


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
    console.log(e.key);
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
    // synth.triggerAttackRelease('C4', '8n');
    // synth.triggerAttackRelease('G4', '8n');
    if(!showMenu){
      synth.triggerAttackRelease('E4', '16n', now + 0.4);
      synth.triggerAttackRelease('E4', '16n', now + 0.5);
      synth.triggerAttackRelease('E4', '16n', now + 0.6);
      synth.triggerAttackRelease('E4', '16n', now + 0.7);
    }else{
      // synth.triggerAttackRelease('c3', '16n', now + 0.4);
      // synth.triggerAttackRelease('c3', '0.5s', now + 0.4);
      synth.triggerAttack('D4', now);
      synth.triggerAttack('F4', now + 0.5);
      synth.triggerAttack('A4', now + 1);
      synth.triggerAttack('C4', now + 1.5);
      synth.triggerAttack('E4', now + 2);
      // @ts-ignore
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
                  className={`cell animate__animated animate__${
                    showMenu ? 'zoomInDown delay' + idx : 'zoomOutUp'
                  }`}
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