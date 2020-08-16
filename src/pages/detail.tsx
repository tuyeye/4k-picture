import React from 'react';
import Layout from '@/pages/components/_layout';
import Detail from '@/pages/components/detail/index';
import { useParams } from 'umi';

export default () => {
  const params: any = useParams();

  return (
    <Layout>
      <Detail id={params.id} />
    </Layout>
  );
};
