import React, { useState, useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import '@amap/amap-jsapi-types';
import axios from 'axios';
import {aMapKey,resourceUrls} from '../../config';

import './footmark.scss';

let AMap:any = null;
let map:any = null;

function Footmark () {
  useEffect(()=>{
    init();
  },[]);
  //地图初始化
  function init(): void {
    AMapLoader.load({
      key: aMapKey, // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], //插件列表
    })
      .then((Amap) => {
        AMap = Amap;
        map = new Amap.Map('map-container', {
          zoom: 10, //设置地图显示的缩放级别
          center: [116.397428, 39.90923], //设置地图中心点坐标
          // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
          // mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
          viewMode: '2D', //设置地图模式
        });
        axios.get(resourceUrls.footmarks).then(res=>{
          console.log(res);
          initMarkers(res.data);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  function initMarkers(list:[]):void{
    list.forEach((val:any)=>{
      const marker = new AMap.Marker({
        position: val.coordinate.split(','),
        label: {
          content: val.name,
          direction: 'bottom',
          offset: new AMap.Pixel(0, 5)
        }
      });
      map.add(marker);
    });
  }
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

