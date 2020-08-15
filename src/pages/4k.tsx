import React, { FC } from 'react';
import Layout from '@/pages/components/_layout';
import PicList from '@/pages/components/picList/index';

const page: FC<{}> = () => {
  return (
    <Layout>
      <PicList resolving="4k" />
    </Layout>
  );
};
export default page;
