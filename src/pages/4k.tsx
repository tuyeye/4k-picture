import React, { FC } from 'react';
import Layout from '@/pages/components/_layout';
import PicList from '@/pages/components/picList/index';

const brandData = [{ to: '/4k', title: '4k 壁纸' }];

const page: FC<{}> = () => {
  return (
    <Layout brand={brandData} map>
      <PicList resolving="4k" />
    </Layout>
  );
};
export default page;
