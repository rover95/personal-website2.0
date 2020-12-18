import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

// @ts-ignore
import TextScramble from '../common/textScramble';

import img_rovelast from '../assets/img/rovelast_f.png';
import img_smoke from '../assets/img/smoke.png';

import './index.scss';

type TextSize = {
  width: number,
  height: number
};

let camera: any,
  scene: any,
  renderer: any,
  geometry,
  material,
  mesh: any,
  cubeSineDriver: any,
  textGeo,
  textTexture,
  textMaterial,
  text,
  light,
  smokeTexture,
  smokeMaterial,
  smokeGeo,
  smokeParticles: any,
  delta: any,
  clock: any,
  textSize: TextSize,
  author_info: any;

const phrases = [
  'welcome, stranger',
  'view the code on ',
  'https://github.com/rover95/personal-website2.0',
];
function init() {
  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  textSize = {
    width: window.innerWidth / 4 ,
    height: window.innerWidth / 4 ,
  };
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1000;
  scene.add(camera);

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshLambertMaterial({
    color: 0xaa6666,
    wireframe: false,
  });
  mesh = new THREE.Mesh(geometry, material);
  // scene.add( mesh );
  cubeSineDriver = 0;

  textGeo = new THREE.PlaneGeometry(textSize.width, textSize.height);
  THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
  textTexture = THREE.ImageUtils.loadTexture(img_rovelast);
  textMaterial = new THREE.MeshLambertMaterial({
    color: 0xffff33,
    opacity: 1,
    map: textTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });
  text = new THREE.Mesh(textGeo, textMaterial);
  text.position.z = 800;
  scene.add(text);

  light = new THREE.DirectionalLight(0xffffff, 0.8);
  light.position.set(-1, 0, 1);
  scene.add(light);

  smokeTexture = THREE.ImageUtils.loadTexture(img_smoke);
  smokeMaterial = new THREE.MeshLambertMaterial({
    color: 0x0088dd,
    map: smokeTexture,
    transparent: true,
  });
  smokeGeo = new THREE.PlaneGeometry(300, 300);
  smokeParticles = [];

  for (let p = 0; p < 150; p++) {
    const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    particle.position.set(
      Math.random() * 500 - 250,
      Math.random() * 500 - 250,
      Math.random() * 1000 - 100
    );
    particle.rotation.z = Math.random() * 360;
    scene.add(particle);
    smokeParticles.push(particle);
  }
  const box = document.getElementById('canvas_box');
  if(box){
    box.appendChild(renderer.domElement);
  }
  // document.body.appendChild(renderer.domElement);
}

function animate() {
  // note: three.js includes requestAnimationFrame shim
  delta = clock.getDelta();
  requestAnimationFrame(animate);
  evolveSmoke();
  render();
}

function evolveSmoke() {
  let sp:any = smokeParticles.length;
  while (sp--) {
    smokeParticles[sp].rotation.z += delta * 0.2;
  }
}

function render() {
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  cubeSineDriver += 0.01;
  mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
  renderer.render(scene, camera);
}

function authorInfoRender(phrases: string[]) {
  const el = document.getElementById('author_info');
  const fx = new TextScramble(el);
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1800);
    });
    counter = (counter + 1) % phrases.length;
  };
  next();
}
function Index () {
  useEffect(()=>{
    init();
    animate();
    authorInfoRender(phrases);
  },[]);
  return (
    <div id="canvas_box">
      <div id="author_info" className="index_info">
        
      </div>
    </div>
  );
}

export default Index;