import icon_qq from '../assets/img/icon/qq.svg';
import icon_tuchong from '../assets/img/icon/tuchong.svg';
import icon_email from '../assets/img/icon/email.svg';
import icon_weixin from '../assets/img/icon/weixin.svg';
import icon_weibo from '../assets/img/icon/weibo.svg';
import icon_github from '../assets/img/icon/github.svg';
import icon_zhihu from '../assets/img/icon/zhihu.svg';

interface Menu {
  label:string;
  url: string;
}
export interface ContactType {
  label: string;
  value: string;
  icon: any;
  url: string;
}

// 菜单
export const menuMap:Menu[] = [
  {
    label: 'HOME',
    url: '/',
  },
  {
    label: 'PHOTO',
    url: '/photography',
  },
  {
    label: 'ME',
    url: '/introduction',
  },
  {
    label: 'FOOTMARK',
    url: '/footmark',
  },
  {
    label: 'PROJECT',
    url: '/project',
  },
];

// 联系方式
export const contactIconMap:ContactType[] = [
  {
    label: 'QQ',
    value: '1958780450197021700',
    icon: icon_qq,
    url: '',
  },
  {
    label: '微信',
    icon: icon_weixin,
    value: 'aHR0cDovL4Uud2VjaGF0LmNvbS9FTzF5YTJlbDA4WkpNZDdpUFQzNVg2TQ==',
    url: '',
  },
  {
    label: '图虫',
    value: '--',
    icon: icon_tuchong,
    url: 'https://rovelast.tuchong.com/',
  },
  {
    label: '邮箱',
    value: 'cm92ZWxhc4RAZ21haWwuY29t',
    icon: icon_email,
    url: '',
  },
  {
    label: '微博',
    value: '--',
    icon: icon_weibo,
    url: 'http://weibo.com/u/5466949550',
  },
  {
    label: 'github',
    value: '--',
    icon: icon_github,
    url: 'https://github.com/rover95',
  },
  {
    label: '知乎',
    value: '--',
    icon: icon_zhihu,
    url: 'https://www.zhihu.com/people/rovelast',
  },
];

//首页欢迎语
export const phrases: string[] = [
  'Hi, man',
  'welcome to the remote corner of the Internet',
  'View the code on ',
  'https://github.com/rover95/personal-website2.0',
  '@rovelast',
  ' ',
];

//弹奏按键映射
export const toneKeyMap = new Map([
  ['a','B3'],
  ['s','C4'],
  ['d','D4'],
  ['f','E4'],
  ['g','F4'],
  ['h','G4'],
  ['j','A4'],
  ['k','B4'],
  ['l','C5'],
]);

//首页menu动画
export const animateMap = {
  in: [
    'animate__bounceInUp',
    'animate__bounceInLeft',
    'animate__bounceInRight',
    'animate__bounceInDown',
  ],
  out: [
    'animate__bounceOutUp',
    'animate__bounceOutLeft',
    'animate__bounceOutRight',
    'animate__bounceOutDown',
  ],
};

// 首页背景字体颜色
export const smokeTextColor = {//RGB颜色值
  main: [0.3,1,1],
  secondary: [0, 0.5,0.6],
};