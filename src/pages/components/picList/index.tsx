import React, { FC, useState, useEffect } from 'react';
import { connect } from 'dva';
import { Card, Pagination, Spin, Result } from 'antd';
import { picItem, picListKey } from './data.t';
import './index.css';

const namespace = 'picList';

//单个图片item
const ImgItem: FC<any> = ({ item }) => {
  const [url, setUrl] = useState<any>(require('./loading.gif'));

  return (
    <div className="imgItem">
      <img
        src={url}
        style={{
          width: '100%',
          objectFit: 'cover',
          cursor: 'pointer',
          height: '200px',
          zIndex: -999,
        }}
        onLoad={() => {
          setUrl(item.url);
        }}
        onClick={() => (window.location.href = `/detail/${item.id}`)}
      />
      <div className="imgItem-desc">{item.title}</div>
    </div>
  );
};

//图片item[]渲染
const RenderPics = (data: picItem[]) =>
  data.map((item: any, index: number) => (
    <Card.Grid key={index}>
      <ImgItem item={item} />
    </Card.Grid>
  ));

//分页组件
const PageChange: FC<any> = ({
  picList: { pageSize, pageNum, total },
  changePage,
}) => (
  <Pagination
    pageSize={pageSize}
    current={pageNum + 1}
    total={total}
    onChange={changePage}
    hideOnSinglePage
    style={{ width: 'fit-content', margin: '30px auto' }}
  />
);

const page: FC<any> = ({
  picList,
  dispatch,
  loading,
  resolving,
  classify,
  type,
  serachStr,
}) => {
  const { data, pageSize } = picList;

  const requestPage = async (page: number) => {
    let payload: picListKey = {
      pageSize,
      pageNum: page,
    };

    if (resolving) payload.resolving = resolving;
    if (classify) payload.classify = classify;
    if (type) payload.type = 'index';
    if (serachStr) payload.serachStr = serachStr;
    await dispatch({
      type: `${namespace}/fetch`,
      payload,
    });
  };

  const changePage = (page: number) => {
    requestPage(page - 1);
  };

  useEffect(() => {
    requestPage(0);
  }, []);

  return (
    <>
      {loading && (
        <Spin spinning tip="LOADING ...">
          <Card style={{ minHeight: 500 }}></Card>
        </Spin>
      )}

      {!loading &&
        (data.length === 0 ? (
          <Card type="inner">
            <Result
              status="404"
              title="咦？！居然一张图片都没有"
              subTitle="去其他分类看看吧 ～"
            />
          </Card>
        ) : (
          <>
            <Card type="inner">{RenderPics(data)}</Card>

            <PageChange picList={picList} changePage={changePage} />
          </>
        ))}
    </>
  );
};

export { RenderPics };

export default connect(({ picList, loading }: any) => ({
  picList,
  loading: loading.effects[`${namespace}/fetch`],
}))(page);
