import React, { FC } from 'react';
import Layout from '@/pages/components/_layout';
import PicList from '@/pages/components/picList/index';
import { useParams } from 'umi';

const page: FC<{}> = () => {
  const params: any = useParams();

  const brandData = [{ to: '#', title: params.search }];

  return (
    <Layout brand={brandData}>
      <PicList serachStr={params.search} key={params.search} />
    </Layout>
  );
};

export default page;
