import React, { useState } from 'react';

import './introduction.scss';

function Introduction () {
  return (
    <div className="introduction">
      <div className="container">
        <div className="front side">
          <div className="content">
            <h1>孔乙己</h1>
            <p>我从十二岁起，便在镇口的咸亨酒店里当伙计，掌柜说，样子太傻，怕侍候不了长衫主顾，就在外面做点事罢。外面的短衣主顾，虽然容易说话，但唠唠叨叨缠夹不清的也很不少。他们往往要亲眼看着黄酒从坛子里舀出，看过壶子底里有水没有，又亲看将壶子放在热水里，然后放心：在这严重监督下，羼水也很为难。所以过了几天，掌柜又说我干不了这事。幸亏荐头的情面大，辞退不得，便改为专管温酒的一种无聊职务了。</p>
          </div>
        </div>
        <div className="back side">
          <div className="content">
            <h1>Contact Me</h1>
            <form>
              <label>Your Name :</label>
              <input type="text" placeholder="Omar Khattab"/>
              <label>Your E-mail :</label>
              <input type="text" placeholder="Example@mail.com"/>
              <label>Your message :</label>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;