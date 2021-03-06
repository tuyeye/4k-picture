import React, { FC } from 'react';
import Layout from '@/pages/components/_layout';
import PicList from '@/pages/components/picList/index';

const brandData = [{ to: '/5k', title: '5k 壁纸' }];

const page: FC<{}> = () => {
  return (
    <Layout brand={brandData}>
      <PicList resolving="5k" />
    </Layout>
  );
};
export default page;
