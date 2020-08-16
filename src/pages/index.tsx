import React, { FC } from 'react';
import Layout from '@/pages/components/_layout';
import PicList from '@/pages/components/picList/index';

const page: FC<{}> = () => {
  return (
    <Layout midSearch map contentTopNumber={30} hiddenSmallSearch>
      <PicList type="index" />
    </Layout>
  );
};
export default page;
