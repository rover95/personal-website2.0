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
interface ContactType {
  label: string;
  value: string;
  icon: any;
  url: string;
}

export const menuMap:Menu[] = [
  {
    label: 'HOME',
    url: '/',
  },
  {
    label: 'PHOTOGRAPHY',
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

export const contactIconMap:ContactType[] = [
  {
    label: 'QQ',
    value: '1958780350197021700',
    icon: icon_qq,
    url: '',
  },
  {
    label: '微信',
    icon: icon_weixin,
    value: 'aHR0cDovL3Uud2VjaGF0LmNvbS9FTzF5YTJlbDA4WkpNZDdpUFQzNVg2TQ==',
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
    value: 'cm92ZWxhc3RAZ21haWwuY29t',
    icon: icon_email,
    url: '',
  },
  {
    label: '微博',
    value: '--',
    icon: icon_weibo,
    url: 'http://weibo.com/u/5366939550',
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

export const phrases: string[] = [
  'Hi, stranger',
  'welcome to the remote corner of the Internet',
  'View the code on ',
  'https://github.com/rover95/personal-website2.0',
  '@rovelast',
  ' ',
];