import React, { useState, useEffect, MouseEvent } from 'react';
import { contactIconMap } from '../../common/listMap';
import ContactCard from '../../components/contactCard';
import isPC from '../../utils/isPC';
import { imgBaseUrl } from '../../config';

// @ts-ignore
import skrollr from '../../common/skrollr.min.js';


let skrollrExample:any;

import './introduction.scss';

function getImgSrc(num:number){
  return `${imgBaseUrl}/bg-img/${num}.jpg`;
}

function Introduction () {
  const [info, setInfo] = useState(contactIconMap[3]);
  const [isRender, setIsRender] = useState(true);
  const [slideBox,setSlideBox] = useState({
    l_hover: false,
    r_hover: false
  });
  const [PC,setPC] = useState(isPC());
  useEffect(()=>{
    if(PC){
      skrollrExample = skrollrRender();
    }
    return () => {
      setIsRender(false);
      if (PC) {
        skrollrExample.destroy();
      }
    };
  },[]);
  function onInfoBoxMouseEnter(id:string){
    const tmp = id ==='l'?true:false;
    setSlideBox({l_hover:tmp,r_hover:!tmp});
  }
  function onInfoBoxMouseLeave(){
    setSlideBox({l_hover:false,r_hover:false});
  }
  function skrollrRender(){
    return skrollr.init({
      smoothScrolling: false,
      mobileDeceleration: 0.004,
      forceHeight: false,
    });
  }
  function showInfo(val:any) {
    if (val.url) {
      window.open(val.url);
    } else {
      setInfo(val);
    }
  }
  return (
    <div className="nameplace_introduction">
      {isRender ? (
        <div className="introduction-container">
          <div className="skrollr-box">
            {/* 背景图 */}
            <div className="parallax-image-wrapper parallax-image-wrapper-100" style={{ filter: 'dropShadow: 10px 10px 10px 10px #000' }} data-anchor-target="#head-bg" data-bottom-top="transform:translate3d(0px, 200%, 0px)" data-top-bottom="transform:translate3d(0px, 0%, 0px)">
              <div
                className="parallax-image parallax-image-100"
                style={{
                  backgroundImage: `url(${getImgSrc(5)})`,
                }}
                data-anchor-target="#head-bg"
                data-bottom-top="transform: translate3d(0px, -100%, 0px);"
                data-top-bottom="transform: translate3d(0px, 100%, 0px);"
              ></div>
            </div>

            <div className="parallax-image-wrapper parallax-image-wrapper-75" data-anchor-target="#content-bg-2" data-bottom-top="transform:translate3d(0px, 233%, 0px);filter: grayscale(-100%);" data-top-bottom="transform:translate3d(0px, 0%, 0px);filter: grayscale(130%);">
              <div
                className="parallax-image parallax-image-75"
                style={{
                  backgroundImage: `url(${getImgSrc(6)})`,
                }}
                data-anchor-target="#content-bg-2"
                data-bottom-top="transform: translate3d(0px, -15%, 0px);"
                data-top-bottom="transform: translate3d(0px, 75%, 0px);"
              ></div>
            </div>

            <div className="parallax-image-wrapper parallax-image-wrapper-100" data-anchor-target="#head-bg2" data-bottom-top="transform:translate3d(0px, 200%, 0px);filter: grayscale(-100%);" data-top-bottom="transform:translate3d(0px, 0%, 0px);filter: grayscale(100%);">
              <div
                className="parallax-image parallax-image-100"
                style={{
                  backgroundImage: `url(${getImgSrc(2)})`,
                }}
                data-anchor-target="#head-bg2"
                data-bottom-top="transform: translate3d(0px, -70%, 0px);"
                data-top-bottom="transform: translate3d(0px, 70%, 0px);"
              ></div>
            </div>

            <div className="parallax-image-wrapper parallax-image-wrapper-50" data-anchor-target="#content-bg-3 + .gap" data-bottom-top="transform:translate3d(0px, 300%, 0px)" data-top-bottom="transform:translate3d(0px, 0%, 0px)">
              <div
                className="parallax-image parallax-image-50"
                style={{
                  backgroundImage: `url(${getImgSrc(4)})`,
                }}
                data-anchor-target="#content-bg-3 + .gap"
                data-bottom-top="transform: translate3d(0px, -60%, 0px);"
                data-top-bottom="transform: translate3d(0px, 60%, 0px);"
              ></div>
            </div>

            {/* 主页面 */}
            <div className="skrollr-body" id="skrollr-body">
              <div
                id="head-bg"
                className="gap gap-100 flex-box"
                style={{
                  backgroundImage: `url(${getImgSrc(5)})`,
                }}
              >
                <div className="head-text t-center" data-0="display:block;left:50%;top:40%;transform: translateX(-50%);transform-origin:0 0;" data-300="top:-70%;">
                  <img className="h-img" src={getImgSrc(15)} alt="" />
                  <h1>{Math.round((new Date().getTime() - 799975200000) / 3600 / 1000)} </h1>
                  <p>hours ago，I was born</p>
                </div>
              </div>
              <div
                className="gap gap-100 p-1"
                id="head-bg2"
                style={{
                  backgroundImage: `url(${getImgSrc(2)})`,
                }}
              >
                <div className="position">
                  <h5>yú yòu shí jí shì xué </h5>
                  <h1>余幼时即嗜学</h1>
                  <h6>when I was a child, I loved learning</h6>
                  <p>古今中外，天文地理，阴阳五行，投资理财</p>
                  <p>奇门遁甲，看相占卜</p>
                  <p>均有涉猎</p>
                </div>
              </div>

              <div className="gap gap-100 p-6">
                <div className="card-box">
                  <div className="card-cell">
                    <img className="" src={getImgSrc(11)} alt="" />
                    <h4>克隆技术</h4>
                    <p>魔法师，克隆专家</p>
                  </div>
                  <div className="card-cell">
                    <img className="" src={getImgSrc(12)} alt="" />
                    <h4>摄影</h4>
                    <p>保持贫穷的法门</p>
                  </div>
                  <div className="card-cell">
                    <img className="" src={getImgSrc(13)} alt="" />
                    <h4>跋山涉水</h4>
                    <p>忽闻春尽强登山</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="l" style={{ opacity: slideBox.r_hover ? 0.5 : 1, backgroundImage: `url(${getImgSrc(7)})` }} onMouseEnter={() => onInfoBoxMouseEnter('l')} onMouseLeave={() => onInfoBoxMouseLeave()}>
                  <div className="info">
                    <div className="title">
                      <p>lǐ xiǎnɡ </p>
                      <h3>理想</h3>
                    </div>
                    <div className="extra">
                      <p>须知少日拏云志, 曾许人间第一流</p>
                      <p>春风得意马蹄疾, 一日看尽长安花</p>
                    </div>
                  </div>
                </div>
                <div className="r" style={{ opacity: slideBox.l_hover ? 0.5 : 1, backgroundImage: `url(${getImgSrc(8)})` }} onMouseEnter={() => onInfoBoxMouseEnter('r')} onMouseLeave={() => onInfoBoxMouseLeave()}>
                  <div className="info">
                    <div className="title">
                      <p>xiàn shí</p>
                      <h3>现实</h3>
                    </div>
                    <div className="extra">
                      <p>食不饱力不足，才美不外现</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-9">
                <h2>君子固穷</h2>
                <p>停辛贮苦，恩格尔系数偏高</p>
              </div>
              <div
                id="content-bg-2"
                className="gap gap-75 p-3"
                style={{
                  backgroundImage: `url(${getImgSrc(6)})`,
                }}
              >
                <h1>IT行业之底层民工</h1>
                <p>半路出家，成为了一名简易的web开发者</p>
                <p>前端切图仔，会写点代码的美工</p>
                <p>极为擅长CV操作</p>
              </div>
              <div
                className="content gap-200"
                id="content-bg-1"
                style={{
                  backgroundImage: `url(${getImgSrc(3)})`,
                }}
                data-anchor-target="#content-bg-1"
              >
                <div className="p-2" data-anchor-target="#content-bg-1" data-center-top="left:-50%;top:30%;transform: translateX(-50%);" data-top-top="left:50%;" data-bottom-bottom="left:50%;" data-center-bottom="left:250%;">
                  <h3>MY TITLE</h3>
                  <img src={getImgSrc(14)} alt="" />
                  <p>当代思考家、业余记者、无党派人士、摄影爱好者、优酷会员、饿了么超级VIP</p>
                </div>
              </div>

              <div className="content gap-100 p-4" id="content-bg-3">
                <div className="text-c" data-anchor-target="#content-bg-3" data-bottom-top="top:100%;left:50%;transform: translateX(-50%)" data-bottom-bottom="top:20%;" data-center-bottom="display:block;" data-top-bottom="top:-100%;display:none;">
                  <div>
                    <h1>安能摧眉折腰事权贵？</h1>
                    <p>假装为资本家卖命的同时，背后偷偷摸索社会主义现代化建设的发展之路，为共产主义事业奋斗</p>
                  </div>
                </div>
              </div>
              <div
                className="gap gap-50 flex-box"
                style={{
                  backgroundImage: `url(${getImgSrc(4)})`,
                }}
              >
                <div className="p-5">
                  <p>沐甚雨　栉疾风</p>
                  <p>鲜衣怒马</p>
                  <h1>浪迹天涯</h1>
                  {/* <p>愿千帆归来，仍是少年</p> */}
                </div>
              </div>
              <div className="p-7 content" id="done">
                <div className="foot">
                  <h2>单身</h2>
                  <p>寻觅佳人</p>
                  <p>
                    善良，美好，<s>正年少</s>
                  </p>
                  <p>适龄异性请想办法联系我</p>
                  <p>爱情经不起等待，添加好友就现在</p>
                  <i className="hide">“ 英雄，愿你有一份不悔的爱情 ”</i>
                </div>

                <div className="card-position">
                  <ContactCard info={info} setInfo={setInfo}></ContactCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Introduction;