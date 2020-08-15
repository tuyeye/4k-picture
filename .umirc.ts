import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  dva: {},
  links: [
    {
      rel: 'icon',
      href:
        'https://gw.alipayobjects.com/mdn/afts/img/A*tF_ZT5B56RUAAAAAAAAAAABjARQnAQ/original?bz=rms',
      type: 'image/x-icon',
    },
  ],
  theme: {
    '@primary-color': '#EC5658',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', title: '首页' },
    { path: '/detail/:id', component: '@/pages/detail', title: '详情页' },
    { path: '/4k', component: '@/pages/4k', title: '4k壁纸' },
    { path: '/5k', component: '@/pages/5k', title: '5k壁纸' },
  ],
});
