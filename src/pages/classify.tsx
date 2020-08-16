import React, { FC } from 'react';
import { useParams } from 'umi';
import Layout from '@/pages/components/_layout';
import PicList from '@/pages/components/picList/index';

const page: FC<{}> = () => {
  const params: any = useParams();
  const brandData = [
    { to: '/4k', title: '4k 壁纸' },
    { to: `/classify/${params.id}`, title: params.id },
  ];

  return (
    <Layout map brand={brandData}>
      <PicList classify={params.id} key={params.id} />
    </Layout>
  );
};
export default page;
