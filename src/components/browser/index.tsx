import React, { useState, ReactEventHandler } from 'react';

interface BrowserType {
  url:string;
}

function Browser({ url }: BrowserType) {
  const [urlIptValue, setUrlIptValue] = useState(url);
  const [browserSrc, setBrowserSrc] = useState(urlIptValue);
  function onUrlInputChange(e: any) {
    setUrlIptValue(e.target.value);
  }
  function onJump(e: any) {
    if (e.keyCode !== 13) {
      return;
    }
    const src =
      urlIptValue.indexOf('http') > -1 ? urlIptValue : 'https://' + urlIptValue;
    setUrlIptValue(src);
    setBrowserSrc(src);
  }

  return (
    <div className="full browser">
      <div className="addr-row">
        <input
          className="ipt"
          type="text"
          value={urlIptValue}
          onChange={onUrlInputChange}
          onKeyDown={(e) => onJump(e)}
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
  );
}

export default Browser;