import React, { FC } from 'react';
import Layout from '@/pages/components/_layout';
import { Card } from 'antd';
import PicList from '@/pages/components/picList/index';

const page: FC<{}> = () => {
  return (
    <Layout>
      <PicList />
    </Layout>
  );
};
export default page;
