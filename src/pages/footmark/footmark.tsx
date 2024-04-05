import React, { useState, useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import '@amap/amap-jsapi-types';
import axios from 'axios';
import {aMapKey,resourceUrls} from '../../config';
import marks from "./marks";
import marks_2024 from "./marks_2024";

import marker_b from '../../assets/img/icon/icon_marker_b.png';
import marker_r from '../../assets/img/icon/icon_marker_r.png';

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
          zoom: 5, //设置地图显示的缩放级别
          center: [108, 34], //设置地图中心点坐标
          // layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
          mapStyle: 'amap://styles/whitesmoke', //设置地图的显示样式
          viewMode: '2D', //设置地图模式
        });
        // axios.get(resourceUrls.footmarks).then(res=>{
        //   initMarkers(res.data);
        // });
        initMarkers(marks.concat(marks_2024))
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  function initMarkers(list:any[]):void{
    list.forEach((val:any)=>{
      const marker = new AMap.Marker({
        position: val.coordinate.split(','),
        label: {
          content: `<div class="marker-label">${val.name} </div>`,
          direction: 'bottom',
          offset: new AMap.Pixel(0, 5),
        },
        icon: new AMap.Icon({
          image: val.been ? marker_r : marker_b,
          imageSize: new AMap.Size(28, 28),
        }),
      });
      map.add(marker);
    });
  }
  return (
    <div className="nameplace_map">
      <div className="map">
        <div className="map-container" id="map-container"></div>
        <div className="cover"></div>
        <div className="notes">
          <div className="cell">
            <img src={marker_b} alt="" />
            <div>WILL</div>
          </div>
          <div className="cell">
            <img src={marker_r} alt="" />
            <div>BEEN</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footmark;

