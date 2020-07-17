import React, { useState } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import '@amap/amap-jsapi-types';

import './footmark.scss';

AMapLoader.load({
    'key': '464d5f5aa2e97c6d935209d632dbc321',   // 申请好的Web端开发者Key，首次调用 load 时必填
    'version': '2.0',   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    'plugins': []  //插件列表
}).then((AMap)=>{
    const map = new AMap.Map('map-container', {
      zoom: 10, //设置地图显示的缩放级别
      center: [116.397428, 39.90923], //设置地图中心点坐标
      // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
      // mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
      viewMode: '2D', //设置地图模式
    });
}).catch(e => {
    console.log(e);
});

function Footmark () {
  return (
    <div className="map-box">
      <div className="map">
        <div id="map-container" style={{ width: '80vw', height: '80vh' }}></div>
        <div className="cover"></div>
      </div>
    </div>
  );
}

export default Footmark;