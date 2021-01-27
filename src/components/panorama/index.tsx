import React, { useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';



const Panorama = (props: any) => {
  const { src, width = window.innerWidth, height = window.innerHeight } = props;
  const renderer: any = new THREE.WebGLRenderer(); // 创建一个渲染器
  const scene: any = new THREE.Scene(); // 创建一个场景
  const geometry = new THREE.SphereBufferGeometry(100, 60, 40); // 创建一个球形的容器，用于贴全景图上去
  let material: any; // 贴图材质
  let mesh: any; //网格模型对象Mesh
  const camera = useMemo(() => {
    return new THREE.PerspectiveCamera(80, width / height, 0.1, 1000); // 创建一个摄像机
  }, [width, height]);
  let moving = false;
  let startX: number, endX: number, startY: number, endY: number;

  // 自动转动
  const animate = () => {
    requestAnimationFrame(animate);
    // mesh.rotation.y += 0.001;
    renderer.render(scene, camera);
  };
  // 缩放实现
  const onMouseWheel = (e:any) => {
    const y = e.nativeEvent.deltaY/10;
    camera.fov = camera.fov + y;
    if(camera.fov>100) camera.fov = 100;
    if(camera.fov<40) camera.fov = 40;
    camera.updateProjectionMatrix();
  };
  // 拖拽实现
  const onPanoMouseDown = (e:any)=>{
    startX = e.clientX;
    startY = e.clientY;
    moving = true;
    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
  };
  const onMouseMove = (e: any) => {
    if(!moving) return;
    camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), e.movementX / 500);
    camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), e.movementY / 500);
    // endX = e.clientX;
    // endY = e.clientY;
    // const x = endX - startX;
    // const y = endY - startY;
    // // camera.rotation.x = camera.rotation.x + y * 0.001;
    // // camera.rotation.y = camera.rotation.y + x * 0.001;
    // mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -x/500);
    // mesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), -y/500);
    // startX = endX;
    // startY = endY;
  };
  const onMouseUp = ()=>{
    moving = false;
  };
  // 更新窗口尺寸
  useEffect(() => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }, [width, height, src]);

  //图片src变更，重绘
  useEffect(() => {
    geometry.scale(-1, 1, 1);
    const texture = new THREE.TextureLoader().load(src);
    material = new THREE.MeshBasicMaterial({ map: texture });
    mesh = new THREE.Mesh(geometry, material);
    renderer.setSize(width, height);
    const box = document.getElementById('pano-box');

    //清除原有节点
    const childs = (box as HTMLElement).childNodes;
    for (let i = childs.length - 1; i >= 0; i--) {
      (box as HTMLElement).removeChild(childs[i]);
    }
    (box as HTMLElement).appendChild(renderer.domElement);

    scene.add(mesh);
    camera.position.z = 0;
    
    animate();
  }, [src]);
  
  return <div id="pano-box" onMouseDown={onPanoMouseDown} onWheel={onMouseWheel}>
    <canvas id="pano"></canvas>
  </div>;
};

export default Panorama;  