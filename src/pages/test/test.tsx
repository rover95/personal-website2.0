import React, { useState } from 'react';
// import './test.css';

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
      <button>test</button>
    </div>
  );
}

export default Test;
