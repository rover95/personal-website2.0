import React, { useState, ReactElement } from 'react';
import Win from '../../components/window';

import './project.scss';


interface ContainerProps {
  hideSourceOnDrag: boolean;
}
type Windwo = {
  id: string;
  title:string;
  zIndex: number;
  content?: ReactElement;
  height?: number;
  width?: number;
};

function Project () {
  const windowArr: Windwo[] = [
    {
      id: 'w1',
      title: 'www',
      zIndex: 0,
      content: (
        <div style={{ width: '100%', height: '100%'}}>
          <iframe
            src="https://www.zcool.com.cn/"
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      ),
    },
    {
      id: 'w2',
      title: '新建窗口',
      zIndex: 0,
      content: <div>asdqwe</div>,
      height: 200,
      width: 400,
    },
  ];
  const [urlIptValue, setUrlIptValue] = useState('https://www.baidu.com');
  const [browserSrc, setBrowserSrc] = useState('');
  const [windows, setWindows] = useState(windowArr);
  const onUrlInputChange = (e:any)=>{
    console.log(e.target.value);
    setUrlIptValue(e.target.value);
  };
  const onJump = ()=>{
    const src =
      urlIptValue.indexOf('http') > -1 ? urlIptValue : 'https://' + urlIptValue;
    setBrowserSrc(urlIptValue);
  };
  const onWindowClick = (idx:number)=>{
    const tmp = [...windows];
    tmp.forEach((val,i)=>{
      if(i === idx){
        val.zIndex =8;
      }else{
        val.zIndex = 0;
      }
    });
    setWindows(tmp);
  };
  return (
    <div className="namespace-project">
      <div className="page" id="project_page">
        {windows.map((val, idx) => {
          return (
            <div onMouseDown={() => onWindowClick(idx)} key={val.title + idx}>
              <Win
                parentNodeId="project_page"
                title={val.title}
                id={val.id}
                left={Math.random() * 600}
                top={Math.random() * 300}
                height={val.height}
                width={val.width}
                zIndex={val.zIndex}
              >
                {val.content}
              </Win>
            </div>
          );
        })}
        <div>
          <Win title="IE 6.0" left={30} top={30} width={500} height={300}>
            <div className="full browser">
              <div className="addr-row">
                <input
                  className="ipt"
                  type="text"
                  value={urlIptValue}
                  onChange={onUrlInputChange}
                />
                <button onClick={onJump}>跳转</button>
              </div>
              <div className="body">
                {browserSrc ? (
                  <div className="full">
                    <iframe src={browserSrc} className="full"></iframe>
                  </div>
                ) : null}
              </div>
            </div>
          </Win>
        </div>
      </div>
    </div>
  );
}

export default Project;