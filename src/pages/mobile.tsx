import React, { FC } from 'react';
import Layout from './components/_layout';
import PicList from './components/picList/index';

const brandData = [{ to: '/mobile', title: '手机屏壁纸' }];

const page: FC<{}> = () => {
  return (
    <Layout brand={brandData} map>
      <PicList classify="4k手机" />
    </Layout>
  );
};
export default page;
