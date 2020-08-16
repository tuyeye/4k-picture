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
    { path: '/', component: '@/pages/index', title: '首页 - 彼岸花网' },
    {
      path: '/detail/:id',
      component: '@/pages/detail',
      title: '详情页 - 彼岸花网',
    },
    { path: '/4k', component: '@/pages/4k', title: '4k壁纸 - 彼岸花网' },
    { path: '/5k', component: '@/pages/5k', title: '5k壁纸 - 彼岸花网' },
    {
      path: '/mobile',
      component: '@/pages/mobile',
      title: '手机屏壁纸 - 彼岸花网',
    },
    {
      path: '/classify/:id',
      component: '@/pages/classify',
      title: '分类 - 彼岸花网',
    },
    {
      path: '/search/:search',
      component: '@/pages/search',
      title: '搜索 - 彼岸花网',
    },
  ],
});
