import React, { useState } from 'react';
// import './98.css';
import './test.css';

type Log = (name: string, other?:number)  => void;
interface Clog {
  dofun: Log;
  time: number;
  name: number;
}
interface Alert {
  name: string;
  data?: object;
}
class Boy {
  public name: string = 'himan';
} 
const boy = new Boy();

const l:Alert = {
  name:'alert'
};
enum Arr {a,bb,cc}
console.log(boy.name);

// const a:Log = (n:string,o)=>{
//   console.log(n+o);
// };
// function fun(p:Clog|Alert) {
//   console.log((p as Clog).time);
// }

// a('44',33);

function Test () {
  const [name, setName] = useState();
  return (
    <div>
      <div className="window" style={{width: 300}}>
        <div className="title-bar">
          <div className="title-bar-text">A Window With Stuff In It</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close">2</button>
          </div>
        </div>
        <div className="window-body">
          <p>There's so much room for activities!</p>
        </div>
      </div>
    </div>
  );
}

export default Test;
